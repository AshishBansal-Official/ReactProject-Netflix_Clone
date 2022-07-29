import React from "react";
import { HeadingContainer, Title, SubTitle } from "./styles/header";

const Header = () => {
    return (
        <HeadingContainer>
            <Title>Netflix Originals</Title>
            <SubTitle>
                Netflix is the home of amazing original programming that you
                can’t find anywhere else. Movies, TV shows, specials and more,
                it’s all tailored specifically to you.
            </SubTitle>
        </HeadingContainer>
    );
};

export default Header;
