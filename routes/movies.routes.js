const router = require("express").Router();
const MovieModel = require("../models/movie.model");

router.get("/create-movie", (req, res) => {
  res.render("movies/new-movie");
});

router.post("/create-movie", async (req, res) => {
  try {
    const newMovie = await MovieModel.create(req.body);
    console.log("New Movie Created ", newMovie);
    res.redirect("/movies");
  } catch (err) {
    console.log("there was an error", err);
    res.redirect("/new-movie");
  }
});

router.get("/movies", (req, res) => {
  res.render("movies/movies");
});

router.get("/movie-details", (req, res) => {
  res.render("movies/movie-details");
});

module.exports = router;
