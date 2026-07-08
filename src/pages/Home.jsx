import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home-container">
            <div className="home-box">
                <h1>Welcome to LoanAptech</h1>
                <p>Get instant personal loans up to $50,000 with low interest rates and flexible repayment options.</p>
                <button className="link"><Link to="/apply">Apply Now, It's Free</Link></button>
                
                <div className="card-box">
                    <div className="card">
                        <h1>Lightning Fast</h1>
                        <h2>Lightning Fast Approval</h2>
                        <p>Get decision in under 10 minutes</p>
                    </div>
                    <div className="card">
                        <h1>No Paperwork</h1>
                        <h2>No Paperwork Required</h2>
                        <p>100% digital & hassle-free process</p>
                    </div>
                    <div className="card">
                        <h1>Best <br></br> Rates</h1>
                        <h2 className="low">Lowest Interest Rates</h2>
                        <p>Starting from just 8.99% p.a.</p>
                    </div>
                </div>
                
                <div className="text">
                    <p>Applied already?
                      <Link to="/status">Check Loan Status</Link> • <Link to="/dashboard">Go to Dashboard</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Home;