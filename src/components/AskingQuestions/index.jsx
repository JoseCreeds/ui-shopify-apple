import { useState } from 'react'
import styled from 'styled-components'

const StyledQuestion = styled.h1`
  color: #000000;
  font-size: 16px;
  width: 100%;
  text-align: left;
  padding: 10px 5px;
  margin: 1px 0 1px 15px;
`
const StyledAnswer = styled.p`
  color: #374151;
  width: 100%;
  padding: 15px 0px;
  line-height: 25px;
  margin: 1px 0 1px 15px;
`

function AskingQuestions({ question, answer }) {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!isOpen)
  }
  return (
    <div
      onClick={handleClick}
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '1px auto',
        maxWidth: '1000px',
      }}
    >
      <div style={{ backgroundColor: '#f5bfcd', width: '100%' }}>
        <StyledQuestion>{question}</StyledQuestion>
      </div>
      {isOpen && (
        <StyledAnswer>
          {answer.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </StyledAnswer>
      )}
    </div>
  )
}

export default AskingQuestions
