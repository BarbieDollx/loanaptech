import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp(){
    return(
        <div className="signup-container">
            <div className="signup-box">
                <h1>Create your account</h1>
                
                <form>
                    <input type="text" placeholder="Full Name" required/>
                    <input type="email" placeholder="Email address" required/>
                    <input type="tel" placeholder="Phone Number" required/>
                    <input type="password" placeholder="Password" required/>
                    <input type="password" placeholder="Confirm Password" required/>
                    
                    <button type="submit">Sign up</button>
                </form>
                
                <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;