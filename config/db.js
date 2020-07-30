//Establish connection to postgreSQL database
const { Pool, Client } = require("pg");
const config = require("config");
const db = config.get("DB_URI");

const pool = new Pool({
  connectionString: db,
});

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});

const client = new Client({
  connectionString: db,
});

client.connect();
client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});
