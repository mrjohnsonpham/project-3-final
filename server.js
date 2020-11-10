const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
require("dotenv").config();
console.log(process.env.MONGODB_URI)



// const testApi = require('./routes/test-api');
// const products = require('./routes/api/products');
// kyle added 9-11
const session = require("express-session");
//requiring pasport as we've configured it
const passport = require("./config/passport");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// kyle added 18-23
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "our stuff will go here", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)

//======
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/', routes);
// app.use('/monkey-api', testApi);
// app.use('/api/products', products);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));  
});
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3final");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT}`);
});
