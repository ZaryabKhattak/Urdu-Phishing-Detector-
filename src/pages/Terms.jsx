import React from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link to="/" style={{ fontWeight: 600, fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#000', textDecoration: 'none' }}>Urdu Phishing Detector</Link>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <Link 
            to="/" 
            style={{ 
              color: '#000', 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 15, 
              textDecoration: 'none',
              paddingBottom: 4,
              borderBottom: '3px solid transparent',
              transition: 'border-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.borderBottomColor = '#009d8d'}
            onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{ 
              color: '#000', 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 15, 
              textDecoration: 'none',
              paddingBottom: 4,
              borderBottom: '3px solid transparent',
              transition: 'border-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.borderBottomColor = '#009d8d'}
            onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
          >
            About
          </Link>
          <Link 
            to="/privacy" 
            style={{ 
              color: '#000', 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 15, 
              textDecoration: 'none',
              paddingBottom: 4,
              borderBottom: '3px solid transparent',
              transition: 'border-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.borderBottomColor = '#009d8d'}
            onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            style={{ 
              color: '#000', 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 15, 
              textDecoration: 'none', 
              paddingBottom: 4,
              borderBottom: '3px solid #009d8d'
            }}
          >
            Terms of Use
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              color: '#000', 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 15, 
              textDecoration: 'none',
              paddingBottom: 4,
              borderBottom: '3px solid transparent',
              transition: 'border-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.borderBottomColor = '#009d8d'}
            onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
          >
            Contact
          </Link>
        </div>
      </nav>
      
      {/* Content */}
      <div style={{ flex: 1, padding: '64px 48px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h1 style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: 48, 
            fontWeight: 700, 
            color: '#000', 
            marginBottom: 16,
            letterSpacing: -1
          }}>
            Terms of Use
          </h1>
          <p style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 20, 
            color: '#666', 
            maxWidth: 800, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            User agreement and legal guidelines
          </p>
        </div>

        {/* Terms Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Acceptance of Terms */}
          <div style={{ 
            background: '#fff', 
            borderRadius: 16, 
            padding: 40,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#009d8d', 
              marginBottom: 20 
            }}>
              Acceptance of Terms
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              By using the Urdu Phishing Detector, you agree to these Terms of Use. If you do not agree with any part of these terms, please do not use our service.
            </p>
          </div>

          {/* Purpose & Scope */}
          <div style={{ 
            background: '#fff', 
            borderRadius: 16, 
            padding: 40,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#009d8d', 
              marginBottom: 20 
            }}>
              Purpose & Scope
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              This tool is intended for educational, research, and awareness purposes. It should not be used for any illegal activity. The Urdu Phishing Detector is designed to help users identify potential phishing attempts in Roman Urdu messages and promote online safety awareness.
            </p>
          </div>

          {/* Accuracy & Limitations */}
          <div style={{ 
            background: '#fff', 
            borderRadius: 16, 
            padding: 40,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#009d8d', 
              marginBottom: 20 
            }}>
              Accuracy & Limitations
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              While our model is trained to detect phishing patterns, we cannot guarantee 100% accuracy. The tool provides probabilistic predictions based on machine learning algorithms. Users should always exercise their own judgment and verify suspicious messages through additional means before taking any action.
            </p>
          </div>

          {/* Prohibited Use */}
          <div style={{ 
            background: '#fff', 
            borderRadius: 16, 
            padding: 40,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#009d8d', 
              marginBottom: 20 
            }}>
              Prohibited Use
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              Users must not use this service to analyze, manipulate, or exploit third-party data unlawfully. You may not use the tool for any malicious purposes, including but not limited to: creating phishing messages, testing scam effectiveness, or any activity that violates local or international laws.
            </p>
          </div>

          {/* Liability Disclaimer */}
          <div style={{ 
            background: '#fff', 
            borderRadius: 16, 
            padding: 40,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#009d8d', 
              marginBottom: 20 
            }}>
              Liability Disclaimer
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              We are not responsible for any actions or decisions made based on the tool's results. The Urdu Phishing Detector is provided "as is" without warranties of any kind. We shall not be liable for any damages arising from the use or interpretation of this tool's results.
            </p>
          </div>

          {/* Ownership & Intellectual Property */}
          <div style={{ 
            background: '#fff', 
            borderRadius: 16, 
            padding: 40,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#009d8d', 
              marginBottom: 20 
            }}>
              Ownership & Intellectual Property
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              All rights to the Urdu Phishing Detector, including its design, model architecture, and implementation, belong to the founding team. Unauthorized reproduction, distribution, or commercial use of this tool is prohibited.
            </p>
          </div>

          {/* Modifications to Terms */}
          <div style={{ 
            background: '#e0f7f4', 
            border: '3px solid #009d8d',
            borderRadius: 16, 
            padding: 40,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#009d8d', 
              marginBottom: 20 
            }}>
              Modifications to Terms
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              We may update these terms at any time to improve clarity or compliance. Any changes will be posted on this page. Continued use of the service after changes constitutes acceptance of the updated terms. Last updated: October 2025.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ 
        background: '#009d8d', 
        padding: '24px 48px',
        width: '100%', 
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}>
        <p style={{ 
          fontFamily: 'Outfit, sans-serif', 
          fontSize: 14, 
          color: '#fff', 
          margin: 0,
          textAlign: 'center'
        }}>
          Urdu Phishing Detector © 2025 — Built by independent developers passionate about AI-powered cybersecurity awareness.
        </p>
        <p style={{ 
          fontFamily: 'Outfit, sans-serif', 
          fontSize: 12, 
          color: 'rgba(255,255,255,0.8)', 
          margin: 0 
        }}>
          All rights reserved.
        </p>
      </div>
    </div>
  )
}
