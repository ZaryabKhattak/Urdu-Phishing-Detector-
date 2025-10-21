import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Urdu Phishing Detector</h1>
        <p>AI-powered phishing detection for Urdu messages</p>
      </header>
      <main>
        <div className="input-section">
          <textarea
            placeholder="اپنا پیغام یہاں درج کریں... (Enter your message here...)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
          />
          <button onClick={() => console.log('Analyze:', text)}>
            Analyze Text
          </button>
        </div>
        {result && (
          <div className="result-section">
            <h2>Analysis Result</h2>
            <p>{result}</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
