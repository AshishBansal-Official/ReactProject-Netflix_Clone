import styled from "styled-components/macro";

export const Container = styled.div`
    width: 100%;
    border-bottom: 8px solid #222;
    position: relative;
    z-index: 0;

    @media (max-width: 550px) {
        height: 530px;
    }
`;

export const Background = styled.div`
    position: absolute;
    background: url("/images/home/bg.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -2;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0,
        transparent 60%,
        rgba(0, 0, 0, 0.8)
    );
    position: absolute;
    z-index: -1;
`;

export const Nav = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    background-color: transparent;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    @media (max-width: 1000px) {
        height: 80px;
    }
`;

export const Logo = styled.img`
    height: 45px;
    width: 167px;

    @media (max-width: 1449px) {
        height: 45px;
        width: 167px;
    }

    @media (max-width: 1000px) {
        height: 36px;
        width: 134px;
    }

    @media (max-width: 748px) {
        height: 32px;
        width: 108px;
    }

    @media (max-width: 550px) {
        height: 24px;
        width: 88px;
    }
`;

export const Pane = styled.div``;

export const LangSelector = styled.select`
    margin-right: 40px;
    color: white;
    margin-right: 40px;
    padding: 10px 20px 10px 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;

    @media (max-width: 550px) {
        margin-right: 20px;
        padding: 5px 20px 5px 10px;
    }
`;

export const SignInButton = styled.button`
    background-color: var(--color-primary-red);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 2px;
    cursor: pointer;

    @media (max-width: 550px) {
        padding: 5px 10px;
    }
`;

export const Content = styled.div`
    position: relative;
    height: calc(100% - var(--nav-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 150px 95px;

    @media (max-width: 550px) {
        padding: 50px 45px;
    }

    h1 {
        font-size: 4rem;
        @media (max-width: 1450px) {
            font-size: 3.2rem;
        }
        @media (max-width: 550px) {
            font-size: 2rem;
        }
    }

    h2 {
        font-size: 1.7rem;
        font-weight: 100;
        padding: 10px 0;

        @media (max-width: 550px) {
            font-size: 1.2rem;
        }
    }

    span {
        font-size: 1.2rem;
        margin: 20px 0;

        @media (max-width: 950px) {
            font-size: 1.5rem;
            margin: 10px 0 20px;
        }

        @media (max-width: 748px) {
            font-size: 1.2rem;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 740px;
    justify-content: center;
    align-items: center;

    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

export const InputField = styled.input`
    padding: 10px;
    width: 100%;
    flex: 1;
    min-height: 60px;
    border: none;
    outline: none;
    outline-width: 0;
    max-width: 500px;
    border-radius: 2px 0px 0px 2px;

    @media (max-width: 950px) {
        border-radius: 2px;
    }

    @media (max-width: 748px) {
        min-height: 50px;
        font-size: 14px;
    }
`;

export const GetStartedButton = styled.button`
    color: white;
    background-color: var(--color-primary-red);
    border: none;
    border-radius: 0px 2px 2px 0px;
    padding: 0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
        font-size: 2rem;
        margin-right: 10px;
        padding: 0;
    }

    img {
        filter: brightness(0) invert(1);
        width: 20px;
    }

    &:hover {
        background: #f40612;
    }

    @media (max-width: 950px) {
        border-radius: 2px;
        padding: 20px 20px;
        max-height: 30px;
        margin-top: 10px;

        span {
            font-size: 1rem;
            padding-top: 10px;
        }

        img {
            filter: brightness(0) invert(1);
            width: 12px;
        }
    }
`;
