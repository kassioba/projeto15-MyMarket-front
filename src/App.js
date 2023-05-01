import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import React, { useState } from "react"
import Context from "./Context"

export default function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const contextValue = { products, setProducts, cart, setCart, total, setTotal }
  
  return (
        <Context.Provider value={contextValue}>
          <BrowserRouter>
            <PagesContainer>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
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
