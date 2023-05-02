import styled from "styled-components"
import { BiExit } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import Context from "../Context"
import axios from "axios"

export default function HeaderComponent() {
  const navigate = useNavigate()
  const context = useContext(Context)

  const config = {
    headers: {
      Authorization: `Bearer ${context.token}`,
    }
}

  function logOut() {
    const promise = axios.post(`${context.url}SignOut`, {}, config)

    promise
        .then((res) => {
        localStorage.removeItem("token")
        localStorage.removeItem("cart")
        navigate("/");
        })
        .catch(() => navigate("/"))
}
  
  return (
      <Header>
        <div>
          <AiOutlineShoppingCart onClick={() => navigate("/cart")} />
          {context.cart.length > 0 ? <p>{context.cart.length}</p> : ""}
        </div>
        <h1>MyMarket</h1>
        <BiExit onClick={logOut}/>
      </Header>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  font-family: "Ropa Sans";
  background-color: #AA2840;
  width: 100%;
  height: 10vh;
  color: white;
  div{
    width: fit-content;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg:first-child {
    color: white;
    font-size: 40px;
    margin-left: 15px;
    }
    p{
      position: absolute;
      right: -5px;
      top: 0;
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: blue;
      font-size: 15px;
      font-family: "Arial";
      font-weight: 700;
    }
  }
  & > svg:last-child {
    margin-right: 15px;
    color: white;
    font-size: 40px;
  }
`;