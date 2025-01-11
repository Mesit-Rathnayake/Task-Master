import { useState } from "react";
import "../styles/Home.css";
import image from "../assets/Images/Logo.png";


export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskName = document.getElementById("task-name").value;
    const deadline = document.getElementById("task-deadline").value;
    const priority = document.getElementById("task-priority").value;

    if (taskName && deadline) {
      const newTask = { id: Date.now(), name: taskName, deadline, priority, status: "to-do" };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const moveTask = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
  };

  return (
    <div>
      <header className="Header-bar">
        <div className="logo">
        <img src={image} alt="Task Master Logo" />
        </div>
        <nav className="head-buttons">
          <button className="nav-button">Home</button>
          <button className="nav-button">Calendar</button>
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
      <footer>
        <div className="footer-content">
          <p>Contact Us:</p>
          <p>Email: support@taskmaster.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Follow us on:</p>
          <ul className="social-links">
            <li key="facebook">
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li key="twitter">
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li key="instagram">
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
