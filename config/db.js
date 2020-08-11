//Establish connection to postgreSQL database
const { Pool } = require("pg");
const config = require("config");
const db = config.get("DB_URI");

const connectDB = () => {
  try {
    //try to establish database connection
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL || db,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    return pool;
  } catch (err) {
    //if connection fails report error message and exit process
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
