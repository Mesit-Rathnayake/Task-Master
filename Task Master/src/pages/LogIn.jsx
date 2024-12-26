import React from "react";
import '../styles/LogIn.css';
import image from "../assets/Images/LOG_side.jpg";
import { Link } from "react-router-dom";

export default function LogIn() {
    return(
        <div>
            <header class="Header-bar">
        <div class="logo.png">

        </div>
        <nav class="head-buttons">
            <Link to="/SignIn"><button className="nav-button">Sign Up</button></Link>
        </nav>
    </header>
    <div class="main-container">
    <div class="login-box">
        <h2 class="logh2">Log in to Your Account</h2>
        <form action="" method="post" class="login-form">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit" class="login-button">Login</button>
            <p className="signup-link">Don't have an account? <Link to="/SignIn">Sign Up</Link></p>
        </form>
    </div>
    <div className="Image_log" style={{ backgroundImage: `url(${image})` }}>
                    {/* This div will display the LOG_side.jpg image */}
                </div>
    </div>
    <footer>
        <div class="footer-content">
            <p>Contact Us:</p>
            <p>Email: support@taskmaster.com</p>
            <p>Phone:123-456-7890</p>
            <p>Follow us on:</p>
            <ul class="social-links">
                <li><a>Facebook</a></li>
                <li><a>Twitter</a></li>
                <li><a>Instagram</a></li>
            </ul>
        </div>
    </footer>
        </div>
    );
}