const Pokemon = require("../models/pokemonModel");

exports.getAllPokemon = async (req, res) => {
  try {
    const query = Pokemon.find();
    query.select("-_id");

    // Filter for specific Type
    if (req.query.type) {
      query.find({
        type: req.query.type.charAt(0).toUpperCase() + req.query.type.slice(1),
      });
    }

    // Filter for Generation
    if (req.query.generation) {
      switch (req.query.generation) {
        case "1":
          query.find({ id: { $lte: 151 } });
          break;
        case "2":
          query.find({ id: { $gte: 152, $lte: 251 } });
          break;
        case "3":
          query.find({ id: { $gte: 252, $lte: 386 } });
          break;
        case "4":
          query.find({ id: { $gte: 387, $lte: 493 } });
          break;
        case "5":
          query.find({ id: { $gte: 494, $lte: 649 } });
          break;
        case "6":
          query.find({ id: { $gte: 650, $lte: 721 } });
          break;
        case "7":
          query.find({ id: { $gte: 722, $lte: 809 } });
          break;
        default:
          break;
      }
    }
    query.sort({ id: 1 });
    const data = await query;
    res.status(200).json({
      status: "success",
      results: data.length,
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getPokemon = async (req, res) => {
  try {
    const data = await Pokemon.find({ id: req.params.id }).select("-_id");
    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
