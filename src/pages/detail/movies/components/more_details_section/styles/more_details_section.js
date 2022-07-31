import styled from "styled-components/macro";

export const MoreDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 6px;
    justify-content: space-evenly;

    @media (max-width: 1919px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1439px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 599px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const MoreDetailsHeader = styled.div`
    color: #a3a3a3;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 5px;
`;

export const MoreDetailsContent = styled.div`
    color: #fff;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
`;
