import styled from "styled-components/macro";

export const Container = styled.div`
    height: 95vh;
    width: 100%;
    position: relative;
    background-image: url("images/home/bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 8px solid #222;
`;

export const Overlay = styled.div`
    position: absolute;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0,
        transparent 60%,
        rgba(0, 0, 0, 0.8)
    );
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
`;

export const Nav = styled.nav`
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    content: "hisafsal";
    z-index: 999;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 1.8rem 3.5rem;

    @media (max-width: 548px) {
        margin: 1.8rem 2rem;
    } ;
`;

export const Logo = styled.div`
    fill: var(--color-primary-red);
    width: 10.4rem;

    @media (max-width: 1440px) {
        width: 8.3rem;
    }

    @media (max-width: 548px) {
        width: 5.5rem;
    } ;
`;

export const RightPane = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
`;

export const LanguagePicker = styled.select`
    margin-right: 2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 2.25rem;
    font-size: 1rem;
    padding: 0 1.5rem 0 1rem;
    color: #ffffff;
    background-color: transparent;
    border-radius: 2px;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;

    @media (max-width: 548px) {
        margin-right: 1rem;
        font-size: 0.9rem;
        padding: 0 1.2rem 0 0.75rem;
        height: 1.8rem;
        background-position-x: 100%;
    }
`;

export const SignInButton = styled.div`
    background-color: var(--color-primary-red);
    height: 2.2rem;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
    color: white;
    border: none;
    font-size: 1rem;
    border-radius: 3px;
    @media (max-width: 548px) {
        font-size: 0.9rem;
        padding: 0.2rem 0.5rem;
    }
`;

export const TextContainer = styled.div`
    height: 89%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 3.9rem;
    font-weight: 600;
`;

export const SubTitle = styled.div`
    text-align: center;
    font-size: 1.7rem;
    padding: 1rem;
`;

export const Form = styled.form`
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormTitle = styled.div`
    text-align: center;
    font-size: 1.2rem;
    margin: 1rem 0rem;
`;

export const FormField = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 4.5rem;
    max-width: 750px;
`;

export const InputField = styled.input`
    flex: 3;
    padding: 10px;
`;

export const SubmitButton = styled.button`
    flex: 1.5;
    color: white;
    border: none;
    font-size: 2rem;
    background-color: var(--color-primary-red);
`;
