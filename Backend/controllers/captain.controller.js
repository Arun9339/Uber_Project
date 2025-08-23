const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
  try {
    // ✅ Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    // ✅ Check if captain already exists
    const isCaptainAlreadyExists = await captainModel.findOne({ email });
    if (isCaptainAlreadyExists) {
      return res.status(409).json({ message: 'Captain with this email already exists' });
    }

    // ✅ Hash password
    const hashedPassword = await captainModel.hashPassword(password);

    // ✅ Create new captain
   const captain = await captainService.createCaptain({
  fullname: {
    firstname: fullname.firstname,
    lastname: fullname.lastname
  },
  email,
  password: hashedPassword,
  color: vehicle.color,
  plate: vehicle.plate,
  capacity: vehicle.capacity,
  vehicleType: vehicle.Type   // watch case-sensitivity!
});
    return res.status(201).json({
      message: 'Captain registered successfully',
      captain
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Server error',
      error: err.message
    });
  }
};
