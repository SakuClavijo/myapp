const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json);

//conexion a mongo
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUninifiedTopology: true
}).then(()=> console.log("Conectado a Mongo"))
  .catch(err => console.log("Error al conectar al Mongo", err));

//Importar las rutas 
const userRoutes = require("./routes/users");
const projectRoutes = require("./routes/projects");

//Usar las rutas

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

//Iniciar el servidor

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Servidor corriendo en el puerto ${port}");
});

