import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 30px;
    justify-content: space-evenly;
    grid-column-gap: 12px;
    margin-top: 10px;

    @media (max-width: 1919px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1439px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    @media (max-width: 599px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
    }
`;

export const SimilarContainer = styled.div`
    background: #333 ${({ imageUrl }) => `url(${imageUrl})`} no-repeat center;
    background-size: cover;
    width: 100%;
    aspect-ratio: 16/9;
    cursor: pointer;
    position: relative;

    span {
        position: absolute;
        bottom: 2px;
        left: 10px;
        right: 0;
        word-wrap: break-word;
        color: #fff;
        text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
        font-weight: 600;
        z-index: 5;
    }
    span.list_gradient {
        background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5) 5%,
            transparent 95%
        );
        bottom: 0px;
        height: 55px;
        left: 0;
        position: absolute;
        right: -0.5px;
        z-index: 3;
    }
`;
