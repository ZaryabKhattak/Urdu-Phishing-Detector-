import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#112B4A', borderBottom: '3px solid #009D8D' }}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">🛡 Urdu Phishing Detector</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link text-white" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/privacy">Privacy</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/terms">Terms</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/contact">Contact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/docs">Docs</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
