const express = require('express');

const router = express.Router();

app.get('/api/signup', (req, res) => {
    res.json({
        data: 'YAY!!! You hit the signup endpoint! GREAT JOB!!!'
    })
})
