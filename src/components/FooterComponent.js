import styled from "styled-components"
import { CiCirclePlus, CiClock2, CiHome } from "react-icons/ci"
import { useNavigate } from "react-router-dom";

export default function FooterComponent() {
    const navigate = useNavigate()
  
    return (
        <Footer>
            <CiCirclePlus />
            <CiHome onClick={() => navigate("/home")}/>
            <CiClock2 />
        </Footer>
    );
}

const Footer = styled.footer`
position: fixed;
width: 100%;
height: 10vh;
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #AA2840;
width: 100%;
height: 10vh;
color: white;
margin-top: 12vh;
& > svg:first-child {
margin-left: 10px;
color: white;
font-size: 40px;
}

& > svg:nth-child(2) {
color: white;
font-size: 40px;
}
& > svg:last-child {
margin-right: 10px;
color: white;
font-size: 40px;
}
`