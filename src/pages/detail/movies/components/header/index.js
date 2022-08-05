import React, { useEffect, useState } from "react";

import {
    HeaderContainer,
    InfoWrapper,
    InfoContainer,
    ImageWrapper,
    ImageContainer,
    HeaderContainerBottomBanner,
} from "./styles/header";

const Header = ({ data }) => {
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        let videos = data?.videos?.results;
        videos = videos?.filter((video) => {
            const isTrailer = video?.type === "Trailer";
            const isOnYoutube = video?.site === "YouTube";
            return isTrailer && isOnYoutube;
        });
        if (videos) {
            setTrailerUrl(videos[0]?.key);
        }
    }, [data]);

    useEffect(() => {
        if (trailerUrl !== "") {
            const player = document.getElementById("playTrailer");
            setTimeout(player?.click(), 10000);
        }
    }, [trailerUrl]);

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
                    >
                        {data &&
                            data?.videos?.results?.length > 0 &&
                            trailerUrl !== "" && (
                                <div
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "120%",
                                            height: "120%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                pointerEvents: "none",
                                            }}
                                        >
                                            <iframe
                                                height="100%"
                                                width="100%"
                                                src={`https://www.youtube.com/embed/${trailerUrl}?&autoplay=1&controls=0&showinfo=0&loop=1&modestbranding=1&disablekb=1&muted=1`}
                                                title={"video"}
                                                className={"playTrailer"}
                                                frameBorder="0"
                                                autoPlay
                                                allow="autoplay; clipboard-write; encrypted-media;"
                                                style={{
                                                    pointerEvents: "none",
                                                }}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </ImageContainer>
                    <div className="image_container_gradient"></div>
                </ImageWrapper>
            </HeaderContainer>
            {/* <HeaderContainerBottomBanner>
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
                </div>
            </HeaderContainerBottomBanner> */}
        </>
    );
};

export default Header;
