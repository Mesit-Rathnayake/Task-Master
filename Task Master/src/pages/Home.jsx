import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Home.css";
import image from "../assets/Images/Logo.png";
import Footer from '../components/footer';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8081/tasks", { params: { userId: 1 } });
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add a new task to the server
  const addTask = async () => {
    const taskName = document.getElementById("task-name").value;
    const deadline = document.getElementById("task-deadline").value;
    const priority = document.getElementById("task-priority").value;

    if (taskName && deadline) {
      const newTask = { name: taskName, deadline, priority, status: "to-do", userId: 1 };
      try {
        await axios.post("http://localhost:8081/addTask", newTask);
        setTasks((prevTasks) => [...prevTasks, { ...newTask, id: Date.now() }]);
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  // Move task status
  const moveTask = async (id, newStatus) => {
    try {
      await axios.put("http://localhost:8081/updateTask", { id, status: newStatus });
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("userToken"); // Adjust if using sessionStorage or cookies
    sessionStorage.clear(); 
  
    // Redirect to Start page
    window.location.href = "/start"; // Update the path based on your routing setup
  };
  

  return (
    <div>
      <header className="Header-bar">
        <div className="logo">
          <img src={image} alt="Task Master Logo" />
        </div>
        <nav className="head-buttons">
          <button className="nav-button">Home</button>
          <button className="nav-button" onClick={handleLogout}>Log Out</button>
        </nav>
      </header>
      <main className="task-container">
        <section className="task-input">
          <h2>Add a Task</h2>
          <input type="text" id="task-name" placeholder="Task Name" />
          <input type="date" id="task-deadline" />
          <select id="task-priority">
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button id="add-task-btn" onClick={addTask}>Add Task</button>
        </section>
        <section className="task-columns">
          {["to-do", "ongoing", "done"].map((status) => (
            <div className="task-column" key={status}>
              <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div className="task" key={task.id}>
                    <p><strong>{task.name}</strong></p>
                    <p>Deadline: {task.deadline}</p>
                    <p>Priority: {task.priority}</p>
                    <button onClick={() => moveTask(task.id, status === "to-do" ? "ongoing" : "done")}>
                      {status === "to-do" ? "Start" : "Complete"}
                    </button>
                    <button onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
