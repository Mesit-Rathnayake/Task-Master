import React, { useState } from "react";
import '../styles/LogIn.css';
import image from "../assets/Images/LOG_side.jpg";
import logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function LogIn() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
            
        if (Object.keys(validationErrors).length === 0) {
            console.log("Submitting values:", values);
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    console.log(res.data);
                    if (res.data === "Success") {
                        console.log("Navigating to Home..."); 
                        navigate('/Home'); 
                    } else {
                        alert("No record exists");
                    }
                })
                .catch(err => {
                    console.log("Error occurred:", err);
                });
        }
    };
    

    return (
        <div>
            <header className="Header-bar">
                <div className="logo">
                        <img src={logo} alt="Task Master Logo" />
                        </div>
                <nav className="head-buttons">
                    <Link to="/SignIn"><button className="nav-button">Sign Up</button></Link>
                </nav>
            </header>
            <div className="main-container">
                <div className="login-box">
                    <h2 className="logh2">Log in to Your Account</h2>
                    <form action="" onSubmit={handleSubmit} method="post" className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                onChange={handleInput}
                            />
                            {errors.username && <span className="text-danger">{errors.username}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                onChange={handleInput}
                            />
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <button type="submit" className="login-button">Login</button>
                        <p className="signup-link">Don't have an account? <Link to="/SignIn">Sign Up</Link></p>
                    </form>
                </div>
                <div className="Image_log" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <footer>
                <div className="footer-content">
                    <p>Contact Us:</p>
                    <p>Email: support@taskmaster.com</p>
                    <p>Phone:123-456-7890</p>
                    <p>Follow us on:</p>
                    <ul className="social-links">
                        <li><a>Facebook</a></li>
                        <li><a>Twitter</a></li>
                        <li><a>Instagram</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
