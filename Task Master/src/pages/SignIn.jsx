import React, { useState } from "react";
import '../styles/SignIn.css';
import image from "../assets/Images/LOG_side.jpg";
import logo from "../assets/Images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SigninValidation";
import axios from 'axios'

export default function Signin(){
    const [values,setValues]=useState({
        username: '',
        email:'',
        password: ''
    })
    const navigate=useNavigate();
    const[errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:event.target.value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.username=== "" && errors.email==="" && errors.password === ""){
            axios.post('http://localhost:8081/SignIn',values)
            .then(res=>{
                navigate('/LogIn');
            })
            .catch(err=>console.log(err));
        }
    }
    return(
        <div>
            <header class="Header-bar">
        <div className="logo">
            <img src={logo} alt="Task Master Logo" />
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
        <form action="" onSubmit={handleSubmit} method="post" class="sign-form">
            <div class="form-group">
                <label for="firstname">First Name:</label>
                <input type="text" id="first-name" name="firstname" required/>
            </div>
            <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input type="text" id="last-name" name="lastname" required/>
            </div>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required onChange={handleInput}/>
                {errors.username && <span className="text-danger">{errors.username}</span>}  
            </div>
            <div class="form-group">
                <label for="email">E-mail::</label>
                <input type="text" id="email" name="email" required onChange={handleInput}/>
                {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div class="form-group">
                <label for="password">Set Password:</label>
                <input type="password" id="password" name="password" required onChange={handleInput}/>
                {errors.password && <span className="text-danger">{errors.password}</span>}
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