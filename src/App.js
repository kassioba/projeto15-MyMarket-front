import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import SignInPage from "./pages/SignIn/SignIn"
import SignUpPage from "./pages/SignUp/SignUp"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import React, { useState } from "react"
import Context from "./Context"
import OrdersPage from "./pages/OrdersPage"
import CheckOutPage from "./pages/CheckoutPage"
import OrderPage from "./pages/OrderPage"

export default function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [token, setToken] = useState("")
  const [userId, setUserId] = useState("")

  const url = process.env.REACT_APP_API_URL

  const contextValue = { products, setProducts, cart, setCart, total, setTotal, token, setToken, url, userId, setUserId }
  
  return (
        <Context.Provider value={contextValue}>
          <BrowserRouter>
            <PagesContainer>
              <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckOutPage/>}/>
                <Route path="/orders" element={<OrdersPage/>}/>
                <Route path="/orders/:OrderId" element={<OrderPage/>}/>
              </Routes>
            </PagesContainer>
          </BrowserRouter>
        </Context.Provider>
  )
}

const PagesContainer = styled.main`
background-color: #89192E;
height: 100vh;
`
