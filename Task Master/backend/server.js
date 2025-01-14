const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt"); // Import bcrypt

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signin",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
        return;
    }
    console.log("Connected to MySQL database!");
});

// SignIn Route (Hashing password before saving)
// server.js
app.post("/signin", (req, res) => {
    const values = [req.body.username, req.body.email, req.body.password]; // Store plaintext password

    const sql = "INSERT INTO login (username, email, password) VALUES (?)";
    db.query(sql, [values], (err) => {
        if (err) {
            console.error("Insert error:", err);
            return res.status(500).json({ message: "Database Error" });
        }
        return res.json({ message: "User registered successfully!" });
    });
});


// LogIn Route (Comparing hashed password)
// server.js
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ?";
    db.query(sql, [req.body.username], (err, data) => {
        if (err) {
            console.error("Query error:", err);
            return res.status(500).json({ message: "Database Error" });
        }

        if (data.length > 0) {
            console.log("Stored Password:", data[0].password); // Log stored password
            console.log("Entered Password:", req.body.password); // Log entered password

            // Directly compare the entered password and stored password
            if (req.body.password === data[0].password) {
                return res.json("Success");
            } else {
                return res.json("Incorrect password");
            }
        } else {
            return res.json("Invalid username");
        }
    });
});


app.listen(8081, () => {
    console.log("Server running on http://localhost:8081");
});
