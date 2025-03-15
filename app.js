const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const dbConnect = require("./config/mongo");
const usersRouter = require("./routes/auth");
const educacionRouter = require("./routes/educacion");
const proyectosRouter = require("./routes/proyectos");
const experienciaRouter = require("./routes/experiencia");

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("storage"));

//rutas
app.use("/api/auth", usersRouter);
app.use("/api/educacion", educacionRouter);
app.use("/api/proyectos", proyectosRouter);
app.use("/api/experiencia", experienciaRouter);

dbConnect();
app.listen(port, () => {
  console.log("tu app esta lista en el puerto " + port);
});
