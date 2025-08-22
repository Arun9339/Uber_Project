const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to Database');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
}
 
module.exports = connectDB;
