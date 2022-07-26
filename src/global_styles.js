import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    :root {
        --color-primary-red: #e50914;
    }

    html, body {
        height: 100%;
        font-family: 'Netflix Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #ffffff;
    }

    @font-face{
        font-family:"Netflix Sans";
        font-weight:100;
        src:url("fonts/NetflixSans_Th.woff2") format("woff2"),
    }
    @font-face{
        font-family:"Netflix Sans";
        font-weight:300;
        src:url("fonts/NetflixSans_Lt.woff2") format("woff2"),
    }
    @font-face{
        font-family:"Netflix Sans";
        font-weight:400;
        src:url("fonts/NetflixSans_Rg.woff2") format("woff2"),
    }
    @font-face{
        font-family:"Netflix Sans";
        font-weight:700;
        src:url("fonts/NetflixSans_Md.woff2") format("woff2"),
    }
    @font-face{
        font-family:"Netflix Sans";
        font-weight:800;
        src:url("fonts/NetflixSans_Bd.woff2") format("woff2"),
    }
    @font-face{
        font-family:"Netflix Sans";
        font-weight:900;
        src:url("fonts/NetflixSans_Blk.woff2") format("woff2"),
    }
`;
