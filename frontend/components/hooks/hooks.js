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