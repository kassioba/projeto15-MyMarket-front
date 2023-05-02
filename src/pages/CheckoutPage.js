import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Context from '../Context'

export default function CheckOutPage(){
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [complement, setComplement] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [payment, setPayment] = useState('')
    const navigate = useNavigate()

    const context = useContext(Context)

    console.log(context.cart)

    function finishOrder(e){
        e.preventDefault()

        if(!name || !address || !complement || !zipCode || !payment) return alert('Por favor, preencha todos os campos.')

        alert('Pedido realizado com sucesso!')
        localStorage.setItem('cart', '')
        context.setCart('')
        navigate('/home')
    }

    return (
        <>
        <HeaderComponent/>
        <PageContainer onSubmit={finishOrder}>
            
            <ContentContainer>
            <InfosUser>
                <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Nome completo'/>
                <input value={address} onChange={e => setAddress(e.target.value)} type='text' placeholder='Endereço'/>
                <input value={complement} onChange={e => setComplement(e.target.value)} type='text' placeholder='Complemento'/>
                <input value={zipCode} onChange={e => setZipCode(e.target.value)} type='text' placeholder='CEP'/>
                <select value={payment} onChange={e => setPayment(e.target.value)}>
                    <option value=''>Selecione a forma de pagamento</option>
                    <option value='Cartão de crédito'>Cartão de crédito</option>
                    <option value='Cartão de débito'>Cartão de débito</option>
                    <option value='Pix'>Pix</option>
                    <option value='Boleto'>Boleto</option>
                </select>
            </InfosUser>
            <SubmitButton type='submit'>Finalizar Pedido</SubmitButton>
            </ContentContainer>
        </PageContainer>
        <FooterComponent/>
        </>
    )
}

const PageContainer = styled.div`
height: 506PX  ;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

const ContentContainer = styled.form`
width: 87vw;
height: 450px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const InfosUser = styled.div`
width: 100%;
height: 350px;
background: #ffffff;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-around;
padding-left: 10px;
padding-right: 10px;
box-sizing: border-box;

input{
    height: 40px;
    outline: none;
    border: 1px solid #E013393B;
    border-radius: 5px;
    padding-left: 5px;
    box-sizing: border-box;
}

input::placeholder{
    color: #600818;
}

select{
    height: 40px;
    color: #777777;
    border: 1px solid #E013393B;
    outline: none;
    border-radius: 5px;
    color: #600818;
    padding-left: 5px;
    box-sizing: border-box;
}
`

const SubmitButton = styled.button`
width: 100%;
height: 46px;
background-color: #530715;
border: none;
border-radius: 5px;
font-size: 25px;
color: #ffffff;
cursor: pointer;
`