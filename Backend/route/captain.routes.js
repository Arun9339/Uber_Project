const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/login', [
    body('email')
        .isEmail()
        .withMessage('Invalid email format'),
    body('password')
        .notEmpty()
        .withMessage('Password is required'),
], captainController.captainLogin);







router.post('/register', [
    body('email')
        .isEmail()
        .withMessage('Invalid email format'),

  
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),

 
        
],
captainController.registerCaptain);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);


router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
