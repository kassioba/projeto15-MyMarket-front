/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import { AiOutlineShoppingCart } from "react-icons/ai"
import axios from "axios"
import { useContext, useEffect } from "react"
import Context from "../Context"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate()
    const context = useContext(Context)

    function getProducts() {
        const promise = axios.get(`${context.url}home`)
        promise
            .then(res => context.setProducts(res.data))
            .catch(err => console.log(err))
    }

    function addToCart(product) {
        if (!context.token) {
            navigate("/")
            return alert("Entre com seu e-mail e senha!")
        }
        const existingProductIndex = context.cart.findIndex((item) => item.product._id === product._id)
        
        if (existingProductIndex === -1) {
            const updatedCart = [...context.cart, { product: JSON.parse(JSON.stringify(product)), units: 1 }]
            context.setCart(updatedCart)
            const updatedCartJSON = JSON.stringify(updatedCart)
            localStorage.setItem("cart", updatedCartJSON)
        } else {
            const updatedCart = [...context.cart]
            updatedCart[existingProductIndex].units += 1
            context.setCart(updatedCart)
            const updatedCartJSON = JSON.stringify(updatedCart)
            localStorage.setItem("cart", updatedCartJSON)
        }
    }
    
    function calculateTotal() {
        let newTotal = 0

        for(let i = 0; i < context.cart.length; i++) {
            newTotal += context.cart[i].product.price * context.cart[i].units
        }

        context.setTotal(newTotal)
    }

    useEffect(() => {
        getProducts()
        calculateTotal()
    }, [])
  
  return (
    <>
      <HeaderComponent />
        <ProductsContainer>
            {context.products.map(p => (
            <ProductCard key={p._id}>
                <img alt="Foto do Produto" src={p.image} />
                <h2>{p.name}</h2>
                <h3>{p.description}</h3>
                <h4>{p.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h4>
                <h5> </h5>
                <button onClick={() => addToCart(p)}>
                    Adicionar ao Carrinho
                    <AiOutlineShoppingCart />
                </button>
            </ProductCard>
            ))}
        </ProductsContainer>
      <FooterComponent />
      </>
  )
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
gap: 20px;
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