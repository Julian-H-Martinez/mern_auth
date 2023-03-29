// importing express
// import express from 'express';

const express = require('express');

// storing invoked express in const app
// allows us to access all functionalities express provides
const app = express();

// Import Routes
const authRoutes = require('./routes/auth');

// middleware
app.use('/api', authRoutes);

// creating const to hold port we are using
const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port}!`)
});