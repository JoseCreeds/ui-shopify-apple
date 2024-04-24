import styled from 'styled-components'
import { Link } from 'react-router-dom'

import AmEx from '../../assets/express_americain.png'
import ApplePay from '../../assets/apple.png'
import Discover from '../../assets/discover.png'
import Meta from '../../assets/metatrue.webp'
import GooglePay from '../../assets/googlePay.png'
import MasterCard from '../../assets/mastercardvisa.png'
import Paypal from '../../assets/paypal.png'
import Shop from '../../assets/shop.png'
import Visa from '../../assets/visa.png'

const FooterWrapper = styled.div`
  min-width: 200px;
`
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #000000;
  color: white;
  min-width: 400px;
  margin-top: 60px;
  padding-bottom: 50px;
`
const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
  min-width: 300px;
`
const SectionRow = styled.div`
  min-width: 300px;
  line-height: 30px;
`
const PageLink = styled(Link)`
  font-size: 18px;
  letter-spacing: 0.06rem;
  color: #cbd5e1;
  font-weight: 300;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &:actve {
    text-decoration: underline;
  }
`
const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 300px;
  justify-content: center;
  padding: 35px 0;
  background-color: #000000;
  border-top: 1px solid #0f172a;
`
const FooterImage = styled.img`
  height: 25px;
  width: 40px;
  padding: 5px;
  border-radius: 7px;
`
const Right = styled.div`
  color: #cbd5e1;
  padding: 50px 100px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: left;
  font-weight: 300;
  background-color: #000000;
`

function Footer() {
  return (
    <FooterWrapper>
      <FooterTop>
        <section>
          <SectionTitle>BEAUTIE</SectionTitle>
          <SectionRow>
            <strong>E-mail:</strong> support@trybeautie.com
          </SectionRow>
          <SectionRow>
            <strong>Phone:</strong> +1 987-601-4578
          </SectionRow>
        </section>
        <section>
          <SectionTitle>INFORMATION</SectionTitle>
          <SectionRow>
            <PageLink to="/">Search</PageLink>
          </SectionRow>
          <SectionRow>
            <PageLink to="/contact">Contact Us</PageLink>
          </SectionRow>
          <SectionRow>
            <PageLink to="/wholesale">Wholesale</PageLink>
          </SectionRow>
          <SectionRow>
            <PageLink to="/tracking">Track Your Order</PageLink>
          </SectionRow>
        </section>
        <section>
          <SectionTitle>Store Policy</SectionTitle>
          <SectionRow>
            <PageLink to="/">Privacy Policyh</PageLink>
          </SectionRow>
          <SectionRow>
            <PageLink to="/">Refund Policyh</PageLink>
          </SectionRow>
          <SectionRow>
            <PageLink to="/">Shipping Policy</PageLink>
          </SectionRow>
          <SectionRow>
            <PageLink to="/">Terms of serviceh</PageLink>
          </SectionRow>
          <SectionRow>
            <PageLink to="/">Payments Policyh</PageLink>
          </SectionRow>
        </section>
      </FooterTop>
      <FooterBottom>
        <FooterImage src={AmEx} alt="" />
        <FooterImage src={ApplePay} alt="" />
        <FooterImage src={Discover} alt="" />
        <FooterImage src={Meta} alt="" />
        <FooterImage src={GooglePay} alt="" />
        <FooterImage src={MasterCard} alt="" />
        <FooterImage src={Paypal} alt="" />
        <FooterImage src={Shop} alt="" />
        <FooterImage src={Visa} alt="" />
      </FooterBottom>
      <Right>&copy; 2024, TryBeautie</Right>
    </FooterWrapper>
  )
}

export default Footer
