import AskingQuestions from '../../components/AskingQuestions'
import { questions } from './questions'
import Product from '../../components/Product'
import styled from 'styled-components'
import './CompareTable.css'
// import 'font-awesome'

import Shipping from '../../assets/shop/un-camion.png'
import Guarantie from '../../assets/shop/garantie.png'
import Return from '../../assets/shop/return.png'
// import Try from '../../assets/shop/try.jpg'
import Try from '../../assets/shop/iPhone-15-pro.png'
// import ProductImage from '../../assets/shop/dia1.jpg'
import ProductImage from '../../assets/shop/howitworks.jpg'

const IconShippingReturn = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin-bottom: 15px;
`

function Shop() {
  return (
    <div
      style={{
        margin: '15px auto',
        overflowX: 'hidden',
        padding: '0 20px',
      }}
    >
      <div>
        <Product />
      </div>

      <div
        style={{
          maxWidth: '100%',
          justifyContent: 'center',
          margin: '45px auto',
          padding: '0 15px',
          textAlign: 'center',
        }}
      >
        <h1>HOW IT WORKS</h1>
        <p
          style={{
            lineHeight: '25px',
            maxWidth: '1000px',
            margin: '45px auto',
          }}
        >
          Imagine trying to hear cungle voice in a crowd of a thousand people.
          Well, that's whe ™ device does to pain signals. The device drowns out
          pain signals. The result? Your brain doesn't know that you're in pain,
          and you can relaxind unwind pain-free. Simply strap it around your
          waist, adjust it to fit, and enjoy instant relief. Our pad is fully
          customizable, allowing you to change the level of heat and vibration
          to whatever fits your needs.
        </p>
        <img
          src={ProductImage}
          alt=""
          style={{
            maxHeight: '150vh',
            maxWidth: '100%',
            margin: ' auto',
          }}
        />
      </div>

      <div
        style={{
          maxWidth: '1000px',
          justifyContent: 'center',
          margin: '45px auto',
          padding: '0 15px',
          textAlign: 'center',
        }}
      >
        <h1>What Makes Us Different ?</h1>

        <table>
          <thead>
            <tr>
              <th style={{ width: '50%' }}></th>
              <th>beautie</th>
              <th>OTHERS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Relieves Pain</td>
              <td>
                <i className="fa fa-remove">✅</i>
              </td>
              <td>
                <i className="fa fa-check">❌</i>
              </td>
            </tr>
            <tr>
              <td>Multiple Massage Modes</td>
              <td>
                <i className="fa fa-check">✅</i>
              </td>
              <td>
                <i className="fa fa-check">❌</i>
              </td>
            </tr>
            <tr>
              <td>Fully Adjustable Strap</td>
              <td>
                <i className="fa fa-check">✅</i>
              </td>
              <td>
                <i className="fa fa-check">❌</i>
              </td>
            </tr>
            <tr>
              <td>Sleek Design</td>
              <td>
                <i className="fa fa-remove">✅</i>
              </td>
              <td>
                <i className="fa fa-check">❌</i>
              </td>
            </tr>
            <tr>
              <td>Hidden under clothing</td>
              <td>
                <i className="fa fa-check">✅</i>
              </td>
              <td>
                <i className="fa fa-check">❌</i>
              </td>
            </tr>
            <tr>
              <td>Under $100</td>
              <td>
                <i className="fa fa-check">✅</i>
              </td>
              <td>
                <i className="fa fa-check">❌</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          maxWidth: '100%',
          justifyContent: 'center',
          margin: 'auto',
          padding: '0 15px',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Easier than 1-2-3-4
        </h1>
        <img
          src={Try}
          alt=""
          style={{
            minHeight: '80vh',
            minwidth: '100%',
          }}
        />
      </div>

      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '24px',
            margin: '95px auto 5px',
          }}
        >
          Question ? We've got you corved
        </h1>
        <div
          style={{
            margin: '35px auto',
          }}
        >
          {questions.map((question, index) => (
            <div key={`${question.id}-${index}`}>
              <AskingQuestions
                question={question.question}
                answer={question.answer}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          margin: '50px 50px',
        }}
      >
        <IconShippingReturn>
          <img
            src={Shipping}
            alt=""
            style={{ height: '100px', width: 'auto' }}
          />
          <h2>Quick Shipping</h2>
          <p>Worldwide Shipping Available On All Orders</p>
        </IconShippingReturn>
        <IconShippingReturn>
          <img
            src={Guarantie}
            alt=""
            style={{ height: '100px', width: 'auto' }}
          />
          <h2> 30 Day Guarantee</h2>
          <p>
            30 Day <span>No-Questions Asked</span> Money Back Guarantee
          </p>
        </IconShippingReturn>
        <IconShippingReturn>
          <img src={Return} alt="" style={{ height: '100px', width: 'auto' }} />
          <h2>Hassle Free Returns</h2>
          <p>Unsatisfied? Contact us for easy returns</p>
        </IconShippingReturn>
      </div>
    </div>
  )
}

export default Shop
