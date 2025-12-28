const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();

const userRoutes = require("./src/routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

//Rotas
app.use("/users", userRoutes);

module.exports = app;
