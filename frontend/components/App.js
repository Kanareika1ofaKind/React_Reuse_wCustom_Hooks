import React from 'react'
import { useCounter, useQuote, useInput } from '../hooks/hooks'

export default function App() {
  // COUNTER
  const [count, inc] = useCounter(5)
  // QUOTE
  const quoteOfTheDay = useQuote() 
  // INPUT
  const { value, onChange, onReset } = useInput()

  return (
    <div>
      <h3>Counter</h3>
      <div>{count} <button onClick={inc}>increase</button></div>

      <h3>Quote of the Day</h3>
      <div>{quoteOfTheDay}</div>

      <h3>Input</h3>
      <input value={value} onChange={onChange} />
      <button onClick={onReset}>reset</button>
    </div>
  )
}
