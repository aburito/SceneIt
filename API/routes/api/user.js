const express = require("express");
const uuid = require("uuid");
const router = express.Router();

// check user
router.get("/", (req, res) => {
  //returns all movies with this data [title, date, avgScore, img, genre]
  res.json(movies);
});

router.get("/:id", (req, res) => {
  //requesting all data from database about movie with said ID
});

// registering a user member
router.put("/:id", (req, res) => {
  //validate new user and register to db
});

// registering a user member
router.put("/:id&:movieID", (req, res) => {
  // post review from user
});

module.exports = router;
