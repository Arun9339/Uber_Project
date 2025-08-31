const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        const exists = await captainModel.findOne({ email });
        if (exists) return res.status(409).json({ message: 'Captain with this email already exists' });

        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createCaptain({
            fullname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.type
        });

        const token = captain.generateAuthToken();

        res.status(201).json({ captain, token });

    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports.captainLogin = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email, password } = req.body;
        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain) return res.status(401).json({ error: 'Invalid email or password' });

        const isMatch = await captain.comparePassword(password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

        const token = captain.generateAuthToken();
        res.status(200).json({ captain, token });

    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(400).json({ message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];

        await blacklistTokenModel.create({ token });
        res.status(200).json({ message: 'Logged out successfully' });

    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
