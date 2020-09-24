const mongoose = require('mongoose');
const Schema = mongoose.Schema; //here Schema is class, skeleton, blueprint

const menuSchema = new Schema({
    name: {type:String, required:true},
    image: {type:String, required:true}, //url of image
    price: {type:Number, required:true},
    size: {type:String, required:true},

})

const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu;