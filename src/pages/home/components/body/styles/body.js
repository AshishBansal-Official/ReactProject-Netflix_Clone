import styled from "styled-components/macro";

export const Container = styled.div`
    width: 100%;
    padding: 70px 45px;
    border-bottom: 8px solid #222;
`;

export const BodyTile = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    @media (max-width: 950px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const LeftPane = styled.div`
    margin-right: ${({ reverse }) => (reverse ? "0px" : "48px")};
    margin-left: ${({ reverse }) => (reverse ? "48px" : "0px")};
    width: ${({ reverse }) => (reverse ? "100%" : "100%")};
    height: 100%;
    @media (max-width: 950px) {
        margin-right: 0px;
        margin-left: 0px;
    }
`;

export const RightPane = styled.div`
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
    font-size: 3.2rem;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.1;
    @media (max-width: 950px) {
        font-size: 2.5rem;
    }
    @media (max-width: 550px) {
        font-size: 1.8rem;
    }
`;

export const SubTitle = styled.div`
    font-size: 1.7rem;
    font-weight: 300;
    @media (max-width: 950px) {
        font-size: 1.3rem;
    }
    @media (max-width: 550px) {
        font-size: 1.15rem;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    margin-top: -10%;
    margin-bottom: -5%;

    img {
        width: 100%;
        height: 100%;
    }

    video.tv {
        position: absolute;
        max-height: 55%;
        left: 13%;
        top: 20.5%;
        z-index: -1;
    }

    video.imac {
        position: absolute;
        max-height: 45%;
        left: 20%;
        top: 8%;
        z-index: -1;
    }

    @media (max-width: 950px) {
        margin-top: 0%;
        margin-bottom: 0%;
    }
`;

export const ImageContainerBanner = styled.div`
    position: absolute;
    max-height: 200px;
    min-width: 15em;
    width: 70%;
    left: 15%;
    bottom: 8%;
    background: #000;
    padding: 8px 12px;
    border: 2px solid hsla(0, 0%, 100%, 0.25);
    box-shadow: 0 0 2em 0 #000;
    border-radius: 0.75em;

    display: flex;
    align-items: center;
    justify-content: start;

    img {
        width: 18%;
        height: 20%;
        object-fit: contain;
    }

    div {
        margin-left: 10px;
    }

    span:first-child {
        font-size: 1em;
        font-weight: 400;
    }

    span:nth-child(2) {
        font-size: 0.9em;
        color: #0071eb;
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

    @media (max-width: 550px) {
        padding-left: 45px;
        padding-right: 45px;
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
        }

        img {
            filter: brightness(0) invert(1);
            width: 12px;
        }
    }
`;

export const FAQContainer = styled.div`
    width: 100%;
    padding: 70px 45px;
    border-bottom: 8px solid #222;

    @media (max-width: 550px) {
        padding: 70px 0px;
    }
`;

export const FAQList = styled.div`
    margin: 20px auto;
    max-width: 815px;
    width: 90%;

    @media (max-width: 550px) {
        width: 100%;
    }
`;

export const FAQTile = styled.div`
    margin-bottom: 10px;
`;

export const Item = styled.div`
    color: white;
    margin: auto;
    margin-bottom: 10px;
    max-width: 728px;
    width: 100%;

    &:first-of-type {
        margin-top: 3em;
    }
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const FAQHeader = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        user-select: none;

        @media (max-width: 600px) {
            width: 18px;
        }
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const FAQBody = styled.div`
    font-weight: normal;
    line-height: normal;
    background: #303030;
    white-space: pre-wrap;
    user-select: none;
    overflow: hidden;
    text-align: start;

    &.closed {
        max-height: 0;
        overflow: hidden;
        transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }
    &.open {
        max-height: 1200px;
        transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    span {
        display: block;
        font-size: 26px;
        padding: 40px 20px;
        @media (max-width: 600px) {
            padding: 20px;
            font-size: 18px;
            line-height: 22px;
        }
    }
`;
