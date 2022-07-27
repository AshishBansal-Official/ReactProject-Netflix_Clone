import styled from "styled-components/macro";

export const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    min-width: 100%;
    position: relative;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("../../images/home/bg.jpg");
    background-size: cover;
    position: absolute;
`;
export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 0,
        transparent 60%,
        rgba(0, 0, 0, 0.4)
    );
    position: absolute;
`;

export const Content = styled.div`
    width: 100%;
    min-height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    @media (max-width: 740px) {
        background-color: rgb(0, 0, 0);
    }
`;
