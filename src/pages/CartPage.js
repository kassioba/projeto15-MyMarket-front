/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import { useContext, useEffect } from "react"
import Context from "../Context"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function CartPage() {
    const context = useContext(Context)
    const navigate = useNavigate()

    function calculateTotal() {
        let newTotal = 0

        for(let i = 0; i < context.cart.length; i++) {
            newTotal += context.cart[i].product.price * context.cart[i].units
        }

        context.setTotal(newTotal)
    }

    const newOrder = {
        products: context.cart,
        customerId: context.userId,
        finalPrice: context.total,
    }

    const config = {
        headers: {
          Authorization: `Bearer ${context.token}`,
        }
    }

    function goCheckOut() {
        const promise = axios.post(`${context.url}cart`, newOrder, config)
        
        promise
            .then(() => {
                navigate("/checkout")
                localStorage.removeItem("cart")
            })
            .catch((err) => console.log(err))
    }
    
    function deleteCartProduct(productId) {
        const updatedCart = context.cart.filter(item => item.product._id !== productId)
        context.setCart(updatedCart, () => calculateTotal())
        const updatedCartJSON = JSON.stringify(updatedCart)
        localStorage.setItem("cart", updatedCartJSON)

        calculateTotal()
      }

    useEffect(() => {
        calculateTotal()
    }, [context.cart])
  
    return (
      <>
        <HeaderComponent />
        <CartContainer>
            <CartBoard>
            {context.cart.length > 0 ? (
                <>
                    <ul>
                        {context.cart.map(p => (
                            <CartCard key={p.product._id}>
                                <img alt="Foto do Produto" src={p.product.image} />
                                <div>
                                    <section>
                                        <main>
                                            <h2>{p.product.name}</h2>
                                            <h3>
                                            ({p.units > 1 ? `${p.units} Unidades` : `${p.units} Unidade`}) - {p.product.description}
                                            </h3>
                                        </main>
                                        <div>
                                            <h4>
                                                {(p.product.price * p.units)
                                                .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                                            </h4>
                                        </div>
                                    </section>
                                    <button onClick={() => deleteCartProduct(p.product._id)}>remover do carrinho</button>
                                </div>
                            </CartCard>
                        ))}
                    </ul>
                    <TotalContainer>
                    <p>TOTAL</p>
                    <p>{context.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    </TotalContainer>
                </>
            ) : <p>Seu carrinho está vazio!</p>}
            </CartBoard>
            <ButtonClosePurchase
            disabled={context.cart.length > 0 ? false : true}
            onClick={goCheckOut}>
                Prosseguir para Pagamento
            </ButtonClosePurchase>
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
display: flex;
flex-direction: column;
align-items: center;
p{
    font-family: 'Ropa Sans';
    font-size: 25px;
}
ul{
    width: 100%;
    height: calc(100% - 25px);
    overflow-y: auto;
}
`

const CartCard = styled.li`
  height: fit-content;
  width: auto;
  background-color: rgba(224, 19, 57, 0.23);
  border-radius: 4px;
  padding: 10px;
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
            font-family: 'Ropa Sans';
        }
        h3{
            font-size: 13px;
            margin-top: 5px;
            font-family: 'Ropa Sans';
        }
      }
    }
    button{
        background: none;
        text-align: right;
        color: #600818;
        font-family: 'Ropa Sans';
        border-radius: 1px;
        font-size: 15px;
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

const TotalContainer = styled.div`
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