import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import Employee from "./components/pages/Employee.jsx";

class App extends Component {
  render(){
    return (
      <>
        <Router>
          <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/" exact={true} element={<Home/>}/>
              <Route path="/employee" exact={true} element={<Employee/>}/>
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
