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
                        <a href="/login" target="_blank" rel="noreferrer">
                            Account
                        </a>
                        <a
                            href="https://media.netflix.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Media Centre
                        </a>
                        <a
                            href="http://ir.netflix.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Investor Relations
                        </a>
                        <a
                            href="https://jobs.netflix.com/jobs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Jobs
                        </a>
                        <a
                            href="https://devices.netflix.com/en/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ways to Watch
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
                        <a
                            href="https://help.netflix.com/contactus"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contact Us
                        </a>
                        <a
                            href="https://fast.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Speed Test
                        </a>
                        <a
                            href="https://help.netflix.com/legal/notices"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Legal Notices
                        </a>
                        <a
                            href="https://www.netflix.com/in/browse/genre/839338"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Only on Netflix
                        </a>
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
