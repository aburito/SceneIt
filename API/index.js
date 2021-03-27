const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

//DB variables
const sql = require("mssql");
// config for your database
var config = {
  user: "localhost",
  password: "mypassword",
  server: "localhost",
  database: "SceneIt-db",
};

app.get("/", (req, res) => {
  console.log("DB Listeing");
});

// users api routes
app.use("/api/members", require("./routes/api/movies.js"));
// movies api routes
app.use("/api/members", require("./routes/api/user.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
