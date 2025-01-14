import React, { useState } from "react";
import "../styles/LogIn.css";
import image from "../assets/Images/LOG_side.jpg";
import logo from "../assets/Images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";

export default function LogIn() {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState(""); // For showing login error messages

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateInputs = () => {
        const validationErrors = {};
        if (!values.username) validationErrors.username = "Username is required.";
        if (!values.password) validationErrors.password = "Password is required.";
        return validationErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values); // Log values before sending the request for debugging
        const validationErrors = validateInputs();
        setErrors(validationErrors);
        setLoginError(""); // Clear previous login errors

        if (Object.keys(validationErrors).length === 0) {
            axios
                .post("http://localhost:8081/login", values)
                .then((res) => {
                    console.log(res.data); // Log response from the server
                    if (res.data === "Success") {
                        navigate("/Home");
                    } else {
                        setLoginError(res.data); // Show specific error message
                    }
                })
                .catch((err) => {
                    console.error("Error occurred during login:", err);
                    alert("An error occurred. Please try again.");
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
                    <Link to="/SignIn">
                        <button className="nav-button">Sign Up</button>
                    </Link>
                </nav>
            </header>
            <div className="main-container">
                <div className="login-box">
                    <h2 className="logh2">Log in to Your Account</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={handleInput}
                            />
                            {errors.username && (
                                <span className="text-danger">{errors.username}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleInput}
                            />
                            {errors.password && (
                                <span className="text-danger">{errors.password}</span>
                            )}
                        </div>
                        <button type="submit" className="login-button">
                            Login
                        </button>
                        {loginError && (
                            <div className="error-message">
                                {loginError} {/* Show login error */}
                            </div>
                        )}
                        <p className="signup-link">
                            Don't have an account? <Link to="/SignIn">Sign Up</Link>
                        </p>
                    </form>
                </div>
                <div
                    className="Image_log"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            </div>
            <Footer />
        </div>
    );
}
