const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.json({
        data: 'YAY!!! You hit the signup endpoint from the ROUTER! GREAT JOB!!!'
    });
});

router.get('/signin', (req, res) => {
    res.json({
        data: 'Here is the signin page!'
    });
});

router.get('/forgotPassword', (req, res) => {
    res.json({
        data: 'Did you forget your password? Reset here!'
    });
});

module.exports = router; // {} by default