const express = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', authController.getLogin);

router.post('/login', 
    [
        body('email')
        .isEmail()
        .withMessage('Please enter a valid email address.')
        .normalizeEmail(),
        body('password', 'Password has to be valid.')
        .isLength({ min: 5 })
        .isAlphanumeric()
        .trim()
    ]
    ,authController.postLogin);

router.post('/logout', authController.postLogout);

module.exports = router;
