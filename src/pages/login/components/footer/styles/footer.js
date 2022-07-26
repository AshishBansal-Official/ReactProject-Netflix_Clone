import styled from "styled-components/macro";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border-top: 1px solid #757575;
    display: flex;
    justify-content: center;
    padding: 30px 0 60px;
    @media (max-width: 740px) {
        padding: 30px 30px 60px;
    }
`;

export const Container = styled.div`
    color: #737373;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span {
        font-size: 13px;
        margin-top: 24px;
    }
`;

export const FooterTitle = styled.div`
    margin-bottom: 30px;
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    a {
        font-size: 13px;
        text-decoration: none;
        color: #737373;
        display: inline-block;
        min-width: 150px;
        width: 25%;
        padding: 0 12px 0 0;
        margin-bottom: 16px;
        vertical-align: top;
    }
`;

export const LangSelector = styled.select`
    color: #737373;
    margin-right: 40px;
    margin-top: 20px;
    padding: 10px 30px 10px 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='%23737373' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;
`;