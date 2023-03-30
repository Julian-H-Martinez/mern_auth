const mongoose = require('mongoose')
const crypto = require('crypto')

// user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        lowercase: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String, 
    role: {
        type: String,
        default: 'subscriber'
    },
    resetPasswordLink: {
        type: String,
        default: 'subscriber'
    }
}, {timestamps: true});

// virtual field
// userSchema.virtual('password')
// .set(function(password){
//     this._password = password
//     this.salt = this.makeSalt()
//     this.hashed_password = this.encryptPassword(password)
// })
// .get(function(){
//     return this._password
// })



// methods