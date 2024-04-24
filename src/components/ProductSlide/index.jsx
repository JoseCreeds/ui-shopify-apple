import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import Slide1 from '../../assets/productSlide/dia1.jpg'
import Slide1 from '../../assets/productSlide/pdt1.webp'
import Slide2 from '../../assets/productSlide/pdt2.webp'
import Slide3 from '../../assets/productSlide/pdt3.webp'
import Slide4 from '../../assets/productSlide/pdt4.webp'
import Slide5 from '../../assets/productSlide/pdt5.webp'
import Slide6 from '../../assets/productSlide/pdt6.webp'
import Slide7 from '../../assets/productSlide/pdt7.webp'
// import Slide2 from '../../assets/productSlide/dia2.jpg'
// import Slide3 from '../../assets/productSlide/dia3.jpg'
// import Slide4 from '../../assets/productSlide/dia4.jpg'
// import Slide5 from '../../assets/productSlide/dia5.jpg'
// import Slide6 from '../../assets/productSlide/dia6.jpg'

const Container = styled.div`
  position: relative;
  max-width: 600px;
  width: 500px;
`

const MySlides = styled.div`
  display: none;
`

const PrevNextButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: #f5bfcd;
  background-color: transparent;
  border: 1px solid #f5bfcd;
  font-weight: bold;
  font-size: 20px;
  border-radius: ${(props) => (props.next ? '3px 0 0 3px' : '0 3px 3px 0')};
  user-select: none;
  -webkit-user-select: none;
  right: ${(props) => (props.next ? '0' : 'auto')};

  &:hover {
    background-color: #f5bfcd;
    opacity: 0.8;
    color: #ffffff;
  }
`

const DemoImage = styled.img`
  opacity: ${(props) => (props.active || props.hover ? '1' : '0.6')};
  cursor: pointer;
`

function ProductSlide() {
  const [slideIndex, setSlideIndex] = useState(1)

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) =>
      prevIndex + n > 0 && prevIndex + n <= 7 ? prevIndex + n : prevIndex
    )
  }

  const currentSlide = (n) => {
    setSlideIndex(n > 0 && n <= 7 ? n : slideIndex)
  }

  const showSlides = (n) => {
    let i
    const slides = document.getElementsByClassName('mySlides')
    const dots = document.getElementsByClassName('demo')

    if (n > slides.length) {
      setSlideIndex(1)
    }
    if (n < 1) {
      setSlideIndex(slides.length)
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }

    // Remove 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = 'block'
    // Add 'active' class to the corresponding dot
    dots[slideIndex - 1].className += ' active'
  }

  // Use useEffect to call showSlides when slideIndex changes
  useEffect(() => {
    showSlides(slideIndex)
  })

  return (
    <div>
      <Container>
        {[Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7].map(
          (slide, index) => (
            <MySlides key={index} className="mySlides">
              {/* <div className="numbertext">{`${index + 1} / 5`}</div> */}
              <img
                src={slide}
                alt={`Slide${index + 1}`}
                style={{ height: '450px', width: '100%' }}
              />
            </MySlides>
          )
        )}

        <PrevNextButton onClick={() => plusSlides(-1)} prev>
          ❮
        </PrevNextButton>
        <PrevNextButton onClick={() => plusSlides(1)} next>
          ❯
        </PrevNextButton>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '500px',
          }}
          className="row"
        >
          {[Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7].map(
            (slide, index) => (
              <div key={index} className="column">
                <DemoImage
                  className="demo cursor"
                  src={slide}
                  alt={`Slide${index + 1}`}
                  style={{ height: '60px', width: 'auto' }}
                  onClick={() => currentSlide(index + 1)}
                />
              </div>
            )
          )}
        </div>
      </Container>
    </div>
  )
}

export default ProductSlide
