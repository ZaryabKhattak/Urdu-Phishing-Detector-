import React from 'react'

export default function ResultCard({ result }) {
  if (!result) return null
  
  // Backend returns 'classification', map to 'label' for compatibility
  const classification = result.classification || result.label
  const { confidence } = result
  const conf = typeof confidence === 'number' ? confidence.toFixed(2) : confidence

  let cls = 'safe'
  let text = `✅ SAFE MESSAGE\nConfidence: ${conf}%`
  
  if (classification === 'PHISHING' || classification?.startsWith('PHISHING')) {
    cls = 'phishing'
    text = `🚨 PHISHING DETECTED!\nConfidence: ${conf}%`
  } else if (classification === 'SUSPICIOUS' || classification?.startsWith('SUSPICIOUS')) {
    cls = 'suspicious'
    text = `⚠️ SUSPICIOUS — Needs Review\nConfidence: ${conf}%`
  }

  const bgMap = {
    safe: { bg: '#1e4620', color: '#1DB954' },
    suspicious: { bg: '#665c1e', color: '#ffdd00' },
    phishing: { bg: '#5c1e1e', color: '#ff4d4d' },
  }

  return (
    <div className="mt-3 p-3 rounded fw-bold" style={{ backgroundColor: bgMap[cls].bg, color: bgMap[cls].color, whiteSpace: 'pre-line' }}>
      {text}
    </div>
  )
}
