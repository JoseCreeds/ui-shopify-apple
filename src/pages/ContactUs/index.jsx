import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  max-width: 750px;
  margin: 10px auto;
  padding: 10px;
  justify-content: center;
`
const ContactTitle = styled.h1`
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
const Form = styled.form`
  max-width: 750px;
`
const FormFirstRow = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const FormInput = styled.input`
  border-radius: 15px;
  height: 35px;
`
const FormTextarea = styled.textarea`
  margin: 15px 0px 5px;
  height: 35px;
  border-radius: 15px;
`
const FormLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #f5bfcd;
  padding: 15px 25px;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0.5px #ffffff;
  font-weight: bold;
  font-size: 18px;
`

function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  function trustPhone(phone) {
    if (phone.length < 6) {
      setError('Numero trop court')
    } else {
      let phoneRegExp = new RegExp('^[0-9]+$')
      if (!phoneRegExp.test(phone)) {
        setError('Invalid phone number.')
      } else {
        setError('')
      }
    }
  }

  function trustEmail(email) {
    let emailRegExp = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+')
    if (!emailRegExp.test(email)) {
      setError("L'email n'est pas valide.")
    } else {
      trustPhone(phone)
    }
  }

  function trustName(name) {
    if (name.length < 2) {
      setError('Nom trop court')
    } else {
      let nameRegExp = new RegExp(/^[a-zA-Z0-9_]+$/)
      if (!nameRegExp.test(name)) {
        setError('Invalid name.')
      } else {
        trustEmail(email)
      }
    }
  }

  const checkEmptyInput = () => {
    if (name === '' || email === '' || phone === '' || comment === '') {
      setError('No empty fields')
    } else if (name !== '' && email !== '' && phone !== '' && comment !== '') {
      trustName(name)
      // trustEmail(email)
    }
  }

  return (
    <ContactWrapper>
      <ContactTitle> Contact Us</ContactTitle>
      <StyledText>
        Customer service is our number one priority. We will strive to make you
        happy and are responsive to suporte messages 24/7. Over 30,000+
        customers have trusted us we their busness.
      </StyledText>
      <StyledText>
        <strong>Address:</strong> 2500 walnut, Dallas Texas 24786, United States
      </StyledText>
      <StyledText>
        <strong>E-mail:</strong>info@trybeautie.com
      </StyledText>
      <StyledText>
        <strong>Phone:</strong>+1 154 78 5425
      </StyledText>

      <div
        style={{
          letterSpacing: '1.2px',
          margin: '20px 0 100px',
          color: '#374151',
          fontSize: '16px',
        }}
      >
        Or Contact Us using this form
      </div>

      <Form>
        <FormFirstRow>
          <FormInput
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            style={{ width: '45%' }}
          />
          <FormInput
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email *"
            style={{ width: '45%' }}
          />
        </FormFirstRow>
        <div>
          <FormInput
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone number"
            style={{ width: '99%' }}
          />
        </div>
        <div>
          <FormTextarea
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
            style={{ width: '99%', height: '150px' }}
          />
        </div>

        <h3 style={{ color: 'red', marginBottom: '15px' }}>{error}</h3>
        <br />

        <FormLink onClick={checkEmptyInput} to="">
          Send
        </FormLink>
      </Form>
    </ContactWrapper>
  )
}

export default ContactUs
