import React, { useState } from "react";
import '../styles/SignIn.css';
import image from "../assets/Images/LOG_side.jpg";
import logo from "../assets/Images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SigninValidation";
import axios from 'axios'
import Footer from '../components/footer';

export default function Signin(){
    const [values, setValues] = useState({
        username: '',
        email:'',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.username === "" && errors.email === "" && errors.password === "") {
            // Fixed URL for the SignIn route, change to lowercase '/signin'
            axios.post('http://localhost:8081/signin', values)
            .then(res => {
                navigate('/LogIn');
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div>
            <header className="Header-bar">
                <div className="logo">
                    <img src={logo} alt="Task Master Logo" />
                </div>
                <nav className="head-buttons">
                    <Link to="/login">
                        <button className="nav-button">Log In</button>
                    </Link>
                </nav>
            </header>
            <div className="main-container">
                <div className="sign-box">
                    <h2 className="signh2">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="sign-form">
                        <div className="form-group">
                            <label htmlFor="firstname">First Name:</label>
                            <input type="text" id="first-name" name="firstname" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name:</label>
                            <input type="text" id="last-name" name="lastname" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required onChange={handleInput}/>
                            {errors.username && <span className="text-danger">{errors.username}</span>}  
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="text" id="email" name="email" required onChange={handleInput}/>
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Set Password:</label>
                            <input type="password" id="password" name="password" required onChange={handleInput}/>
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>

                        <button type="submit" className="sign-button">Sign Up</button>
                        <p className="login-link">
                            Already Have an Account? <Link to="/login">Log In</Link>
                        </p>
                    </form>
                </div>
                <div className="Image_log" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <Footer />
        </div>
    )
}
