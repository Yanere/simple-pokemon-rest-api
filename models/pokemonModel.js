const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    id: Number,
    name: Object,
    type: [String],
    base: Object,
  },
  { collection: "Pokemon" }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
