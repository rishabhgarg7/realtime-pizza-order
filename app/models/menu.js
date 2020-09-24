const mongoose = require('mongoose');
const Schema = mongoose.Schema; //here Schema is class, skeleton, blueprint

const menuSchema = new Schema({
    name: {type:String, required:True},
    image: {type:String, required:True}, //url of image
    price: {type:Number, required:True},
    size: {type:String, required:True},

})

const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu;