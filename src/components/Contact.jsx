import React from "react";
import "./Contact.css";

function Contact(){
    return(
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>We're here to help! Reach out anytime.</p>
                </div>
                
                <div className="contact-info">
                    <p><strong>Email:</strong> support@loanapp.com</p>
                    <p><strong>Phone:</strong> +1 555 123-4567</p>
                    <p><strong>Hours:</strong> Mon-Fri 9AM-6PM EST</p>
                </div>
                
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" required/>
                        <input type="email" placeholder="Your Email" required/>
                        <textarea placeholder="Your message" rows={6} required/>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;