import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #181818;
    color: #fff;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Body = styled.div`
    background: #181818;
    margin: 0 auto;
    max-width: 1600px;
    padding: 56px 5vw 25px;
    line-height: 1.4;
    overflow-x: hidden;
    @media (max-width: 599px) {
        padding: 5px 5vw 20px;
    }
`;

export const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 1600px;
    padding: 25px 0px;
    position: relative;
`;

export const SectionHeader = styled.div`
    h1.section_header {
        color: #fff;
        font-size: 30px;
        font-weight: 400;
        line-height: 34px;
        display: inline-block;
    }
    
    h2.section_subheader {
        color: #a3a3a3;
        white-space: nowrap;
        border-left: 1px solid #a3a3a3;
        margin-left: 9px;
        padding-left: 15px;
        font-size: 20px;
        font-weight: 500;
        line-height: 27px;
        display: inline-block;
    }
`;