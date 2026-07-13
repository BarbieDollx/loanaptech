import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LogIn.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://loanaptech-it4w.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", 
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }


      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
    return(
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome Back</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email address" required onChange={handleChange}/>
                    <input type="password" name="password" placeholder="Password" required onChange={handleChange}/>
                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <p className="login-link">
                    Don't have an account?<Link to="/signup">Signup</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;