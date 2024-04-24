import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../utils/context'
import Basket from '../../assets/header/basket.png'
import Search from '../../assets/header/search.png'

const HeaderContainer = styled.div`
  width: 100%;
  font-family: Poppins, sans-serif;
`
const HeaderBanner = styled.p`
  color: white;
  background-color: #f5bfcd;
  padding: 10px;
  margin: 0;
  font-size: 18px;
  text-align: center;
`
const HeaderSubContainer = styled.nav`
  padding: 10px;
  margin: 0 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  z-index: 3;
`
const NavColLeft = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0 15px;
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`

function Header() {
  const { cart } = useContext(CartContext)

  useEffect(() => {
    document.title = `TryBeautie`
  })

  return (
    <HeaderContainer>
      <HeaderBanner>
        GET A FREE EBOOK WITH YOUR ORDER INSTANTLY DELIVERED. ENDS AT MIDNIGHT!
      </HeaderBanner>
      <HeaderSubContainer>
        <NavColLeft>
          <Link to="/" style={{ color: '#0f172a', textDecoration: 'none' }}>
            <h1 style={{ fontSize: '35px' }}>iphone 15</h1>
          </Link>
          <div style={{ marginLeft: '35px' }}>
            <StyledLink to="/shop">Shop</StyledLink>
            <StyledLink to="/wholesale">Wholesale</StyledLink>
            <StyledLink to="/tracking">Track your Order</StyledLink>
            <StyledLink to="/contact">Contact Us</StyledLink>
          </div>
        </NavColLeft>
        <div style={{ display: 'flex' }}>
          <Link to="/search">
            <img
              src={Search}
              alt="Search"
              style={{ height: '30px', width: 'auto', Top: '20px' }}
            />
          </Link>
          <div>
            <Link
              style={{
                position: 'relative',
              }}
              to="/basket"
            >
              <img
                src={Basket}
                alt="Basket"
                style={{
                  height: '30px',
                  width: 'auto',
                  Top: '20px',
                  marginLeft: '25px',
                  zIndex: '0',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  backgroundColor: '#f5bfcd',
                  color: '#ffffff',
                  padding: '4px',
                  borderRadius: '40%',
                  textAlign: 'center',

                  right: '0px',
                  top: '0px',
                  fontWeight: 'bold',
                  fontSize: '8px',
                }}
              >
                {cart.reduce((acc, item) => acc + item.amount, 0)}
              </span>
            </Link>
          </div>
        </div>
      </HeaderSubContainer>
    </HeaderContainer>
  )
}

export default Header
