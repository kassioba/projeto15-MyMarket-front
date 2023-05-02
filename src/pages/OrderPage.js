import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import Context from "../Context"


export default function OrderPage(){
    const [order, setOrder] = useState([])
    const context = useContext(Context)
    const params = useParams()
    const token = localStorage.getItem('token')
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
       axios.get(`https://mymarket.onrender.com/orders/${params.OrderId}`, config)
       .then(res => setOrder(res.data))
       .catch(err => console.log(err))
    }, [])

    console.log(order)


    return (
        <>
        <HeaderComponent/>
            <PageContainer>
                <OrderContainer>
                    <span className="id">ID do pedido: {params.OrderId}</span>
                    <span className="date">Pedido feito em {order[0]?.date}</span>
                    <div className="itens-container">
                    {order[0]?.products.map(item => (
                        <div className="item">
                            <img src={item.product.image} alt='' />
                            <div className="infos-item">
                                <div>{item.product.name}</div>
                                <div>{item.product.description}</div>
                                <div>Valor: R$ {item.product.price.toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                    </div>
                </OrderContainer>
            </PageContainer>
        <FooterComponent/>
        </>
    )
}

const PageContainer = styled.div`
    width: 100vw;
    height: 533px;
    display: flex;
    justify-content: center;
    align-items: center;

    .itens-container{
        width: 100%;
        height: 400px;
        margin-top: 20px;
        overflow: scroll;
    }

    .item{
        height: 100px;
        width: 100%;
        border: 1px solid #E013393B;
        padding-left: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        :not(:first-child){
            margin-top: 20px;
        }

        img{
            height: 100px;
            width: 80px;
        }
    }

    .infos-item{
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-left: 10px;
        padding-right: 5px;
        box-sizing: border-box;
    }
`

const OrderContainer = styled.div`
    height: 450px;
    width: 87vw;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    box-sizing: border-box;

    .id{
        font-size: 20px;
        text-align: center;
    }

    .date{
        font-size: 20px;
        margin-top: 10px;
    }
`