import React from "react";
import { HeaderContainer, InfoWrapper, InfoContainer } from "./styles/header";

const Header = ({ data }) => {
    return (
        <>
            <HeaderContainer
                img={
                    data &&
                    data?.images?.backdrops?.length > 0 &&
                    `${process.env.REACT_APP_IMAGES_BASE_URL}${data?.images?.backdrops[0]["file_path"]}`
                }
            >
                <div className="bottomGradient"></div>
                <InfoWrapper>
                    <div className="leftGradient"></div>
                    <InfoContainer>
                        {data && data?.images?.logos?.length > 0 ? (
                            <div className="posterContainer">
                                <img
                                    src={
                                        data && data?.images?.logos?.length > 0
                                            ? `${process.env.REACT_APP_IMAGES_BASE_URL}${data?.images?.logos[0]["file_path"]}`
                                            : ""
                                    }
                                    alt=""
                                />
                            </div>
                        ) : (
                            <div></div>
                        )}
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
            </HeaderContainer>
        </>
    );
};

export default Header;
