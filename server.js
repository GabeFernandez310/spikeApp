//Basic express app for running server
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");

pool = connectDB();
pool.connect();

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

pool.query("SELECT * FROM person", (err, res) => {
  if (err) {
    console.log(err.stack);
    console.log("HERE");
  } else {
    console.log(res.rows[0]);
  }
});

pool.end();
