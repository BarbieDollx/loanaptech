import React from "react";
import "./Aboutpage.css"
function Aboutpage(){
    return(
        <div className="container">
          <div className="main">
                <h1>About Us</h1> 
                <p>We are a trusted financial platform dedicated to making loan access simple, fast, and transparent. Our mission is to empower individuals and small businesses with flexible options without the hassle of traditional banking bureaucracy</p>
                <div className="feature-container">
                    
                    <div className="feature-box">
                        <h1>Fast Approval</h1>
                        <p>Get descisions in minutes, not weeks</p>
                    </div> 

                    <div className="feature-box">
                        <h1>No hidden Fees</h1>
                        <p>100% free to apply - no hidden charges</p>
                    </div>

                    <div className="feature-box">
                        <h1>Secure & Private</h1>
                        <p>Your data is encrypted and never shared</p>
                    </div>
                </div>
           </div>
        </div>  
    )};
export default Aboutpage;