import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate()
  
  return (
      <Header>
        <AiOutlineShoppingCart onClick={() => navigate("/cart")}/>
        <h1>MyMarket</h1>
        <BiExit />
      </Header>
  );
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
  & > svg:first-child {
    margin-left: 10px;
    color: white;
    font-size: 40px;
  }
  & > svg:last-child {
    margin-right: 10px;
    color: white;
    font-size: 40px;
  }
`;