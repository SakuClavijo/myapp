const express = require("express");
const router = express.Router();
const User = require("../models/user");

//Crear nuevo usuario
router.post("/", async (req, res) => {
    const { name, email, password, role } = req.body;
    const user = new User({name, email, role, password});
    await user.save();
    res.json(user);
});

//Obtener todos los usuarios

router.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;


