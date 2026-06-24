import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./components/Aboutpage"
function App(){
  return( <Router>
    <h2>Welcome to LoanAptech</h2>
    <div className="App"><Routes>
      <Route path="/about" element={< Aboutpage />} /> 
    </Routes>

    </div>
  </Router>

  );
}

export default App;