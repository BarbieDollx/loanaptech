import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";


const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://loanaptech-it4w.onrender.com/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name: formData.ngame,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Registration failed.");
            }

          alert("Registration successful! Please log in.");
            navigate("/login");
        } catch (error) {
            setError(error.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="signup-container">
            <div className="signup-box">
                <h1>Create your account</h1>
                
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required/>
                    <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required/>
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required/>
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required/>
                    
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