import styled from "styled-components"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"

export default function CartPage() {
  
    return (
      <>
        <HeaderComponent />
        <CartContainer>
            <CartBoard>
                <ul>
                    <CartCard>
                        <img alt="Foto do Produto" src="https://samsclub.vtexassets.com/arquivos/ids/165434/arroz-branco-namorado-pacote-5kg-7896079431158.jpg?v=637619573420100000" />
                        <div>
                            <section>
                                <main>
                                    <h2>Product Name</h2>
                                    <h3>Product Description</h3>
                                </main>
                                <div>
                                    <h4>R$ 10,00</h4>
                                </div>
                            </section>
                            <button> ver detalhes</button>
                        </div>
                    </CartCard>

                </ul>
                <BalanceContainer>
                <p>TOTAL</p>
                <p>R$ 25,00</p>
                </BalanceContainer>
            </CartBoard>
            <ButtonClosePurchase>Prosseguir para Pagamento</ButtonClosePurchase>
        </CartContainer>
        <FooterComponent />
        </>
    );
}

const CartContainer = styled.div`
width: 100%;
height: 80vh;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const CartBoard = styled.div`
width: 100%;
height: 70vh;
background-color: white;
border-radius: 4px;
padding: 10px;
position: relative;

ul{
    width: 100%;
    height: calc(100% - 25px);
    overflow-y: auto;
}
`

const CartCard = styled.li`
  height: 65px;
  width: auto;
  background-color: rgba(224, 19, 57, 0.23);
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  color: #600818;
  font-family: 'Ropa Sans';
  margin-bottom: 10px;

  img {
    max-width: 50px;
    max-height: 60px;
    height: auto;
    border-radius: 4px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;

    section {
        display: flex;
        flex-direction: row;
        width: 100%;
    div{
        width: 150px;
        text-align: right;
        font-size: 24px;
    }
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        h2{
            font-size: 15px;
        }
        h3{
            font-size: 13px;
            margin-top: 5px;
        }
      }
    }
    button{
        background: none;
        text-align: right;
        color: #600818;
        font-family: 'Ropa Sans';
        border-bottom: 1px solid #600818;
    }
  }
`

const ButtonClosePurchase = styled.button`
width: 100%;
height: 6vh;
border-radius: 4px;
background-color: #530715;
color: white;
font-family: 'Ropa Sans';
font-size: 25px;
`

const BalanceContainer = styled.div`
width: calc(100% - 20px);
height: 20px;

font-family: 'Ropa Sans';
font-style: normal;
font-weight: 400;
font-size: 25px;
display: flex;
justify-content: space-between;
position: absolute;
bottom: 10px;
`