import styled from 'styled-components'

const TrackOrderContainer = styled.div`
  max-width: 700px;
  margin: 10px auto;
  padding: 10px;
  justify-content: center;
`
const WholesaleTitle = styled.h1`
  font-size: 72px;
  font-weight: 300;
`
const StyledText = styled.p`
  line-height: 2;
  letter-spacing: 1.2px;
  margin-bottom: 5px;
  color: #374151;
  font-size: 16px;
`

function TrackOrder() {
  return (
    <TrackOrderContainer>
      <WholesaleTitle>Track Your Order</WholesaleTitle>
      <StyledText>
        If you need to change or cancel your order, please contact us
        immediatly. We process and ship orders quickly (We're fast !). Once our
        warehouse has processed your order, we will be unable to make any
        changes. <br />
        <br /> *Please note that any orders that have already been packed cannot
        be cancelled.
      </StyledText>
    </TrackOrderContainer>
  )
}

export default TrackOrder
