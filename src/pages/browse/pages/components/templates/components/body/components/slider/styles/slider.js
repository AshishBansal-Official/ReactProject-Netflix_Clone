import styled from "styled-components/macro";

export const SliderWrapper = styled.div`
    margin-top: 40px;
    padding: 0 3%;
`;

export const SliderTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    margin: 15px 0px 10px;
`;

export const SliderContainer = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
`;

export const SliderLeftButton = styled.button`
    display: ${({ show }) => (show ? "flex" : "none")};
    align-items: center;
    background-color: transparent;
    border: none;
    height: 100%;
    padding: 0;
    position: absolute;
    top: -15px;
    z-index: 3;
    left: -30px;

    @media (max-width: 1023px) {
        display: none;
    }

    img {
        cursor: pointer;
        width: 30px;
    }
    span {
        background-image: linear-gradient(
            90deg,
            hsla(0, 0%, 9%, 0.01) 30%,
            hsla(0, 0%, 9%, 0)
        );
        height: 100%;
        position: relative;
        right: 10px;
        width: 100px;
        z-index: -1;
    }
`;

export const SliderList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 16px 0;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */

    ::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
    }
`;

export const SliderListItem = styled.li`
    max-width: 299px;
    list-style-type: none;
    margin-right: 12px;
    flex: 1 0 auto;

    @media (max-width: 1919px) {
        width: 22vw;
    }

    @media (max-width: 1439px) {
        width: 28vw;
    }
    @media (max-width: 1023px) {
        width: 40vw;
    }

    a {
        width: 100%;
        text-decoration: none;
        color: #fff;
        background-color: transparent;
        cursor: pointer;

        div {
            max-height: 168px;
            background-color: #333;
            background-image: ${({ image }) => (image ? `url(${image})` : "")};
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            aspect-ratio: 16/9;
        }

        span {
            font-size: 16px;
            display: block;
            text-align: center;
            margin-top: 2px;
            @media (max-width: 599px) {
                font-size: 13px;
            }
        }
    }
`;

export const SliderRightButton = styled.button`
    display: ${({ show }) => (show ? "flex" : "none")};
    align-items: center;
    background-color: transparent;
    border: none;
    height: 100%;
    padding: 0;
    position: absolute;
    right: -30px;
    color: #e50914;
    top: -15px;
    z-index: 3;

    @media (max-width: 1023px) {
        display: none;
    }

    img {
        cursor: pointer;
        right: -100px;
        transform: rotate(180deg);
    }
    span {
        background-image: linear-gradient(
            90deg,
            hsla(0, 0%, 9%, 0.01) 30%,
            hsla(0, 0%, 9%, 0)
        );
        height: 100%;
        position: relative;
        right: 10px;
        width: 100px;
        z-index: -1;
    }
`;
