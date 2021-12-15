import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
   html, body {
        display: flex;
        background-color: #F9F9F9;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        overscroll-behavior: none;
    }
`;

export default GlobalStyle;