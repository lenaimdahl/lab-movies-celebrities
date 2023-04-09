const router = require("express").Router();

router.get("/edit-movie", (req, res) => {
  res.render("movies/edit-movie");
});

router.post("/edit-movie", async (req, res) => {
  try {
    const newMovie = await MovieModel.create(req.body);
    console.log("New Movie Created ", newMovie);
    res.redirect("movies");
  } catch (err) {
    console.log("there was an error", err);
    res.redirect("movies/edit-movie");
  }
});

module.exports = router;
