import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer py-4 mt-auto">
      <div className="container text-center">
        <small>
          © 2025 Sibghat Ullah & Zaryab Khattak — Independent Developers<br />
          Empowering Urdu users with safer digital communication.
        </small>
        <div className="mt-2">
          <Link className="text-white text-decoration-none mx-2" to="/about">About</Link>|
          <Link className="text-white text-decoration-none mx-2" to="/privacy">Privacy Policy</Link>|
          <Link className="text-white text-decoration-none mx-2" to="/terms">Terms of Use</Link>|
          <Link className="text-white text-decoration-none mx-2" to="/contact">Contact</Link>|
          <Link className="text-white text-decoration-none mx-2" to="/docs">Documentation</Link>
        </div>
        <div className="mt-2 small">
          🔒 Secure Connection | 🤖 AI-Powered Cybersecurity
        </div>
      </div>
    </footer>
  )
}
