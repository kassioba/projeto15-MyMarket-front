import styled from "styled-components"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function HomePage() {
  
  return (
    <>
      <HeaderComponent />
        <ProductsContainer>
            <ProductCard>
                <img alt="Foto do Produto" src="https://samsclub.vtexassets.com/arquivos/ids/165434/arroz-branco-namorado-pacote-5kg-7896079431158.jpg?v=637619573420100000" />
                <h2>Product Name</h2>
                <h3>Product Description</h3>
                <h4>R$ 10,00</h4>
                <h5>ver detalhes</h5>
                <div />
                <button>
                    Adicionar ao Carrinho
                    <AiOutlineShoppingCart />
                </button>
            </ProductCard>
        </ProductsContainer>
      <FooterComponent />
      </>
  );
}

const ProductsContainer = styled.div`
width: 100%;
max-height: 80vh;
overflow-y: auto;
display: flex;
flex-direction: wrap;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 15px;
padding: 10px;
`
const ProductCard = styled.div`
height: fit-content;
width: 150px;
background-color: #FFFFFF;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
border-radius: 6px;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
font-family: 'Ropa Sans';
font-style: normal;
font-weight: 400;
color: #600818;
img{
    max-width: 150px;
    max-height: 140px;
    height:auto;
    border-radius: 4px;
}
h2, h3, h4, h5, button{
    width: 100%;
    margin-top: 3px;
}

h2{
    font-size: 15px;
    text-align: left;
}
h3{
    font-size: 13px;
    text-align: left;
}
h4{
    font-size: 16px;
    text-align: left;
}
h5{
    font-size: 13px;
    text-align: right;
    border-bottom: 1px solid #600818;
    margin-top: 5px;
}
button{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    & > svg:last-child{
        font-size: 18px;
    }
    font-family: 'Ropa Sans';
    font-style: normal;
    font-weight: 400;
    color: #600818;
}
`