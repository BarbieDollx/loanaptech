import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

function LogIn(){
    return(
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome Back</h1>
                <form>
                    <input type="email" placeholder="Email address" required/>
                    <input type="password" placeholder="Password" required/>
                    <button type="submit">Login</button>
                </form>
                <p className="login-link">
                    Don't have an account?<Link to="/signup">Signup</Link>
                </p>
            </div>
        </div>
    );
}

export default LogIn;