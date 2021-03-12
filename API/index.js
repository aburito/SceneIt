const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

app.get("/", (req, res) => {
  res.send("Services IS up and running for Scene it.....");
});

// users api routes
app.use("/api/members", require("./routes/api/movies.js"));
// movies api routes
app.use("/api/members", require("./routes/api/user.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
