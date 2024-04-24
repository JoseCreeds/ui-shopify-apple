import React, { useEffect } from 'react'
import styled from 'styled-components'
import Img_1 from '../../assets/checkout/checkoutApple.webp'
import Img_2 from '../../assets/checkout/checkout.webp'
import Img_3 from '../../assets/checkout/checkout_3.webp'

const CheckoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
`
const PartLeft = styled.div`
  min-width: 300px;
`
const PartLeftTop = styled.div`
  text-align: center;
  margin-bottom: 30px;
`
const PartLeftTopBtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`
const PartLeftTopBtn = styled.button`
  padding: 9px 0;
  width: 47%;
`
const PartLeftCenter = styled.div`
  margin-bottom: 35px;
`

const PartLeftCenterBottom = styled.div`
  margin: 35px 0;
`
const Input = styled.input`
  display: block;
  width: 98%;
  padding: auto;
  padding-left: 7px;
  margin: 15px 0;
  height: 35px;
  border: 1px solid transparent;
  border-color: #cbd5e1;
  box-shadow: 1px 1px 1px 0 #fee2e2;
  border-radius: 5px;
`
const InputCol = styled.input`
  display: inline;
  padding: auto;
  padding-left: 7px;
  width: 45%;
  margin: 15px 0 15px 0;
  height: 35px;
  border: 1px solid transparent;
  border-color: #cbd5e1;
  box-shadow: 1px 1px 1px 0 #fee2e2;
  border-radius: 5px;
`
const PayBtn = styled.button`
  color: #ffffff;
  background-color: #000000;
  fontsize: 16px;
  fontweight: 600;
  width: 100%;
  padding: 15px;
  margin: 15px auto;
  border: 1px solid #cbd5e1;
  boxshadow: 1px 1px 1px 0 #fee2e2;
  border-radius: 5px;
  appearance: none;
`

function Checkout() {
  useEffect(() => {
    function handleInspectElement() {
      // Code à exécuter lorsque l'outil de développement est ouvert
      // Vous pouvez choisir de ne rien faire ou de rediriger l'utilisateur
      // ou d'afficher un avertissement, etc.
      alert("Inspecter l'élément n'est pas autorisé.")
    }

    // Ajoutez un écouteur pour détecter l'ouverture de l'outil de développement
    window.addEventListener('devtoolschange', handleInspectElement)

    // Nettoyage de l'écouteur lorsque le composant est démonté
    return () => {
      window.removeEventListener('devtoolschange', handleInspectElement)
    }
  }, [])

  return (
    <CheckoutWrapper>
      <PartLeft>
        <PartLeftTop>
          <p style={{ color: '#374151', fontSize: '14px' }}>Express checkout</p>
          <PartLeftTopBtnWrapper>
            <PartLeftTopBtn>Shop</PartLeftTopBtn>
            <PartLeftTopBtn>GPay</PartLeftTopBtn>
          </PartLeftTopBtnWrapper>
          <span style={{ color: '#374151', fontSize: '14px' }}>OR</span>
        </PartLeftTop>
        <PartLeftCenter>
          <div>
            <h3
              style={{
                margin: '0',
              }}
            >
              Contact
            </h3>
            <Input type="email" placeholder="Email or monile phone number" />
            <input
              type="checkbox"
              defaultChecked
              style={{ accentColor: '#000000' }}
            />
            Email me with news and offers
          </div>
          <div>
            <h3
              style={{
                margin: '35px 0 0 0',
              }}
            >
              Delivery
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <InputCol type="text" placeholder="First name" />
              <InputCol type="text" placeholder="Last name" />
            </div>
            <Input type="text" placeholder="Adresse" />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <InputCol type="text" placeholder="Postal code" />
              <InputCol type="text" placeholder="City" />
            </div>
            <Input type="text" placeholder="Phone" />
          </div>
          <div>
            <label htmlFor="">Shipping method</label>
            <Input
              type="text"
              placeholder="Express Shipping (Secure Tracking + Package Insurance) *RECOMMENDED"
              readOnly
              style={{
                backgroundColor: '#f5f5f4',
              }}
            />
          </div>
          <PartLeftCenterBottom>
            <h3
              style={{
                margin: '0',
              }}
            >
              Payment
            </h3>
            <p
              style={{
                fontSize: '12px',
                color: '#374151',
              }}
            >
              All transactions are secure and encrypted.
            </p>
            <div
              style={{
                border: '1px solid #fecaca',
                padding: '15px',
                boxShadow: '1px 1px 3px 0 #fee2e2',
                backgroundColor: '#fef2f2',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
              }}
            >
              <input
                type="radio"
                defaultChecked
                style={{ accentColor: '#000000' }}
              />
              Credit card
            </div>
            <div
              style={{
                border: '1px solid #cbd5e1',
                padding: '15px',
                boxShadow: '1px 1px 1px 0 #fee2e2',
                backgroundColor: '#f5f5f4',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
              }}
            >
              <div>
                <Input type="text" placeholder="Card number" required />
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <InputCol
                    type="text"
                    placeholder="Expiration date (MM / YY)"
                    required
                  />
                  <InputCol type="text" placeholder="Security code" required />
                </div>
                <Input type="text" placeholder="Name on card" required />
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: '#000000' }}
                />{' '}
                Use shipping address as billing address
              </div>
            </div>
          </PartLeftCenterBottom>
        </PartLeftCenter>
        <div>
          <label htmlFor="">Remember me</label>
          <div
            style={{
              padding: '15px',
              margin: '15px 0',
              border: '1px solid #cbd5e1',
              boxShadow: '1px 1px 1px 0 #fee2e2',
              borderRadius: '5px',
            }}
          >
            <input
              type="checkbox"
              defaultChecked
              style={{ accentColor: '#000000' }}
            />
            Save my information for a faster checkout
          </div>
          <PayBtn>Pay now</PayBtn>
        </div>
      </PartLeft>
      <div style={{ width: 'auto', overflowY: 'hidden' }}>
        <img src={Img_1} alt="img" />
        <br />
        <img src={Img_2} alt="img" />
        <br />
        <img src={Img_3} alt="img" />
      </div>
    </CheckoutWrapper>
  )
}

export default Checkout
