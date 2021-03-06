const mongoose = require('mongoose');
const Schema = mongoose.Schema; //here Schema is class, skeleton, blueprint

const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique: true},
    password: {type:Number, required:true},
    role: {type:String, default:'customer',required:false},

}, {timestamps:true})

const User = mongoose.model('User', userSchema)

module.exports = User;