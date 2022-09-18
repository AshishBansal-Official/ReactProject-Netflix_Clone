import styled from "styled-components/macro";

export const Container = styled.div`
    margin: auto;
    padding: 20px 10px;
    color: black;

    button {
        padding: 20px 10px;
        width: 100%;
        margin-top: 20px;
        font-size: 22px;
        background-color: var(--color-primary-red);
        border: 0;
        color: white;
        border-radius: 4px;
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

export const InputField = styled.input`
    padding: 10px;
    width: 100%;
    margin-top: 20px;
    flex: 1;
    border: 1px solid black;
    outline: none;
    outline-width: 0;
    border-radius: 2px;
    min-height: 50px;

    @media (max-width: 950px) {
        border-radius: 2px;
    }

    @media (max-width: 748px) {
        min-height: 50px;
        font-size: 14px;
    }
`;
