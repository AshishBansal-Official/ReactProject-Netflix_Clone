import styled from "styled-components/macro";
export const Container = styled.div`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-color: white;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    border-bottom: 1px solid #e6e6e6;

    a {
        margin: "0 3%";
        text-decoration: none;
        color: #333;
        font-size: 19px;
        font-weight: 700;

        &:hover {
            text-decoration: underline !important;
        }
    }
`;
