import React from "react";

import {
    HeaderContainer,
    InfoWrapper,
    InfoContainer,
    ImageWrapper,
    ImageContainer,
    HeaderContainerBottomBanner,
} from "./styles/header";

const Header = ({ data }) => {
    return (
        <>
            <HeaderContainer>
                <InfoWrapper>
                    <InfoContainer
                        img={
                            data && data?.images?.logos?.length > 0
                                ? `${process.env.REACT_APP_IMAGES_BASE_URL}${data?.images?.logos[0]["file_path"]}`
                                : ""
                        }
                    >
                        <div id="poster"> </div>
                        <h1>{data && data?.name}</h1>
                        <div id="details">
                            <span>
                                {data && data?.release_date?.slice(0, 4)}
                            </span>
                            <span id="spacer"> | </span>
                            <span>
                                {data && data?.runtime > 60
                                    ? `${parseInt(data?.runtime / 60)}h ${
                                          data?.runtime % 60
                                      }m`
                                    : data?.runtime}
                            </span>
                        </div>
                        <div id="overview">{data && data?.overview}</div>
                        <div
                            style={{
                                paddingTop: "16px",
                            }}
                        >
                            <span
                                style={{
                                    color: "#a3a3a3",
                                }}
                            >
                                Starring:{" "}
                            </span>
                            {data &&
                                data?.credits?.cast?.length > 0 &&
                                data?.credits?.cast?.map((casted, index) => {
                                    return (
                                        <span key={index}>
                                            {index > 2
                                                ? ""
                                                : index === 0
                                                ? ""
                                                : ", "}
                                            {index > 2 ? "" : casted.name}
                                        </span>
                                    );
                                })}
                            <br />
                        </div>
                    </InfoContainer>
                </InfoWrapper>
                <ImageWrapper>
                    <ImageContainer
                        img={
                            data &&
                            data?.images?.backdrops?.length > 0 &&
                            `${process.env.REACT_APP_IMAGES_BASE_URL}${data?.images?.backdrops[0]["file_path"]}`
                        }
                    ></ImageContainer>
                </ImageWrapper>
            </HeaderContainer>
            <HeaderContainerBottomBanner>
                <img
                    src="/images/logo_small.svg"
                    className="img_small"
                    alt=""
                />
                <div
                    style={{
                        fontWeight: "700",
                        width: "100%",
                        paddingLeft: "15px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span>Watch all you want.</span>
                    {/* <button>JOIN NOW</button> */}
                </div>
            </HeaderContainerBottomBanner>
        </>
    );
};

export default Header;
