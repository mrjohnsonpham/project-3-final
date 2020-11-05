const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Products collection and inserts the products below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3final"
);

const ProductsSeed = [
    {
        productName: "Hoodie",
        price: 65,
        category: "Johnson Specials",
        itemNumber: 1,
        description: "The shirt literally off Johnson's back",
        image: "../img/1hoodie1.png",
        date: new Date(Date.now())
        
    },
    {
        productName: "Pants",
        price: 9000,
        category: "Jivko Specials",
        itemNumber: 2,
        description: "The shirt literally off Johnson's back",
        image: "../img/1pants1.png",
        date: new Date(Date.now())
    }
];

db.Products
    .remove({})
    .then(() => db.Products.collection.insertMany(ProductsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
