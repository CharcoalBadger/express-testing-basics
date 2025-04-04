// app.js
const express = require("express");
const app = express();
require("dotenv").config();

const indexRoutes = require("./routes/index");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRoutes);

module.exports = app;
