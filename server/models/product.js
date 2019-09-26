const mongoose = require('mongoose');
let uniqueValid = require('mongoose-unique-validator');
require('../config/mongoose.js');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Products must contain a Name"], minlength: [3, "Name field require at least 3 characters"]},
    qty: {type: Number, required: [true, "Products must contain a Qty"], min: [0, "Qty must be a number greater than or equal to 0"]},
    price: {type: Number, required: [true, "Products must contain a Price"], min: [0, "Price must be a number greater than or equal to 0."]},
    }, {timestamps: true })
const Product = mongoose.model('Product', ProductSchema); 

ProductSchema.plugin(uniqueValid, {message: `{PATH} must be unique!`});

module.exports = Product;