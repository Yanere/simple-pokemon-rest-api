const express = require("express");
const pokemonRouter = require("./routes/pokemonRoutes");
const app = express();

app.use("/api/v1/pokemon", pokemonRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

module.exports = app;
