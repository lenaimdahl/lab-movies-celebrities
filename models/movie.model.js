const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  genre: String,
  director: String,
  plot: String,
  image: String,
  cast: [{ type: Schema.Types.ObjectId, ref: "celebrity" }],
});

const MovieModel = model("movie", movieSchema);
module.exports = MovieModel;
