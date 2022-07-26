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
        <FooterContainer>
            <Container>
                <FooterTitle>Questions? Call 000-800-040-1843</FooterTitle>
                <FooterLinksContainer>
                    <a
                        href="https://help.netflix.com/support/412"
                        target="_blank"
                        rel="noreferrer"
                    >
                        FAQ
                    </a>
                    <a
                        href="https://help.netflix.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Help Centre
                    </a>
                    <a
                        href="https://help.netflix.com/legal/termsofuse"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Terms of Use
                    </a>
                    <a
                        href="https://help.netflix.com/legal/privacy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Privacy
                    </a>
                    <a href="#">Cookie Preferences</a>
                    <a
                        href="https://help.netflix.com/legal/corpinfo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Corporate Information
                    </a>
                </FooterLinksContainer>
                <LangSelector>
                    <option value="">English</option>
                </LangSelector>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
