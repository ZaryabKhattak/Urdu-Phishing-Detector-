import React, { useState } from 'react'
import StepIndicator from '../components/StepIndicator'
import Hero from '../components/Hero'
import InputForm from '../components/InputForm'
import ResultCard from '../components/ResultCard'

export default function Home() {
  const [step, setStep] = useState(1)
  const [result, setResult] = useState(null)

  const handleResult = (data) => {
    setResult(data)
    setStep(3)
  }

  return (
    <>
      <Hero />
      <div className="card-custom p-4 mx-auto mt-4" style={{ maxWidth: 650 }}>
        <StepIndicator step={step} />
        <InputForm onResult={handleResult} />
        <ResultCard result={result} />
      </div>
    </>
  )
}
