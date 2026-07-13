import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Aboutpage from "./components/Aboutpage"
import Contact  from "./components/Contact";
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import Apply from "./pages/Apply"
import Home from "./pages/Home"
import Dashboard from "./components/Dashboard"
import "./App.css"
import Footer from "./components/Footer";


import Navbar from "./components/Navbar";
function App(){
  return( <Router>
    
    <Navbar />
    {/* <h2>Welcome to LoanAptech</h2> */}
    <div className="App">
      <Routes>
      <Route path="/about" element={< Aboutpage />} /> 
      <Route path="/contact" element={< Contact />} />
      <Route path="/signup" element={< SignUp />} />
      <Route path="/login" element={< LogIn />} />
      <Route path="/apply" element={< Apply />} />
      <Route path="/" element={< Home />} />
      <Route path="/dashboard" element={< Dashboard />} />
      

      
      
    </Routes>

    </div>
    <Footer />
  </Router>

  );
}

export default App;