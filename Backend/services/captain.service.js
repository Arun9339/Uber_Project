const Captain = require('../models/captain.model');

module.exports.createCaptain = async ({ 
    fullname, email, password, color, plate, capacity, vehicleType 
}) => {
    // Validate required fields
    if (!fullname?.firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }

    // Create new captain
    const captain = await Captain.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname || "" // allow optional lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            type: vehicleType
        }
    });

    return captain;
};
