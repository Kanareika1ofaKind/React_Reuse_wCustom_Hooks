import React, { useState, useEffect } from 'react'
import { useCounter, useQuote } from '../hooks/hooks'

export default function App() {
  // COUNTER
  const [count, inc] = useCounter(5)
  // QUOTE
  
  // INPUT
  const [value, setValue] = useState('')
  const onChange = evt => setValue(evt.target.value)
  const onReset = () => setValue('')

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
