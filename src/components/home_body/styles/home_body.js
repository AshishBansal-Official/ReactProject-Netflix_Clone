import styled from "styled-components/macro";

export const HomeBodyContainer = styled.div`
    border-bottom: 8px solid #222;
`;

export const HomeBodyTile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0;
    margin: 1rem 12rem;
    margin-bottom: 3rem;
`;

export const LeftPane = styled.div`
    margin-right: 6rem;
    width: 50%;

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1.7rem;
        font-weight: 200;
    }
`;

export const RightPane = styled.div`
    object-fit: contain;
    width: 50%;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    video {
        z-index: 2;
        background-color: red;
        position: absolute;
        top: 13.5%;
        transform: scale(0.78);
        left: 3.5%;
    }
`;
