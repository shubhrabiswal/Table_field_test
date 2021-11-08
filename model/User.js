const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required:true,
        unique: true,
    }
})


module.exports = mongoose.model('User', UserSchema)
