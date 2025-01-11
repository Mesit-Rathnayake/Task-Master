const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcryptjs');

const app = express();

// Allow cross-origin requests:
app.use(cors());
// Parse incoming JSON in request body:
app.use(express.json());

// Create a connection to MySQL:
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signin",
});

// Connect to the database:
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Route for signing up (inserting user data with hashed password):
app.post("/signin", (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);  // Hash the password

  console.log("Signing up user:", req.body.username);  // Log the signup request

  const sql = "INSERT INTO login (username, email, password) VALUES (?)";
  const values = [req.body.username, req.body.email];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Database Error", error: err });
    }
    return res.json({ message: "User registered successfully!" });
  });
});

// Route for logging in (validating user and comparing hashed password):
app.post("/login", (req, res) => {
  console.log("Login request body:", req.body);  // Log login request

  const sql = "SELECT * FROM login WHERE `username` = ?";

  db.query(sql, [req.body.username], (err, data) => {
    if (err) {
      console.error("Login query error:", err);
      return res.status(500).json({ message: "Error occurred during login", error: err });
    }

    if (data.length > 0) {
      // Compare the plain-text password with the hashed password
      bcrypt.compare(req.body.password, data[0].password, (err, isMatch) => {
        if (err) {
          console.error("Password comparison error:", err);
          return res.status(500).json({ message: "Error during password comparison", error: err });
        }

        if (isMatch) {
          console.log("Login successful!");
          return res.json("Success");
        } else {
          console.log("Password does not match.");
          return res.json("Failed");
        }
      });
    } else {
      console.log("No user found with the username:", req.body.username);
      return res.json("Failed");  // If no user is found with that username
    }
  });
});

// Start listening on port 8081:
app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});
