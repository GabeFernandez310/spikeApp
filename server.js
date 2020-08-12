//Basic express app for running server
const express = require("express");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//Connect to Database
pool = connectDB();
pool.connect();

//TODO: Add api routes
//app.get("/", (req, res) => res.send("Hello world"));

//Will use static assests in a production environment
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  //TODO: remove this
  app.get("/", (req, res) => res.send("Hello world"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

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
