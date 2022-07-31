import styled from "styled-components/macro";

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("/images/bg-lost-in-space.png");
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 0;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 56px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        border: 0;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        opacity: 1;
        padding: 0.8rem 2rem;
        font-size: 18px;
        z-index: 1;

        :hover {
            background-color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 1919px) {
            font-size: 18px;
        }
        @media (max-width: 1439px) {
            font-size: 17px;
        }
        @media (max-width: 1023px) {
            font-size: 16px;
        }
        @media (max-width: 599px) {
            font-size: 14px;
            padding: 0.6rem 1.4rem;
        }
    }

    span {
        margin-top: 20px;
        font-weight: 100;
        font-size: 2rem;
        border-left: 2px solid var(--color-primary-red);
        padding: 0.8vw 1vw;
        z-index: 1;
        @media (max-width: 1919px) {
            font-size: 1.8rem;
        }
        @media (max-width: 1439px) {
            font-size: 1.6rem;
        }
        @media (max-width: 1023px) {
            font-size: 1.35rem;
        }
        @media (max-width: 599px) {
            font-size: 1.25rem;
        }
        strong {
            font-size: 2rem;
            @media (max-width: 1919px) {
                font-size: 1.8rem;
            }
            @media (max-width: 1439px) {
                font-size: 1.6rem;
            }
            @media (max-width: 1023px) {
                font-size: 1.35rem;
            }
            @media (max-width: 599px) {
                font-size: 1.25rem;
            }
        }
    }

    ::before {
        background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.4) 0,
            rgba(0, 0, 0, 0.2) 45%,
            rgba(0, 0, 0, 0.1) 55%,
            transparent 70%
        );
        bottom: -10vw;
        content: "";
        left: 10vw;
        position: absolute;
        right: 10vw;
        top: -10vw;
        z-index: 0;
    }
`;

export const Header = styled.div`
    margin-bottom: 20px;
    font-size: 5rem;
    font-weight: 700;
    text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
    z-index: 1;
    @media (max-width: 1919px) {
        font-size: 4rem;
    }
    @media (max-width: 1439px) {
        font-size: 3rem;
    }
    @media (max-width: 1023px) {
        font-size: 2.5rem;
    }
    @media (max-width: 599px) {
        font-size: 2rem;
    }
`;

export const SubHeader = styled.div`
    padding-bottom: 20px;
    width: 50vw;
    font-size: 1.9rem;
    font-weight: 300;
    text-align: center;
    text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
    z-index: 1;
    @media (max-width: 1919px) {
        font-size: 1.8rem;
    }
    @media (max-width: 1439px) {
        font-size: 1.6rem;
    }
    @media (max-width: 1023px) {
        font-size: 1.35rem;
    }
    @media (max-width: 599px) {
        font-size: 1.25rem;
    }
`;

export const BottomText = styled.div`
    bottom: 0;
    color: hsla(0, 0%, 90%, 0.57);
    font-weight: 100;
    letter-spacing: 0.1em;
    line-height: 1.5vw;
    margin: 2.5vw 4.8vw;
    position: fixed;
    right: 0;
    text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
    strong {
        color: hsla(0, 0%, 90%, 0.77);
    }
`;
