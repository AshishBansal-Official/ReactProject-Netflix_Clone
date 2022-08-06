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
                <div class="bottomGradient"></div>
                <InfoWrapper>
                    <div class="leftGradient"></div>
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
                                {data && data?.first_air_date?.slice(0, 4)}
                            </span>
                            <span id="spacer"> | </span>
                            <span>
                                {data && data?.seasons?.length > 0
                                    ? data?.seasons?.length === 1
                                        ? "1 Season"
                                        : `${data?.seasons?.length} Seasons`
                                    : ""}
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
                                data?.aggregate_credits?.cast?.length > 0 &&
                                data?.aggregate_credits?.cast?.map(
                                    (casted, index) => {
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
                                    }
                                )}
                            <br />
                            <span
                                style={{
                                    color: "#a3a3a3",
                                }}
                            >
                                Creators:{" "}
                            </span>
                            {data &&
                                data?.created_by?.length > 0 &&
                                data?.created_by?.map((creator, index) => {
                                    return (
                                        <span key={index}>
                                            {index > 2
                                                ? ""
                                                : index === 0
                                                ? ""
                                                : ", "}
                                            {index > 2 ? "" : creator.name}
                                        </span>
                                    );
                                })}
                        </div>
                    </InfoContainer>
                </InfoWrapper>
            </HeaderContainer>
        </>
    );
};

export default Header;
