const router = require("express").Router();

router.get("/create-movie", (req, res) => {
  res.render("movies/new-movie");
});

router.post("/create-movie", async (req, res) => {
  try {
    const newMovie = await MovieModel.create(req.body);
    console.log("New Movie Created ", newMovie);
    res.redirect("movies");
  } catch (err) {
    console.log("there was an error", err);
    res.redirect("movies/new-movie");
  }
});

module.exports = router;
