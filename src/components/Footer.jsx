import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
    <div className="footer-content">
        <div className="footer-section">
            <h1>LoanAptech</h1>
            <p className="ok">Your trusted partner for fast, transparent, <br></br> <br></br>and affordable loan solutions.</p>
        </div>
        <div className="footer-section">
            <h2>Quick Links</h2>
            <Link to="/">Home</Link>
            <Link to="/loan-products">Loan Products</Link>
            <Link to="/apply">Apply Now</Link>
            <Link to="/about">About Us</Link>
        </div>
        <div className="footer-section">
            <h2>Support</h2>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
        </div>
        <div className="footer-section">
            <h2>Get in Touch</h2><br></br>
            <p>support@loanaptech.com</p><br></br>
            <p>+1 (555) 123-4567</p><br></br>
            <p>Mon-Fri: 9AM-6PM EST</p>
        </div>
    </div>
    <p className="para">© 2026 LoanAptech. All rights reserved.</p>
    </footer>
  );
}

export default Footer;