const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
const userroutes = require('./route/user.routes');
const captainRoutes = require('./route/captain.routes');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const connectDB = require('./db/db');
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});





app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userroutes);
app.use('/captains',captainRoutes);


module.exports = app;   