import React from 'react'

export default function Docs() {
  return (
    <div className="card-custom p-4">
      <h2 style={{ color: '#009D8D' }}>API Documentation</h2>
      <pre style={{ background: '#000', color: '#0f0', padding: 12, borderRadius: 8, border: '2px solid #009D8D' }}>{`POST /predict
{
  "message": "Apni ID yahan bhejein"
}

{
  "label": "PHISHING",
  "confidence": 0.92
}`}</pre>
      <p>The backend uses an NLP classifier trained on labeled Roman Urdu messages to identify phishing patterns. Data is processed on secure university servers.</p>
    </div>
  )
}
