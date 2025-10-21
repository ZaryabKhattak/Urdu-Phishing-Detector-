import React from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
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
              borderBottom: '3px solid #009d8d'
            }}
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
            Privacy Policy
          </h1>
          <p style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 20, 
            color: '#666', 
            maxWidth: 800, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            How we handle and protect your data
          </p>
        </div>

        {/* Privacy Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Data Collection */}
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
              Data Collection
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              We only process the message you enter to analyze it for phishing indicators. No other personal data is collected. The Urdu Phishing Detector does not collect names, email addresses, IP addresses, or any identifying information about our users.
            </p>
          </div>

          {/* Data Storage */}
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
              Data Storage
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              We do not store or log any messages. All analysis happens in real time and is deleted immediately after processing. Your messages are never saved to our database, never shared with third parties, and never used for training purposes without explicit consent.
            </p>
          </div>

          {/* Third-Party Services */}
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
              Third-Party Services
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              The Urdu Phishing Detector runs on a secure cloud environment managed by our team. We do not use third-party analytics, tracking, or advertising services.
            </p>
          </div>

          {/* Cookies & Analytics */}
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
              Cookies & Analytics
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              This website does not use cookies or third-party analytics tools. We respect your privacy and do not track your browsing behavior.
            </p>
          </div>

          {/* Security Measures */}
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
              Security Measures
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              All communications between frontend and backend are encrypted using HTTPS. Our machine learning model runs on a secure university server and does not transmit data to any external service.
            </p>
          </div>

          {/* User Rights */}
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
              Your Rights
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              marginBottom: 16 
            }}>
              Since we do not collect or store personal data, there is no need for data deletion or modification requests. If you have questions about how your data is handled, please contact us at{' '}
              <a href="mailto:zaryab9339@gmail.com" style={{ color: '#009d8d', textDecoration: 'none', fontWeight: 600 }}>
                zaryab9339@gmail.com
              </a>.
            </p>
          </div>

          {/* Policy Updates */}
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
              Policy Updates
            </h2>
            <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontSize: 18, 
              color: '#333', 
              lineHeight: 1.8, 
              margin: 0 
            }}>
              We may update this policy as our tool evolves; any changes will be posted here. Last updated: October 2025.
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
