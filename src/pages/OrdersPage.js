import styled from "styled-components"
import Order from "../components/Order"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Context from "../Context"

export default function OrdersPage(){
    const [orders, setOrders] = useState([])
    const context = useContext(Context)

    const token = localStorage.getItem('token')

    const config = {
        headers:{
            Authorization: `Bearer ${token || context.token}`
        }
    }

    useEffect(() => {
        axios.get(`${context.url}orders`, config)
        .then(res => setOrders(res.data.reverse()))
        .catch(err => console.log(err))
    }, [])

     
    return (
        <>
        <HeaderComponent/>
        <PageContainer>
            <span>SEUS PEDIDOS</span>
            <OrdersContainer> 
                {orders.map(order => (
                    <Order order={order}/>
                ))}
            </OrdersContainer>
        </PageContainer>
        <FooterComponent/>
        </>
    )
}

const PageContainer = styled.div`
height: 80vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Ropa Sans';

span{
    font-size: 20px;
    letter-spacing: 0.05em;
    color: #fff;
}
`

const OrdersContainer = styled.div`
width: 87vw;
height: 70vh;
border-radius: 5px;
padding-left: 10px;
padding-right: 10px;
box-sizing: border-box;
margin-top: 25px;
overflow: scroll;
`