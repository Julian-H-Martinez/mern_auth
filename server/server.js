// Imports
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config() //   allows us to use environmental variables and executing config

// storing invoked express in const app
// allows us to access all functionalities express provides
const app = express();

// Import Routes
const authRoutes = require('./routes/auth');

// app Middleware -> needs to placed before route middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // allows all origins
if(process.env.NODE_ENV = 'development') {
    app.use(cors({origin: `http://localhost:3000`}));
}

// Route Middleware
app.use('/api', authRoutes);


// creating const to hold port we are using
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port}!`)
});

// mongoose
//     .connect(process.env.DATABASE, {})
//     .then(() => console.log("DB connected"))
//     .catch((err) => console.log("DB Error => ", err));