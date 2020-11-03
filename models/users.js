const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usersSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        date: { type: Date, default: Date.now }
    }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;