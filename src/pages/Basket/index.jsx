import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext, AmountContext } from '../../utils/context'

const BasketWrapper = styled.div`
  max-width: 80%;
  min-height: 100%;
  margin: 10px auto;
  padding: 10px;
`
const EmptyCardTitle = styled.h1`
  font-size: 64px;
  font-weight: 300;
  text-align: center;
`

const FormLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #f5bfcd;
  padding: 12px 100px;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0.5px #ffffff;
  font-weight: bold;
  font-size: 14px;
`
const AmountChange = styled.div`
  font-size: 24px;
  width: 10px;
  text-align: center;
  color: #9ca3af;
  margin: 0 10px;
`

function Basket() {
  const { cart, updateCart } = useContext(CartContext)
  const { amount, handleIncrease, handleDecrease, handleInputAmountChange } =
    useContext(AmountContext)

  const total = cart.reduce(
    (acc, product) => acc + product.amount * product.price,
    0
  )

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
    <BasketWrapper>
      {cart.length > 0 ? (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2>Your cart</h2>
            <Link
              to="/shop"
              style={{
                color: '#1e293b',
              }}
            >
              Continue shopping
            </Link>
          </div>
          <table
            border="0"
            style={{
              border: '0px solid transparent',
            }}
          >
            <thead
              style={{
                fontSize: '10px',
                color: '#9ca3af',
              }}
            >
              <tr
                style={{
                  textAlign: 'center',
                  width: '50%',
                }}
              >
                <th>PRODUCT</th>
                <th
                  style={{
                    width: '30%',
                    textAlign: 'center',
                  }}
                >
                  QUANTITY
                </th>
                <th
                  style={{
                    width: '20%',
                  }}
                >
                  {' '}
                  TOTAL{' '}
                </th>
              </tr>
            </thead>
            <tbody
              style={{
                borderTop: '1px solid #e7e5e4',
                borderBottom: '1px solid #e7e5e4',
                padding: '50px auto',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              {cart.map(({ name, price }, index) => (
                <tr key={`${name}-${index}`}>
                  <td
                    style={{
                      width: '50%',
                    }}
                  >
                    <p
                      style={{
                        letterSpacing: '1px',
                        lineHeight: '25px',
                        width: '60%',
                      }}
                    >
                      {name} <br />
                      {price}€
                    </p>
                  </td>

                  <td
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      height: '30px',
                      width: '60%',
                      margin: 'auto',
                      marginTop: '10px',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(0%, 50%)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        border: '1px solid #9ca3af',
                        borderRadius: '5px',
                        padding: '5px',
                        textAlign: 'center',
                      }}
                    >
                      <AmountChange onClick={handleDecrease}>-</AmountChange>

                      <input
                        style={{
                          fontSize: '14px',
                          width: '30px',
                          height: '30px',
                          textAlign: 'center',
                          margin: '0 10px',
                          border: '0',
                        }}
                        type="text"
                        value={amount}
                        onChange={handleInputAmountChange}
                      />

                      <AmountChange onClick={handleIncrease}>+</AmountChange>
                    </div>
                  </td>
                  <td
                    style={{
                      width: '20%',
                      color: '#1e293b',
                      fontSize: '14px',
                    }}
                  >
                    {total} €
                  </td>
                </tr>
              ))}
              {/* </td> */}
              {/* </tr> */}
            </tbody>
          </table>
          <div
            style={{
              textAlign: 'right',
              color: '#1e293b',
              fontSize: '14px',
            }}
          >
            <h3>Subtotal {total} €</h3>

            {/* <button onClick={() => updateCart([])}>Vider le panier</button> */}
            <br />
            <FormLink
              onClick={() =>
                addToCart('Menstrual Pain Relief Pad | Sale Ends Soon', 19.95)
              }
              to="/checkout"
            >
              Check out
            </FormLink>
          </div>
        </div>
      ) : (
        <div>
          <EmptyCardTitle>Your card is empty</EmptyCardTitle>
          <br />
          <div style={{ textAlign: 'center' }}>
            <FormLink to="/shop">Continue shopping</FormLink>
          </div>
        </div>
      )}
    </BasketWrapper>
  )
}

export default Basket
