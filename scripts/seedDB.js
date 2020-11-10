const mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();


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
        date: new Date(Date.now()),
        inCart: false,
        isAvailable: true,
        inStock: 8,
        shippingCost: 6.99
        
    },
    {
        productName: "Don't Bother Me Lounge Pants",
        price: 9000,
        category: "Jivko Specials",
        itemNumber: 2,
        description: "The shirt literally off Johnson's back",
        image: "../img/1pants1.jpg",
        date: new Date(Date.now()),
        inCart: false,
        isAvailable: true,
        inStock: 5,
        shippingCost: 6.99
    },
    {
        productName: "Premium Black Resort Cargo",
        price: 80,
        category: "Jivko Specials",
        itemNumber: 3,
        description: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        image: "../img/2pants2.jpg",
        date: new Date(Date.now()),
        inCart: false,
        isAvailable: true,
        inStock: 12,
        shippingCost: 6.99
    },
    {
        productName: "Obessesion Supima Tshirt",
        price: 45,
        category: "Jivko Specials",
        itemNumber: 4,
        description: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park",
        image: "../img/2shirt2.jpg",
        date: new Date(Date.now()),
        inCart: false,
        isAvailable: true,
        inStock: 5,
        shippingCost: 6.99
    },
    {
        productName: "Fancy Denim Blue",
        price: 75,
        category: "Jivko Specials",
        itemNumber: 5,
        description: "Lorem ipsum dolor amet offal butcher",
        image: "../img/3jeans3.jpg",
        date: new Date(Date.now()),
        inCart: false,
        isAvailable: true,
        inStock: 5,
        shippingCost: 6.99
    },
    {
        productName: "Gentlemen Quarter Zip",
        price: 70,
        category: "Jivko Specials",
        itemNumber: 6,
        description: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually",
        image: "../img/3sweater3.jpg",
        date: new Date(Date.now()),
        inCart: false,
        isAvailable: true,
        inStock: 16,
        shippingCost: 6.99
    },
    {
        productName: "Worry Free Island Button Down",
        price: 55,
        category: "Jivko Specials",
        itemNumber: 7,
        description: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth",
        image: "../img/4shirt4.jpg",
        date: new Date(Date.now()),
        inCart: false,
        isAvailable: true,
        inStock: 2,
        shippingCost: 6.99
    },
    {
        productName: "Cargo Resort Shorts",
        price: 3200,
        category: "Jivko Specials",
        itemNumber: 8,
        description: "olor amet offal butcher quinoa sustainable gastropub, ec",
        image: "../img/4shorts4.jpg",
        date: new Date(Date.now()),
        inCart: false,
        isAvailable: true,
        inStock: 5,
        shippingCost: 6.99
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
