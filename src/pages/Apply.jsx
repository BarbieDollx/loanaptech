import React from "react";
import "./Apply.css"

function Apply(){
    return (
     <div className="apply-container">
        <div className="apply-box">
            <h1>Apply for Loan</h1>
            <form>
                <strong><label>Full Name</label></strong>
                <input type="text" placeholder="Full Name" required/>
                <strong><label>Email Address</label></strong>
                <input  type="email" placeholder="email" required/>
                <strong><label>Loan Amount ($)</label></strong>
                <input type="amount" placeholder="amount" required/>
                <strong><label>Loan Tenure</label></strong>
                <select id="years" name="years">
              <option value="" disabled selected>Select tenure...</option>
              <option value="1year">1year</option>
                <option value="2years">2years</option>
               <option value="3years">3years</option>
              <option value="4years">4years</option>
             </select>
                <strong><label>Purpose of Loan</label></strong>
                <textarea placeholder="purpose of loan" rows={6} required/>
                <button>Submit Application</button>
            </form>

        </div>

     </div>
    )
}

export default Apply;