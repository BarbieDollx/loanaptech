import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./components/Aboutpage"
import Contact  from "./components/Contact";
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import Apply from "./pages/Apply"
import "./App.css"
function App(){
  return( <Router>
    <h2>Welcome to LoanAptech</h2>
    <div className="App">
      <Routes>
      <Route path="/about" element={< Aboutpage />} /> 
      <Route path="/contact" element={< Contact />} />
      <Route path="/signup" element={< SignUp />} />
      <Route path="/login" element={< LogIn />} />
      <Route path="/apply" element={< Apply />} />
      
    </Routes>

    </div>
  </Router>

  );
}

export default App;