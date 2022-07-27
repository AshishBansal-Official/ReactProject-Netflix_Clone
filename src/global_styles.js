import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Netflix Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
        scroll-behavior: smooth;
    }

    :root {
        --color-primary-red: #e50914;
    }

    html, body {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #ffffff;
    }

    
`;
