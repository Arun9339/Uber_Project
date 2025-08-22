const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
const userroutes = require('./route/user.routes');


const connectDB = require('./db/db');
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});





app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userroutes);



module.exports = app;   