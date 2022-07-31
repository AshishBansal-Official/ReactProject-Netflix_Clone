import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 30px;
    justify-content: space-evenly;
    grid-column-gap: 12px;
    margin-top: 10px;

    @media (max-width: 1919px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 1439px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1023px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }
    @media (max-width: 599px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }
    @media (max-width: 300px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const SimilarContainer = styled.img`
    width: 100%;
    aspect-ratio: 6/9;
    cursor: pointer;
`;
