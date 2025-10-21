import React from 'react'

export default function Hero() {
  return (
    <section className="text-center p-4 p-md-5" style={{background: 'linear-gradient(135deg, #112B4A, #0B1F3B)', borderRadius: '12px'}}>
      <h1 className="mb-3" style={{color: 'var(--color-main)'}}>Urdu Phishing Detector</h1>
      <p className="mb-0" style={{maxWidth: 760, margin: '0 auto'}}>
        AI-powered analysis for Roman Urdu messages — detect phishing, stay safe, and build awareness.
      </p>
    </section>
  )
}
