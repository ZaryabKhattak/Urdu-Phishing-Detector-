import React, { useState } from 'react'
import { predictMessage } from '../services/api'

export default function InputForm({ onResult }) {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!message.trim()) {
      setError('Please enter a message')
      return
    }
    setLoading(true)
    try {
      const { data } = await predictMessage(message)
      onResult?.(data)
    } catch (err) {
      console.error(err)
      setError('Error contacting server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="form-control mb-3"
        rows={4}
        placeholder="✍ Paste Roman Urdu message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {error && <div className="alert alert-warning py-2">⚠️ {error}</div>}
      <button type="submit" className="btn btn-primary-custom w-100" disabled={loading}>
        {loading ? '⏳ Analyzing...' : '🚀 Submit & Scan'}
      </button>
    </form>
  )
}
