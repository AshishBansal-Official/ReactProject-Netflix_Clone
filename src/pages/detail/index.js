import React, { useEffect, useState } from "react";
import { Nav, Footer } from "../components";
import {
    Container,
    Body,
    HeaderContainer,
    InfoWrapper,
    InfoContainer,
    ImageWrapper,
    ImageContainer,
    HeaderContainerBottomBanner,
} from "./styles/detail";

const Detail = () => {
    const [data, setData] = useState([]);
    const [itemData, setItemData] = useState([]);
    const [creditsData, setCreditsData] = useState([]);
    const [imageData, setImageData] = useState([]);

    const getData = async () => {
        const movieName = "Kota Factory";
        const dataLink = `${
            process.env.REACT_APP_MOVIES_BASE_URL
        }/search/tv?api_key=${
            process.env.REACT_APP_MOVIES_API_KEY
        }&query=${movieName.replace("/ /g", "+")}`;
        const res = await fetch(dataLink);
        const fetchedData = await res.json();
        setData(fetchedData.results[0]);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const getImageData = async () => {
            if (data.id !== undefined) {
                const imagesDataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/tv/${data?.id}/images?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`;
                const res = await fetch(imagesDataLink);
                const fetchedData = await res.json();
                setImageData(fetchedData);
            }
        };
        getImageData();

        const getItemData = async () => {
            if (data.id !== undefined) {
                const itemDataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/tv/${data?.id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`;
                const res = await fetch(itemDataLink);
                const fetchedData = await res.json();
                setItemData(fetchedData);
            }
        };
        getItemData();

        const getCreditData = async () => {
            if (data.id !== undefined) {
                const creditDataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/tv/${data?.id}/aggregate_credits?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`;
                const res = await fetch(creditDataLink);
                const fetchedData = await res.json();
                fetchedData.cast.sort((a, b) => {
                    return parseInt(b.popularity) - parseInt(a.popularity);
                });
                setCreditsData(fetchedData);
            }
        };
        getCreditData();
    }, [data]);

    return (
        <Container>
            <div>
                <Nav></Nav>
                <Body>
                    <HeaderContainer>
                        <InfoWrapper>
                            <InfoContainer
                                img={
                                    imageData &&
                                    imageData?.logos?.length > 0 &&
                                    `${process.env.REACT_APP_IMAGES_BASE_URL}${imageData?.logos[0]["file_path"]}`
                                }
                            >
                                <div id="poster"> </div>
                                <h1>{data && data?.name}</h1>
                                <div id="details">
                                    <span>
                                        {itemData &&
                                            itemData?.id &&
                                            itemData.first_air_date?.slice(
                                                0,
                                                4
                                            )}
                                    </span>
                                    <span id="spacer"> | </span>
                                    <span>
                                        {itemData &&
                                        itemData?.seasons?.length > 0 &&
                                        itemData?.seasons?.length === 1
                                            ? "1 Season"
                                            : `${itemData?.seasons?.length} Seasons`}
                                    </span>
                                </div>
                                <div id="overview">
                                    {data && data?.overview}
                                </div>
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
                                    {creditsData &&
                                        creditsData?.cast?.length > 0 &&
                                        creditsData?.cast?.map(
                                            (casted, index) => {
                                                return (
                                                    <span key={index}>
                                                        {index > 2
                                                            ? ""
                                                            : index === 0
                                                            ? ""
                                                            : ", "}
                                                        {index > 2
                                                            ? ""
                                                            : casted.name}
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
                                    {itemData &&
                                        itemData?.created_by?.length > 0 &&
                                        itemData?.created_by?.map(
                                            (creator, index) => {
                                                return (
                                                    <span key={index}>
                                                        {index > 2
                                                            ? ""
                                                            : index === 0
                                                            ? ""
                                                            : ", "}
                                                        {index > 2
                                                            ? ""
                                                            : creator.name}
                                                    </span>
                                                );
                                            }
                                        )}
                                </div>
                            </InfoContainer>
                        </InfoWrapper>
                        <ImageWrapper>
                            <ImageContainer
                                img={
                                    imageData &&
                                    imageData?.backdrops?.length > 0 &&
                                    `${process.env.REACT_APP_IMAGES_BASE_URL}${imageData?.backdrops[0]["file_path"]}`
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
                            <button>JOIN NOW</button>
                        </div>
                    </HeaderContainerBottomBanner>
                </Body>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </Container>
    );
};

export default Detail;
