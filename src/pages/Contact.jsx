import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
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
              borderBottom: '3px solid #009d8d'
            }}
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
            Contact Us
          </h1>
          <p style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 20, 
            color: '#666', 
            maxWidth: 800, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Get in touch with our team
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* Contact Form */}
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
              Send Us a Message
            </h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ 
                    fontFamily: 'Outfit, sans-serif', 
                    fontSize: 14, 
                    color: '#333', 
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: 8
                  }}>
                    First Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John"
                    style={{ 
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: 8,
                      fontSize: 16,
                      fontFamily: 'Outfit, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#009d8d'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
                <div>
                  <label style={{ 
                    fontFamily: 'Outfit, sans-serif', 
                    fontSize: 14, 
                    color: '#333', 
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: 8
                  }}>
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    style={{ 
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: 8,
                      fontSize: 16,
                      fontFamily: 'Outfit, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#009d8d'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ 
                  fontFamily: 'Outfit, sans-serif', 
                  fontSize: 14, 
                  color: '#333', 
                  fontWeight: 500,
                  display: 'block',
                  marginBottom: 8
                }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john.doe@example.com"
                  style={{ 
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: 8,
                    fontSize: 16,
                    fontFamily: 'Outfit, sans-serif',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#009d8d'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div>
                <label style={{ 
                  fontFamily: 'Outfit, sans-serif', 
                  fontSize: 14, 
                  color: '#333', 
                  fontWeight: 500,
                  display: 'block',
                  marginBottom: 8
                }}>
                  Message
                </label>
                <textarea 
                  placeholder="Your message here..."
                  rows={6}
                  style={{ 
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: 8,
                    fontSize: 16,
                    fontFamily: 'Outfit, sans-serif',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#009d8d'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <button
                type="submit"
                style={{ 
                  padding: '14px 32px',
                  background: '#009d8d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'Outfit, sans-serif',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  boxShadow: '0 2px 8px rgba(0,157,141,0.3)'
                }}
                onMouseEnter={(e) => e.target.style.background = '#008276'}
                onMouseLeave={(e) => e.target.style.background = '#009d8d'}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
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
                Contact Information
              </h2>
              
              {/* Email */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{ 
                  background: '#009d8d', 
                  borderRadius: 12, 
                  width: 48, 
                  height: 48, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: 18, 
                    fontWeight: 600, 
                    color: '#000', 
                    marginBottom: 8 
                  }}>
                    Email
                  </h3>
                  <a href="mailto:zaryab9339@gmail.com" style={{ 
                    fontFamily: 'Outfit, sans-serif', 
                    fontSize: 16, 
                    color: '#009d8d', 
                    textDecoration: 'none',
                    fontWeight: 500
                  }}>
                    zaryab9339@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn - Zaryab */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{ 
                  background: '#009d8d', 
                  borderRadius: 12, 
                  width: 48, 
                  height: 48, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h3 style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: 18, 
                    fontWeight: 600, 
                    color: '#000', 
                    marginBottom: 8 
                  }}>
                    Zaryab Khattak
                  </h3>
                  <a href="https://www.linkedin.com/in/zaryab-khattak" target="_blank" rel="noopener noreferrer" style={{ 
                    fontFamily: 'Outfit, sans-serif', 
                    fontSize: 16, 
                    color: '#009d8d', 
                    textDecoration: 'none',
                    fontWeight: 500
                  }}>
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* LinkedIn - Sibghat */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ 
                  background: '#009d8d', 
                  borderRadius: 12, 
                  width: 48, 
                  height: 48, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h3 style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: 18, 
                    fontWeight: 600, 
                    color: '#000', 
                    marginBottom: 8 
                  }}>
                    Sibghat Ullah
                  </h3>
                  <a href="https://www.linkedin.com/in/sibghat-ullah-493a73323" target="_blank" rel="noopener noreferrer" style={{ 
                    fontFamily: 'Outfit, sans-serif', 
                    fontSize: 16, 
                    color: '#009d8d', 
                    textDecoration: 'none',
                    fontWeight: 500
                  }}>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Acknowledgment Card */}
            <div style={{ 
              background: '#e0f7f4', 
              border: '3px solid #009d8d',
              borderRadius: 16, 
              padding: 32,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              <div style={{ 
                background: '#009d8d', 
                borderRadius: 12, 
                width: 56, 
                height: 56, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: 16
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: 22, 
                fontWeight: 700, 
                color: '#009d8d', 
                marginBottom: 12 
              }}>
                Thank You!
              </h3>
              <p style={{ 
                fontFamily: 'Outfit, sans-serif', 
                fontSize: 16, 
                color: '#333', 
                lineHeight: 1.6, 
                margin: 0 
              }}>
                We appreciate all early users helping improve AI safety for Urdu speakers.
              </p>
            </div>
          </div>
        </div>

        {/* Purpose Section */}
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
            What to Contact Us About
          </h2>
          <ul style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 18, 
            color: '#333', 
            lineHeight: 2,
            paddingLeft: 24,
            margin: 0 
          }}>
            <li>Report false positives or false negatives in phishing detection</li>
            <li>Share feedback on user experience and interface design</li>
            <li>Suggest new features or improvements</li>
            <li>Ask questions about how the detection system works</li>
            <li>Report technical issues or bugs</li>
            <li>Collaborate on research or educational initiatives</li>
          </ul>
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
