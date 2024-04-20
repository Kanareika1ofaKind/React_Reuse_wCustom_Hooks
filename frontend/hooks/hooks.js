import { useState, useEffect } from 'react'

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)
  const inc = () => setCount(count + 1)
  return [count, inc]
}

export const useQuote = () => {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState('')
  useEffect(() => {
    const axiosGet = async () => 'Spread love everywhere you go.'
    const getQuote = async () => {
      const quote = await axiosGet()
      setQuoteOfTheDay(quote)
    }
    getQuote()
  }, [])
  return quoteOfTheDay
}

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)
  const onChange = evt => setValue(evt.target.value)
  const onReset = () => setValue(initialValue)
  return { value, onChange, onReset }
}