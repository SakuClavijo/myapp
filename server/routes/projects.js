const express = require("express");
const router = express.Router();
const Project = require("../models/project");

//Crear un proyecto

router.post("/", async (req, res) => {
    const { title, description, members, startDate, endDate } = req.body;
    const project = new Project({ title, description, members, startDate, endDate });
    await project.save();
    res.json(project);
});

//Obtener todos los proyectos

router.get("/", async (req, res) => {
    const projects = await Project.find().populate("members");
    res.json(projects);
});

module.exports = router;