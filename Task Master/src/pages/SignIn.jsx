import React from "react";
import '../styles/SignIn.css';
import image from "../assets/Images/LOG_side.jpg";
import { Link } from "react-router-dom";

export default function Signin(){
    return(
        <div>
            <header class="Header-bar">
        <div class="logo.png">

        </div>
        <nav class="head-buttons">
            <Link to="/login">
            <button className="nav-button">Log In</button>
            </Link>
        </nav>
    </header>
    <div class="main-container">
    <div class="sign-box">
        <h2 class="signh2">Sign Up</h2>
        <form action="" method="post" class="sign-form">
            <div class="form-group">
                <label for="firstname">First Name:</label>
                <input type="text" id="first name" name="first name" required/>
            </div>
            <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input type="text" id="last name" name="last name" required/>
            </div>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="email">E-mail::</label>
                <input type="text" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Set Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="password">Reenter Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit" class="sign-button">Sign Up</button>
            <p className="login-link">
              Already Have an Account? <Link to="/login">Log In</Link>
            </p>
        </form>
    </div>
     <div className="Image_log" style={{ backgroundImage: `url(${image})` }}>
                        {}
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
    )
}