const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");

router.get("/create-celebrity", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create-celebrity", async (req, res) => {
  try {
    const newCelebrity = await CelebrityModel.create(req.body);
    console.log("New celebrity Created ", newCelebrity);
    res.redirect("/celebrities");
  } catch (err) {
    console.log("there was an error", err);
    res.redirect("/new-celebrity");
  }
});

module.exports = router;
