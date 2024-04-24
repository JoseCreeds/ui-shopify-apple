import styled from 'styled-components'
import colors from '../../utils/style/colors'
import error from '../../assets/404404.webp'

const ErrorWrapper = styled.div`
  margin: 20px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
`
const ErrorTitle = styled.h1`
  font-weight: 300;
`
const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`
const Illustration = styled.img`
  max-width: 800px;
  height: 400px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={error} />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}
export default Error
