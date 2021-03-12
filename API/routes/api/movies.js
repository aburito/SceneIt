const express = require("express");
const uuid = require("uuid");
const router = express.Router();

// Gets all movies
router.get("/", (req, res) => {
  //returns all movies with this data [title, date, avgScore, img, genre]
  res.json(movies);
});

router.get("/:id", (req, res) => {
  //requesting all data from database about movie with said ID
});

module.exports = router;
