import styled from "styled-components/macro";

export const Container = styled.div`
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
    background-color: ${({ showSolidBackground }) =>
        showSolidBackground ? "rgb(20, 20, 20)" : "transparent"};
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7) 10%,
        transparent
    );
    display: flex;
    height: ${({ height }) => height};
    justify-content: space-between;
    align-items: center;
    padding: 0px 3%;
    cursor: pointer;
    transition: background-color 0.4s;
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

export const NavLink = styled.div`
    display: inline-block;
    margin-left: 20px;
    cursor: pointer;
    color: white;

    @media (max-width: 700px) {
        margin-left: 10px;
    }

    a {
        color: ${({ selected }) => (selected ? "#fff" : "#e5e5e5")};
        font-size: 13px;
        font-weight: ${({ selected }) => (selected ? "700" : "")};
        text-decoration: none;
        transition: color 0.4s;

        @media screen and (min-width: 1200px) {
            font-size: 14px;
        }

        :hover {
            color: ${({ selected }) => (selected ? "#fff" : "#b3b3b3")};
        }
    }
`;

export const RightPane = styled.div`
    span {
        font-size: 13px;
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

        @media (max-width: 600px) {
            padding: 9px 10px;
        }

        :disabled {
            opacity: 0.8;
        }

        span {
            div.indicator {
                height: 15px;
                width: 15px;
                background-image: url(https://assets.nflxext.com/ffe/siteui/common/site-spinner-240.png);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 50%;
                box-shadow: inset 2px 2px 0 #fff;
                animation: full-rotation 1s linear infinite;
                animation-direction: normal;
                display: inline-block;
                margin: 0 auto;
                opacity: 1;

                @keyframes full-rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(1turn);
                    }
                }
            }
        }
    }
`;
