import React from 'react'

export default function StepIndicator({ step = 1 }) {
  const steps = ['Input', 'Processing', 'Result']
  return (
    <div className="d-flex justify-content-center gap-3 my-3">
      {steps.map((label, idx) => {
        const active = idx + 1 <= step
        return (
          <div key={label} className={`px-3 py-2 rounded ${active ? 'bg-success' : 'bg-secondary'}`}>
            {idx + 1}. {label}
          </div>
        )
      })}
    </div>
  )
}
