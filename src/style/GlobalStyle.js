import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body{
    background-color: #F2F2F2;
}
div {
    box-sizing: border-box;
}
button {
	appearance: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
}
input {
	appearance: none;
    border: none;
    outline: none;
}
`

export default GlobalStyle