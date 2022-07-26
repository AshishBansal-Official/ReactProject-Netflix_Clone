import React from "react";
import {
    FooterContainer,
    Container,
    FooterTitle,
    FooterLinksContainer,
    LangSelector,
} from "./styles/footer";

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <Container>
                    <FooterTitle>Questions? Call 000-800-040-1843</FooterTitle>
                    <FooterLinksContainer>
                        <a href="#">FAQ</a>
                        <a href="#">Help Centre</a>
                        <a href="#">Account</a>
                        <a href="#">Media Centre</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Jobs</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Speed Test</a>
                        <a href="#">Legal Notices</a>
                        <a href="#">Only on Netflix</a>
                    </FooterLinksContainer>
                    <LangSelector>
                        <option value="">English</option>
                    </LangSelector>
                    <span>Netflix India</span>
                </Container>
            </FooterContainer>
        </div>
    );
};

export default Footer;
