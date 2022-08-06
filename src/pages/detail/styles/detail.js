import styled from "styled-components/macro";

export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.85);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 50;
`;

export const VideoContainer = styled.div`
    cursor: default;
    max-width: 45%;
    width: 100%;
    min-width: 300px;
    max-height: 60vh;
    aspect-ratio: 16/9;

    iframe {
        height: 100%;
        width: 100%;
        background-color: #333;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 10px;
`;

export const Title = styled.div`
    flex-grow: 1;
    font-size: 20px;
    margin: 0;
    padding-left: 1em;
    border-left: 3px solid var(--color-primary-red);
    font-weight: 700;

    @media (max-width: 1919px) {
        font-size: 20px;
    }
    @media (max-width: 1439px) {
        font-size: 18px;
    }
    @media (max-width: 1023px) {
        font-size: 16px;
    }
    @media (max-width: 599px) {
        font-size: 14px;
    }
`;

export const CloseIcon = styled.div`
    cursor: pointer;
    padding-left: 10px;
    svg {
        height: 24px;
        width: 24px;
        @media (max-width: 1023px) {
            height: 22px;
            width: 22px;
        }
        @media (max-width: 599px) {
            height: 20px;
            width: 20px;
        }
    }
`;
