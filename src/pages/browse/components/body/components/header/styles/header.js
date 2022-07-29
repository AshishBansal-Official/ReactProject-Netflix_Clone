import styled from "styled-components/macro";

export const HeadingContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    padding: 0 3%;
    transition-delay: 1s;
    transition-duration: 0.75s;
    margin-top: 4vw;
    box-sizing: content-box;
    @media (min-width: 600px) {
        max-width: 598px;
    }
`;

export const Title = styled.div`
    font-size: 3.25rem;
    font-weight: 900;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 40%);
    margin: 0 0 0.2em;
`;

export const SubTitle = styled.div`
    font-size: 19px;
    margin-top: 0.1vw;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 60%);
    transition-delay: 0s;
    transition-duration: 0.75s;
    width: 100%;
`;
