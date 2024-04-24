import styled from 'styled-components'
// import HomeIllustration from '../../assets/illushome.jpeg'
// import HomeIllustration from '../../assets/regle.jpg'
import HomeIllustration from '../../assets/iphone-15.webp'

const HomeContainer = styled.div`
  margin: 10px 0 40px;
  padding: 130px 0;
  background-image: url(${HomeIllustration});
  height: 40vh;
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
`

function Home() {
  return (
    <HomeContainer>
      <h1
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Get Rid Of Period Pain For Good!
      </h1>
      <p>Seen all over social media | 10,000+ Happy Customers</p>
    </HomeContainer>
  )
}

export default Home
