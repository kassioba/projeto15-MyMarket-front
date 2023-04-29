import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import React from "react";

export default function App() {

  return (
    <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
    </PagesContainer>
  );
}

const PagesContainer = styled.main`
  background-color: #89192E;
 height: 100vh;
`;
