import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    BodyTile,
    RightPane,
    LeftPane,
    Title,
    SubTitle,
    ImageContainer,
    ImageContainerBanner,
    FormContainer,
    InputField,
    GetStartedButton,
    FAQContainer,
    FAQList,
    FAQTile,
    FAQHeader,
    FAQBody,
} from "./styles/body";
import data from "../../fixtures/jumbotron.json";
import faqsData from "../../fixtures/faqs.json";

const Body = () => {
    const [fAQOpened, setFAQOpened] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
        const emailElement = document.getElementById("home_body_email");
        const email = emailElement.value;
        navigate("/register", { state: { email: email } });
    };

    const handleFAQClick = ({ index }) => {
        if (fAQOpened === index) {
            setFAQOpened(-1);
        } else {
            setFAQOpened(index);
        }
    };

    return (
        <>
            <Container>
                <BodyTile>
                    <LeftPane>
                        <Title>{data[0].title}</Title>
                        <SubTitle>{data[0].subTitle}</SubTitle>
                    </LeftPane>
                    <RightPane>
                        <ImageContainer>
                            <img src={data[0].image} alt={data[0].title} />
                            <video
                                src="../images/home/home-tv.m4v"
                                className="tv"
                                autoPlay
                                playsInline
                                muted
                                loop
                            >
                                Not supported
                            </video>
                        </ImageContainer>
                    </RightPane>
                </BodyTile>
            </Container>
            <Container>
                <BodyTile reverse>
                    <LeftPane reverse>
                        <Title>{data[1].title}</Title>
                        <SubTitle>{data[1].subTitle}</SubTitle>
                    </LeftPane>
                    <RightPane reverse>
                        <ImageContainer>
                            <img src={data[1].image} alt={data[1].title} />
                            <ImageContainerBanner>
                                <img src="../images/home/boxshot.png" alt="" />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: "1 1",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <span>Stranger Things</span>
                                    <span>Downloading...</span>
                                </div>
                                <img
                                    src="../images/home/download-icon.gif"
                                    alt=""
                                />
                            </ImageContainerBanner>
                        </ImageContainer>
                    </RightPane>
                </BodyTile>
            </Container>
            <Container>
                <BodyTile>
                    <LeftPane>
                        <Title>{data[2].title}</Title>
                        <SubTitle>{data[2].subTitle}</SubTitle>
                    </LeftPane>
                    <RightPane>
                        <ImageContainer>
                            <img src={data[2].image} alt={data[2].title} />
                            <video
                                src="../images/home/home-imac.m4v"
                                className="imac"
                                autoPlay
                                playsInline
                                muted
                                loop
                            >
                                Not supported
                            </video>
                        </ImageContainer>
                    </RightPane>
                </BodyTile>
            </Container>
            <Container>
                <BodyTile reverse>
                    <LeftPane reverse>
                        <Title>{data[3].title}</Title>
                        <SubTitle>{data[3].subTitle}</SubTitle>
                    </LeftPane>
                    <RightPane reverse>
                        <ImageContainer>
                            <img src={data[3].image} alt={data[3].title} />
                        </ImageContainer>
                    </RightPane>
                </BodyTile>
            </Container>
            <FAQContainer>
                <div
                    style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Title>Frequently Asked Questions</Title>
                    <FAQList>
                        {faqsData.map((item) => (
                            <FAQTile
                                key={item.id}
                                onClick={() =>
                                    handleFAQClick({ index: item.id })
                                }
                            >
                                <FAQHeader>
                                    {item.header}
                                    {fAQOpened === item.id ? (
                                        <img
                                            src="../images/icons/close-slim.png"
                                            alt="Close"
                                        />
                                    ) : (
                                        <img
                                            src="../images/icons/add.png"
                                            alt="Open"
                                        />
                                    )}
                                </FAQHeader>
                                <FAQBody
                                    className={
                                        fAQOpened === item.id
                                            ? "open"
                                            : "closed"
                                    }
                                >
                                    <span>{item.body}</span>
                                </FAQBody>
                            </FAQTile>
                        ))}
                    </FAQList>
                    <span
                        style={{
                            fontSize: "1.2rem",
                            margin: "20px 0",
                            padding: "0px 45px",
                            "@media (maxWidth: 950px)": {
                                fontSize: "1.5rem",
                                margin: "10px 0 20px",
                            },

                            "@media (maxWidth: 748px)": {
                                fontSize: "1.2rem",
                            },
                        }}
                    >
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </span>
                    <FormContainer>
                        <InputField
                            id="home_body_email"
                            type="text"
                            placeholder="Email address"
                        ></InputField>
                        <GetStartedButton onClick={() => handleClick()}>
                            <span>Get Started</span>
                            <img
                                src="../images/icons/chevron-right.png"
                                alt=""
                            />
                        </GetStartedButton>
                    </FormContainer>
                </div>
            </FAQContainer>
        </>
    );
};

export default Body;
