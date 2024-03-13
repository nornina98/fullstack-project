const express = require("express");
const cors = require("cors");

const path = require("path");

const app = express();

const planetsRouter = require("./routes/planets/planets.router");

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

// Define routes or middleware using express json
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(planetsRouter);

module.exports = app;
