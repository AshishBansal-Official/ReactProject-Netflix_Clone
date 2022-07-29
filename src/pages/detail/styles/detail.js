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
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    position: relative;
    width: 100%;
`;

export const HeaderContainerBottomBanner = styled.div`
    box-shadow: 8px 5px 16px 0 rgb(0 0 0 / 37%);
    margin-bottom: 32px;
    margin-top: -64px;
    position: relative;
    padding: 8px;
    align-items: center;
    background-image: linear-gradient(90deg, #333 5%, #181818 95%);
    display: flex;
    z-index: 2;

    img {
        flex: 0 0 21px;
        height: 38px;
        margin-left: 25px;
        padding: 0;
    }

    button {
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
        margin: 5px 25px 5px 1em;
        white-space: nowrap;
        cursor: pointer;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    min-width: 500px;
    padding: 16px 32px 64px 0;
    position: relative;
    width: 40%;
    z-index: 2;
`;

export const InfoContainer = styled.div`
    margin: 40px 0px 22px;

    div#poster {
        background-image: ${({ img }) => (img ? `url(${img})` : ``)};
        width: 90%;
        position: relative;
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        max-height: 100px;
        margin-bottom: 40px;
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

    ::after {
        background: linear-gradient(
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
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: -200px;
        top: 0;
        z-index: -1;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    height: 0;
    padding-bottom: 55%;
    z-index: 1;
`;
export const ImageContainer = styled.div`
    background-image: ${({ img }) => (img ? `url(${img})` : ``)};
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    right: -6%;
    width: 103%;

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
        left: 0;
        position: absolute;
        width: 100%;
    }
`;
