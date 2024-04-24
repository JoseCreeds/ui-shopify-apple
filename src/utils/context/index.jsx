import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem('SavedCart')) || []

  const [cart, updateCart] = useState(cartLocalStorage)

  useEffect(() => {
    const cartValue = JSON.stringify(cart)
    localStorage.setItem('SavedCart', cartValue)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const AmountContext = createContext()

export const AmountProvider = ({ children }) => {
  const amountLocalStoraged = JSON.parse(localStorage.getItem('Amount')) || 1

  const [amount, setAmount] = useState(amountLocalStoraged)

  const handleIncrease = () => {
    setAmount(amount + 1)
  }

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const handleInputAmountChange = (event) => {
    const inputAmount = event.target.value
    // Validate if the input is a positive integer or set to 1
    const parsedAmount = /^\d+$/.test(inputAmount)
      ? parseInt(inputAmount, 10)
      : 1
    setAmount(Math.max(parsedAmount, 1))
  }

  useEffect(() => {
    const currentAmount = JSON.stringify(amount)
    localStorage.setItem('Amount', currentAmount)
  }, [amount])

  return (
    <AmountContext.Provider
      value={{
        amount,
        setAmount,
        handleIncrease,
        handleDecrease,
        handleInputAmountChange,
      }}
    >
      {children}
    </AmountContext.Provider>
  )
}
