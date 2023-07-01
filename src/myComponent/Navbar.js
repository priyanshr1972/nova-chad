import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { useState ,useEffect} from 'react';
import  "./nav.css"


const Navbar =()=> {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
    return (
      <div>
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2a6592" }}>
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to={"/"}>NOVA CHAD</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to={"/"}>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to={"/business"}>Business</Link></li>
          <li className="nav-item"><Link className="nav-link" to={"/entertainment"}>Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link" to={"/general"}>General</Link></li>
          <li className="nav-item"><Link className="nav-link" to={"/health"}>Health</Link></li>
          <li className="nav-item"><Link className="nav-link" to={"/science"}>Science</Link></li>
          <li className="nav-item"><Link className="nav-link" to={"/sports"}>Sports</Link></li>
          <li className="nav-item"><Link className="nav-link" to={"/technology"}>Technology</Link></li>
        </ul>
        <button className="nav-link btn btn-outline-success" onClick={toggleTheme} style={{ color: "white" }}>
          Toggle Theme
        </button>
      </div>
    </div>
  </nav>
</div>
    )
  }
export default Navbar
