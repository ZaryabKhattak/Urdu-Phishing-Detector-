import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainScreen() {
  const [message, setMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0); // 0: initial, 1: text pasted, 2: processing, 3: result
  const [result, setResult] = useState(null);

  const handleTextChange = (e) => {
    const text = e.target.value;
    setMessage(text);
    if (text.trim().length > 0 && currentStep === 0) {
      setCurrentStep(1);
    } else if (text.trim().length === 0 && currentStep === 1) {
      setCurrentStep(0);
    }
  };

  const handleScan = () => {
    if (message.trim().length === 0) return;
    
    // Move to step 2 (Processing)
    setCurrentStep(2);
    
    // After 3 seconds, show mock result
    setTimeout(() => {
      // Mock result - randomly choose between SAFE and SCAM for testing
      const isSafe = Math.random() > 0.5;
      const mockResult = {
        classification: isSafe ? 'SAFE' : 'SCAM',
        confidence: isSafe ? 94.5 : 87.3,
        details: isSafe 
          ? 'This message appears to be legitimate and safe. No suspicious patterns or phishing indicators were detected.'
          : 'This message contains suspicious patterns commonly found in phishing attempts. Please verify the sender before taking any action.'
      };
      setResult(mockResult);
      setCurrentStep(3);
    }, 3000);
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link to="/" style={{ fontWeight: 600, fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#000', textDecoration: 'none' }}>Urdu Phishing Detector</Link>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
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
      
      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '48px 48px 32px', gap: 32, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        {/* Stepper Box - height matches textarea (260px) + gap (24px) + button (68px) = 352px */}
        <div style={{ 
          background: '#fff', 
          border: '3px solid #009d8d', 
          borderRadius: 16, 
          width: 240, 
          height: 352,
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '40px 24px', 
          fontFamily: 'Outfit, sans-serif',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 40, width: '100%', paddingLeft: 16 }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ 
                border: '3px solid #009d8d', 
                borderRadius: '50%', 
                width: 52, 
                height: 52, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: 600, 
                fontSize: 22, 
                color: currentStep >= 1 ? '#fff' : '#009d8d',
                background: currentStep >= 1 ? '#009d8d' : '#fff',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}>
                {currentStep >= 1 ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : '1'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: currentStep >= 1 ? '#999' : '#000', fontSize: 16, fontWeight: 500, lineHeight: 1.2, transition: 'color 0.3s ease' }}>Paste</span>
                <span style={{ color: currentStep >= 1 ? '#999' : '#000', fontSize: 16, fontWeight: 500, lineHeight: 1.2, transition: 'color 0.3s ease' }}>Message</span>
              </div>
            </div>
            
            {/* Step 2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ 
                border: '3px solid #009d8d', 
                borderRadius: '50%', 
                width: 52, 
                height: 52, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: 600, 
                fontSize: 22, 
                color: currentStep >= 2 ? '#fff' : '#009d8d',
                background: currentStep >= 2 ? '#009d8d' : '#fff',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}>
                {currentStep >= 3 ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : currentStep === 2 ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" strokeDasharray="60" strokeDashoffset="15">
                      <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                ) : '2'}
              </div>
              <span style={{ color: currentStep >= 2 ? '#999' : '#000', fontSize: 16, fontWeight: 500, transition: 'color 0.3s ease' }}>Processing</span>
            </div>
            
            {/* Step 3 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ 
                border: '3px solid #009d8d', 
                borderRadius: '50%', 
                width: 52, 
                height: 52, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: 600, 
                fontSize: 22, 
                color: currentStep >= 3 ? '#fff' : '#009d8d',
                background: currentStep >= 3 ? '#009d8d' : '#fff',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}>
                {currentStep >= 3 ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                ) : '3'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: currentStep >= 3 ? '#999' : '#000', fontSize: 16, fontWeight: 500, lineHeight: 1.2, transition: 'color 0.3s ease' }}>Check</span>
                <span style={{ color: currentStep >= 3 ? '#999' : '#000', fontSize: 16, fontWeight: 500, lineHeight: 1.2, transition: 'color 0.3s ease' }}>Result</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Message Box and Scan Button */}
        <div style={{ flex: 1, maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {currentStep < 3 ? (
            <>
              <textarea
                value={message}
                onChange={handleTextChange}
                style={{ 
                  width: '100%', 
                  height: 260, 
                  border: '3px solid #009d8d', 
                  borderRadius: 16, 
                  fontSize: 18, 
                  fontFamily: 'Outfit, sans-serif', 
                  color: '#333', 
                  padding: 24, 
                  resize: 'none', 
                  outline: 'none', 
                  boxSizing: 'border-box', 
                  background: '#fff', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
                placeholder="Paste You Message Here......"
                disabled={currentStep === 2}
              />
              <button
                onClick={handleScan}
                disabled={currentStep === 0 || currentStep === 2}
                style={{ 
                  width: '100%', 
                  height: 68,
                  background: currentStep === 0 || currentStep === 2 ? '#ccc' : '#009d8d', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: 12, 
                  fontSize: 26, 
                  fontWeight: 600, 
                  cursor: currentStep === 0 || currentStep === 2 ? 'not-allowed' : 'pointer', 
                  fontFamily: 'Outfit, sans-serif', 
                  letterSpacing: 2,
                  boxShadow: '0 4px 12px rgba(0,157,141,0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentStep !== 0 && currentStep !== 2) {
                    e.target.style.background = '#008276';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentStep !== 0 && currentStep !== 2) {
                    e.target.style.background = '#009d8d';
                  }
                }}
              >
                {currentStep === 2 ? 'PROCESSING...' : 'SCAN'}
              </button>
            </>
          ) : (
            // Result Display
            <>
              <div style={{
                width: '100%',
                border: '3px solid #009d8d',
                borderRadius: 16,
                padding: 40,
                background: result.classification === 'SAFE' ? '#d4f4dd' : '#ffcccc',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                minHeight: 352
              }}>
                <h2 style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: 48, 
                  fontWeight: 700,
                  color: result.classification === 'SAFE' ? '#009d8d' : '#ff0000', 
                  margin: 0,
                  textAlign: 'center',
                  letterSpacing: 1
                }}>
                  {result.classification === 'SAFE' ? 'SAFE!' : 'SCAM!'}
                </h2>
                
                <div style={{
                  textAlign: 'center',
                  padding: '20px 0'
                }}>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: 'Outfit, sans-serif',
                    color: result.classification === 'SAFE' ? '#009d8d' : '#ff0000',
                    marginBottom: 12
                  }}>
                    Detail Message for the Explanation
                  </div>
                  <p style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 16,
                    color: '#333',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {result.details}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 16,
                  marginTop: 'auto'
                }}>
                  <div style={{
                    background: '#fff',
                    borderRadius: 12,
                    padding: '16px 32px',
                    textAlign: 'center',
                    border: '2px solid #009d8d'
                  }}>
                    <div style={{
                      fontSize: 14,
                      fontFamily: 'Outfit, sans-serif',
                      color: '#666',
                      marginBottom: 4
                    }}>
                      Confidence Score
                    </div>
                    <div style={{
                      fontSize: 32,
                      fontWeight: 700,
                      fontFamily: 'Inter, sans-serif',
                      color: '#009d8d'
                    }}>
                      {result.confidence}%
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setMessage('');
                  setCurrentStep(0);
                  setResult(null);
                }}
                style={{
                  width: '100%',
                  height: 68,
                  background: '#009d8d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 12,
                  fontSize: 22,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Outfit, sans-serif',
                  letterSpacing: 1,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,157,141,0.3)'
                }}
                onMouseEnter={(e) => e.target.style.background = '#008276'}
                onMouseLeave={(e) => e.target.style.background = '#009d8d'}
              >
                SCAN AGAIN
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Footer bar */}
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
  );
}
