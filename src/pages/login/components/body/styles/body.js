import styled from "styled-components/macro";

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    justify-content: center;
    margin-bottom: 90px;
    @media (max-width: 740px) {
        margin-bottom: 30px;
        margin-top: 10px;
    }
`;

export const Container = styled.div`
    width: 100%;
    min-width: 250px;
    min-height: 660px;
    max-width: 450px;
    padding: 60px 68px 40px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin: 0;

    h1 {
        font-size: 2rem;
        margin-bottom: 28px;
    }

    @media (max-width: 740px) {
        padding: 0;
        max-width: 100%;
        width: 100%;
        min-height: 0px;
    }
`;

export const Form = styled.form`
    margin-bottom: 90px;
    button {
        color: white;
        background-color: var(--color-primary-red);
        width: 100%;
        font-size: 1rem;
        font-weight: 700;
        margin: 24px 0 12px;
        border-radius: 4px;
        padding: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        :disabled {
            opacity: 0.8;
        }

        span {
            div.indicator {
                height: 15px;
                width: 15px;
                background-image: url(https://assets.nflxext.com/ffe/siteui/common/site-spinner-240.png);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 50%;
                box-shadow: inset 2px 2px 0 #fff;
                animation: full-rotation 1s linear infinite;
                animation-direction: normal;
                display: inline-block;
                margin: 0 auto;
                opacity: 1;

                @keyframes full-rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(1turn);
                    }
                }
            }
        }
    }
`;

export const FormField = styled.input`
    width: 100%;
    background: #333;
    border-radius: 4px;
    height: 50px;
    border: 0;
    color: #fff;
    line-height: 50px;
    padding: 0 20px;
    outline: 0;
    margin-bottom: 16px;
`;
