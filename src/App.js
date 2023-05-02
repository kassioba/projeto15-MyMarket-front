import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import SignInPage from "./pages/SignIn/SignIn"
import SignUpPage from "./pages/SignUp/SignUp"
import UserContext from "./UserContext"
import { useState } from "react"

export default function App() {
  const [token, setToken] = useState("");
  
  return (
    <PagesContainer>
      <UserContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #E01339;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
