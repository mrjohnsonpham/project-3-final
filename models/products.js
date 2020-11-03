const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productsSchema = new Schema(
    {
        // Product name, Price, Category, Item number, Description, and Image
        productName: { type: String, required: true, unique: true },
        price: Number,
        category: { type: String, required: true},
        itemNumber: Number,
        description: { type: String, required: true},
        image: String,
        date: { type: Date, default: Date.now }
    }
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;