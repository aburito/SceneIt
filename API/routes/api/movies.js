const express = require("express");
const uuid = require("uuid");
const router = express.Router();

// Gets all movies
router.get("/", (req, res) => {
  //returns all movies with this data [title, date, avgScore, img, genre]
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();
    // query to the database and get the records
    const query = "select * from movies"; // example query
    request.query(query, function (err, recordset) {
      if (err) {
        //handle the error appriopriately send reload or other
        //message back to front-end.
        console.log(err);
      }
      // send records as a response
      res.send(res.json(recordset));
    });
  });
});

router.get("/:id", (req, res) => {
  //requesting all data from database about movie with said ID
});

module.exports = router;
