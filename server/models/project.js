const mongoose = require =("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    members: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}], //Usuarios asignados
    startDate: Date,
    endDate: Date,
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Project", projectSchema);
