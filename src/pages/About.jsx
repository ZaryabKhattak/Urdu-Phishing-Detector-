import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
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
              borderBottom: '3px solid #009d8d'
            }}
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
              borderBottom: '3px solid transparent',
              transition: 'border-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.borderBottomColor = '#009d8d'}
            onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
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
            About Urdu Phishing Detector
          </h1>
          <p style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 20, 
            color: '#666', 
            maxWidth: 800, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Protecting Urdu speakers from online scams and phishing attempts
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: 24, 
          marginBottom: 64 
        }}>
          {/* Secure Card */}
          <div style={{ 
            background: '#e0f7f4', 
            border: '3px solid #009d8d', 
            borderRadius: 16, 
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}>
            <div style={{ 
              background: '#009d8d', 
              borderRadius: 12, 
              width: 64, 
              height: 64, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 24, 
              fontWeight: 700, 
              color: '#000', 
              margin: 0 
            }}>
              Secure
            </h3>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 16, 
              color: '#666', 
              lineHeight: 1.6, 
              margin: 0 
            }}>
              Your messages are analyzed securely and never stored permanently.
            </p>
          </div>

          {/* Fast Card */}
          <div style={{ 
            background: '#e0f7f4', 
            border: '3px solid #009d8d', 
            borderRadius: 16, 
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}>
            <div style={{ 
              background: '#009d8d', 
              borderRadius: 12, 
              width: 64, 
              height: 64, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 24, 
              fontWeight: 700, 
              color: '#000', 
              margin: 0 
            }}>
              Fast
            </h3>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 16, 
              color: '#666', 
              lineHeight: 1.6, 
              margin: 0 
            }}>
              Get instant results with our advanced AI-powered detection system.
            </p>
          </div>

          {/* Private Card */}
          <div style={{ 
            background: '#e0f7f4', 
            border: '3px solid #009d8d', 
            borderRadius: 16, 
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}>
            <div style={{ 
              background: '#009d8d', 
              borderRadius: 12, 
              width: 64, 
              height: 64, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 24, 
              fontWeight: 700, 
              color: '#000', 
              margin: 0 
            }}>
              Private
            </h3>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 16, 
              color: '#666', 
              lineHeight: 1.6, 
              margin: 0 
            }}>
              No personal data is collected. Your privacy is our priority.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div style={{ 
          background: '#fff', 
          borderRadius: 16, 
          padding: 48,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: 32, 
            fontWeight: 700, 
            color: '#000', 
            marginBottom: 24 
          }}>
            Our Mission
          </h2>
          <p style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 18, 
            color: '#333', 
            lineHeight: 1.8, 
            marginBottom: 20 
          }}>
            Phishing attacks targeting Urdu speakers have increased dramatically. Our mission is to provide a free, easy-to-use tool that helps identify suspicious messages and protect users from online fraud.
          </p>
          <p style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 18, 
            color: '#333', 
            lineHeight: 1.8, 
            marginBottom: 0 
          }}>
            By analyzing message patterns, language structures, and common phishing indicators, our system can quickly determine if a message is likely to be a scam.
          </p>
        </div>

        {/* Tool Summary & Technology */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 32 }}>
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
              What We Built
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              The Urdu Phishing Detector is an AI-powered tool that identifies phishing or suspicious messages written in Roman Urdu. It's designed to help users stay safe from scams in digital communication through smart, language-aware detection.
            </p>
          </div>

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
              Technology
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              Powered by Natural Language Processing (NLP) and Machine Learning for text classification. Our model is specifically trained on Roman Urdu text patterns to detect phishing attempts with high accuracy.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div style={{ 
          background: '#e0f7f4', 
          border: '3px solid #009d8d',
          borderRadius: 16, 
          padding: 48,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          marginTop: 32
        }}>
          <h2 style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: 32, 
            fontWeight: 700, 
            color: '#009d8d', 
            marginBottom: 32,
            textAlign: 'center'
          }}>
            Meet the Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: '#009d8d', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: 22, 
                fontWeight: 700, 
                color: '#000', 
                marginBottom: 8 
              }}>
                Sibghat Ullah
              </h3>
              <p style={{ 
                fontFamily: 'Outfit, sans-serif', 
                fontSize: 16, 
                color: '#009d8d', 
                fontWeight: 600,
                marginBottom: 12 
              }}>
                Founder & Cybersecurity Engineer
              </p>
              <p style={{ 
                fontFamily: 'Outfit, sans-serif', 
                fontSize: 16, 
                color: '#666', 
                lineHeight: 1.6,
                margin: 0 
              }}>
                Envisioned and built the AI model for accurate phishing detection in Roman Urdu.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: '#009d8d', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: 22, 
                fontWeight: 700, 
                color: '#000', 
                marginBottom: 8 
              }}>
                Zaryab Khattak
              </h3>
              <p style={{ 
                fontFamily: 'Outfit, sans-serif', 
                fontSize: 16, 
                color: '#009d8d', 
                fontWeight: 600,
                marginBottom: 12 
              }}>
                Co-Founder & Product Designer
              </p>
              <p style={{ 
                fontFamily: 'Outfit, sans-serif', 
                fontSize: 16, 
                color: '#666', 
                lineHeight: 1.6,
                margin: 0 
              }}>
                Managing the vision, design, and user experience of the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ 
          background: '#fff', 
          borderRadius: 16, 
          padding: 40,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          marginTop: 32
        }}>
          <h2 style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: 28, 
            fontWeight: 700, 
            color: '#009d8d', 
            marginBottom: 20 
          }}>
            Important Disclaimer
          </h2>
          <p style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 18, 
            color: '#333', 
            lineHeight: 1.8, 
            marginBottom: 16 
          }}>
            The tool provides probabilistic predictions — users should review suspicious results carefully. While our AI model is trained on a comprehensive dataset, no automated system is 100% accurate.
          </p>
          <p style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 16, 
            color: '#666', 
            lineHeight: 1.6, 
            margin: 0,
            fontStyle: 'italic'
          }}>
            Version 1.0 — Released October 2025
          </p>
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
