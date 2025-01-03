const mysql = require("mysql2");

// Create a connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
  connectionLimit: 10,
  port: 3307,
});

// Export the connection pool
module.exports = db;
