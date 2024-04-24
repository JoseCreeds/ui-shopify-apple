import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App';
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Wholesale from './pages/Wholesale'
import TrackOrder from './pages/TrackOrder'
import ContactUs from './pages/ContactUs'
import Basket from './pages/Basket'
import Checkout from './pages/Checkout'

import Error from './components/Error'
import Footer from './components/Footer'

import { CartProvider } from './utils/context'
import { AmountProvider } from './utils/context'
import './utils/style/globalStyle.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <AmountProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/tracking" element={<TrackOrder />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </AmountProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
