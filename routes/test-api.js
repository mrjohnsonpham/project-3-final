const express = require('express');

const Router = express.Router();

Router.get("/test-api", (req, res) => {
    res.send("That works, thanks Nick!");
});

module.exports = Router;