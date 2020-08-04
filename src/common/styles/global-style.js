import { createGlobalStyle } from "styled-components"
import CovidImg from "../../assets/images/covid.png"

const GlobalStyle = createGlobalStyle`
* {outline: none;
box-sizing: border-box;}

body{
    line-height: normal;
}
html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;

}
#root {
    background: url(${CovidImg});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;

}
.mb-2 {
    margin-bottom: 16px;
}
.mt-2 {
    margin-top: 16px;
}
.cursor {
    cursor: pointer;
}
`

export default GlobalStyle
