import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {  
    return(
        <header>
            <div className="header-content">
                <h1>LoanAptech</h1>
                <div className="header-section">
                        <Link to="/" className="home">Home</Link>
                        <Link to="/loan-products">Loans</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup" className="signup">Sign Up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;