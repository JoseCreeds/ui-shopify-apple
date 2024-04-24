import { useContext } from 'react'
import { CartContext, AmountContext } from '../../utils/context'
import styled from 'styled-components'
import Slide from '../ProductSlide'

const SubTitle = styled.h2`
  color: #ffffff;
  background-color: #dc2626;
  text-align: center;
  width: 400px;
  margin: 0 auto;
  padding: 0 50px;
`
const List = styled.div`
  font-size: 15px;
`
const AmountChange = styled.div`
  font-size: 24px;
  width: 90px;
  text-align: center;
`
const BtnAddToCart = styled.button`
  color: #000000;
  background-color: #f5bfcd;
  padding: 15px;
  border: 1px solid transparent;
  box-shadow: 1px 1px 1px 0.5px #ffffff;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  transition: transform 200ms;
  &:hover {
    transform: scale(1.15);
  }
  &--perspective75px {
    transform: perspective(75px) rotateX(45deg);
  }
  &--skew {
    transform: skew(45deg, 45deg);
  }
`

function Product() {
  const { cart, updateCart } = useContext(CartContext)

  // const amountLocalStoraged = JSON.parse(localStorage.getItem('Amount')) || 1

  const { amount, handleIncrease, handleDecrease, handleInputAmountChange } =
    useContext(AmountContext)

  // useEffect(() => {
  //   const currentAmount = JSON.stringify(amount)
  //   localStorage.setItem('Amount', currentAmount)
  // }, [amount])

  // const handleIncrease = () => {
  //   setAmount(amount + 1)
  // }

  // const handleDecrease = () => {
  //   if (amount > 1) {
  //     setAmount(amount - 1)
  //   }
  // }

  // const handleInputAmountChange = (event) => {
  //   const inputAmount = event.target.value
  //   // Validate if the input is a positive integer or set to 1
  //   const parsedAmount = /^\d+$/.test(inputAmount)
  //     ? parseInt(inputAmount, 10)
  //     : 1
  //   setAmount(Math.max(parsedAmount, 1))
  // }

  function addToCart(name, price) {
    const currentProductSaved = cart.find((product) => product.name === name)
    if (currentProductSaved) {
      const cartFilteredCurrentProduct = cart.filter(
        (palnt) => palnt.name !== name
      )
      updateCart([
        ...cartFilteredCurrentProduct,
        {
          name,
          price,
          amount: currentProductSaved.amount + Math.max(amount, 1),
        },
      ])
    } else {
      updateCart([...cart, { name, price, amount: Math.max(amount, 1) }])
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap-reverse',
        padding: '0 10px',
        minWidth: '300px',
      }}
    >
      <div>
        <Slide />
      </div>
      <div style={{ width: '500px' }}>
        <h1>Menstrual Pain Relief Pad | Sale Ends Soon</h1>
        <SubTitle>60% OFF: 1 YEAR ANNIVERSARY SALE !</SubTitle>
        <p style={{ fontSize: '18px' }}>⭐️⭐️⭐️⭐️⭐️ 4.8 | 583 Reviews</p>
        <p style={{ fontSize: '14px', lineHeight: '22px' }}>
          Beatie will help eliminate body cramps & menstrual pain in just 7-10
          minutes a day, or your money back graranteed!
        </p>
        <List>Helps to prevent bloating</List>
        <List>Wake up refreshed, no soreness</List>
        <List>Natural and Pain Free</List>
        <List>HIdden under clothing</List>
        <div style={{ display: 'flex' }}>
          <p
            style={{
              fontSize: '36px',
              color: '#f5bfcd',
              marginRight: '25px',
              fontWeight: 'bold',
            }}
          >
            $19.95
          </p>
          <p
            style={{
              fontSize: '24px',
              paddingTop: '21px',
              textDecoration: ' line-through',
            }}
          >
            $50.00
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            height: '37px',
            maxWidth: '400px',
            margin: 'auto',
          }}
        >
          <AmountChange onClick={handleDecrease}>-</AmountChange>
          <div>
            <input
              style={{
                fontSize: '14px',
                width: '120px',
                height: '30px',
                textAlign: 'center',
              }}
              type="text"
              value={amount}
              onChange={handleInputAmountChange}
            />
          </div>
          <AmountChange onClick={handleIncrease}>+</AmountChange>
        </div>
        <div
          style={{
            maxWidth: '400px',
            margin: '35px auto',
          }}
        >
          <BtnAddToCart
            onClick={() =>
              addToCart('Menstrual Pain Relief Pad | Sale Ends Soon', 19.95)
            }
          >
            GET YOURS NOW
            <span
              style={{
                marginLeft: '30px',
              }}
            >
              👉
            </span>
          </BtnAddToCart>
        </div>
      </div>
    </div>
  )
}

export default Product
