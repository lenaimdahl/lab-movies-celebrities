const express = require("express");
const router = require("express").Router();

require("./celebrities.routes");
require("./movies.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
