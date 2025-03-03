const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
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

// SignIn Route
app.post("/signin", (req, res) => {
  const values = [req.body.username, req.body.email, req.body.password];
  const sql = "INSERT INTO login (username, email, password) VALUES (?)";
  db.query(sql, [values], (err) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Database Error" });
    }
    return res.json({ message: "User registered successfully!" });
  });
});

// LogIn Route
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE username = ?";
  db.query(sql, [req.body.username], (err, data) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ message: "Database Error" });
    }

    if (data.length > 0) {
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

// Add Task Route
app.post("/addTask", (req, res) => {
  const { name, deadline, priority, status, userId } = req.body;
  const sql = "INSERT INTO tasks (name, deadline, priority, status, user_id) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, deadline, priority, status, userId], (err) => {
    if (err) {
      console.error("Insert task error:", err);
      return res.status(500).json({ message: "Database Error" });
    }
    return res.json({ message: "Task added successfully!" });
  });
});

// Get Tasks Route
app.get("/tasks", (req, res) => {
  const { userId } = req.query;
  const sql = "SELECT * FROM tasks WHERE user_id = ?";
  db.query(sql, [userId], (err, data) => {
    if (err) {
      console.error("Fetch tasks error:", err);
      return res.status(500).json({ message: "Database Error" });
    }
    return res.json(data);
  });
});

// Update Task Route
app.put("/updateTask", (req, res) => {
  const { id, status } = req.body;
  const sql = "UPDATE tasks SET status = ? WHERE id = ?";
  db.query(sql, [status, id], (err) => {
    if (err) {
      console.error("Update task error:", err);
      return res.status(500).json({ message: "Database Error" });
    }
    return res.json({ message: "Task updated successfully!" });
  });
});

app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});
