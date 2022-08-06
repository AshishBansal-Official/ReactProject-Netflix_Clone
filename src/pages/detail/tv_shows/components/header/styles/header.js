import styled from "styled-components/macro";

export const HeaderContainer = styled.div`
    background-image: ${({ img }) => (img ? `url(${img})` : ``)};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 5vw;
    min-height: min-content;
    margin-bottom: 20px;
    position: relative;
    z-index: 0;

    ::after {
        background: linear-gradient(
            0deg,
            #181818 0,
            hsla(0, 0%, 9%, 0.987) 1.62%,
            hsla(0, 0%, 9%, 0.951) 3.1%,
            hsla(0, 0%, 9%, 0.896) 4.5%,
            hsla(0, 0%, 9%, 0.825) 5.8%,
            hsla(0, 0%, 9%, 0.741) 7.06%,
            hsla(0, 0%, 9%, 0.648) 8.24%,
            hsla(0, 0%, 9%, 0.55) 9.42%,
            hsla(0, 0%, 9%, 0.45) 10.58%,
            hsla(0, 0%, 9%, 0.352) 11.76%,
            hsla(0, 0%, 9%, 0.259) 12.94%,
            hsla(0, 0%, 9%, 0.175) 14.2%,
            hsla(0, 0%, 9%, 0.104) 15.5%,
            hsla(0, 0%, 9%, 0.049) 16.9%,
            hsla(0, 0%, 9%, 0.013) 18.38%,
            hsla(0, 0%, 9%, 0) 20%
        );
        content: "";
        height: 100%;
        width: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
        z-index: 1;
    }
`;

export const InfoWrapper = styled.div`
    height: 100%;
    width: 40%;
    padding: 60px;
    padding-left: 5vw;
    max-width: 800px;
    min-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
        90deg,
        #181818 10%,
        hsla(0, 0%, 9%, 0.98) 20%,
        hsla(0, 0%, 9%, 0.97) 25%,
        hsla(0, 0%, 9%, 0.95) 35%,
        hsla(0, 0%, 9%, 0.94) 40%,
        hsla(0, 0%, 9%, 0.92) 45%,
        hsla(0, 0%, 9%, 0.9) 50%,
        hsla(0, 0%, 9%, 0.87) 55%,
        hsla(0, 0%, 9%, 0.82) 60%,
        hsla(0, 0%, 9%, 0.75) 65%,
        hsla(0, 0%, 9%, 0.63) 70%,
        hsla(0, 0%, 9%, 0.45) 75%,
        hsla(0, 0%, 9%, 0.27) 80%,
        hsla(0, 0%, 9%, 0.15) 85%,
        hsla(0, 0%, 9%, 0.08) 90%,
        hsla(0, 0%, 9%, 0.03) 95%,
        hsla(0, 0%, 9%, 0)
    );
`;

export const InfoContainer = styled.div`
    height: 100%;
    div.posterContainer {
        max-width: 100%;
        max-height: 100px;
        position: relative;
        margin-bottom: 20px;
        object-fit: contain;

        img {
            max-height: 100px;
            height: 100%;
            width: 100%;
            display: block;
            margin: auto;
        }
    }
    h1 {
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
    }

    div#details {
        margin-top: 16px;
        color: #a3a3a3;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
    }

    div#overview {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        max-width: 100%;
        padding-top: 16px;
    }
`;
