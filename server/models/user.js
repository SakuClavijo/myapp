const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    createdAt:{type: Date, defualt: Date.now}
});

module.exports = mongoose.model("User", userSchema); //exportamos el modelo User con el esquema userSchema