import styled from "styled-components/macro";

export const Container = styled.div`
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
    background-color: #000;
    display: flex;
    height: ${({ height }) => height};
    justify-content: space-between;
    align-items: center;
    padding: 0px 3%;
    cursor: pointer;

    @media (max-width: 599px) {
        background-color: rgba(0, 0, 0, 0.75);
    }
`;

export const Logo = styled.div`
    .img_big {
        height: 40px;
        width: 110px;
    }
    .img_small {
        height: 30px;
        width: 22px;
        display: none;
    }

    @media (max-width: 600px) {
        .img_small {
            display: block;
        }
        .img_big {
            display: none;
        }
    }
`;

export const RightPane = styled.div`
    span {
        font-size: 13px;

        @media (max-width: 1022px) {
            display: none;
        }
    }

    button {
        margin-left: 8px;
        padding: 9px 20px;
        line-height: 15px;
        font-size: 13px;
        min-width: 112px;
        background-color: #e50914;
        background-image: linear-gradient(180deg, #e50914, #db0510);
        box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
        color: #fff;
        border: 0;
        border-radius: 2px;
        cursor: pointer;
    }

    a {
        border: 1px solid #888;
        border-radius: 2px;
        color: #fff;
        font-weight: 400;
        white-space: nowrap;
        font-size: 13px;
        margin: 0 0 0 8px;
        padding: 9px 20px;
        background-color: transparent;
        text-decoration: none;
    }
`;
