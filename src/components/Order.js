import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Order({order}){
    const navigate = useNavigate()

    return (
        <OrderContainer onClick={() => navigate(`/orders/${order._id}`)}>
            <img src={order.products[0].product.image} alt=""/>       
            <div>
                <span className="texto">Pedido realizado em {order.date}</span>
                <span className="texto">Total: R$ {order.finalPrice.toFixed(2)}</span>
            </div>
        </OrderContainer>
    )
}

const OrderContainer = styled.div`
width: 100%;
height: 90px;
background-color: #ffffff;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-around;
cursor: pointer;

.texto{
    font-size: 16px;
    letter-spacing: 0em;
    color: #000;
}

div{
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
img{
    height: 70px;
    width: 60px;
}

:not(:first-child){
    margin-top: 20px;
}
`