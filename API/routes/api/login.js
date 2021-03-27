const express = require("express");
const uuid = require("uuid");
const router = express.Router();


router.get("/", (req, res) => {
    const user = req.user;
    const password = req.password;
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        const query = 'select * from user where ';// example query
        request.query(query, function (err, recordset) {
            if (recordset.length  = 1) {
              if(user.localeCompare(recordset.username) === 0 && password.localeCompare(recordset.password) === 0){
                  //login successfull return user object
                  res.send(/*..USER OBJ....*/);
              }
              
            }
            res.send(/*..USER OBJ EMPTY OR ERROR OBJ....*/); 
        });
});



module.exports = router;