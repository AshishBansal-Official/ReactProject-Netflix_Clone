import React, { useEffect, useState } from "react";
import { Nav, Footer } from "../components";
import { Header, Slider } from './components'
import { Container, Body, SectionContainer, SectionHeader } from "./styles/detail";

const Detail = () => {
    const [data, setData] = useState([]);
    const [itemData, setItemData] = useState([]);
    const [creditsData, setCreditsData] = useState([]);
    const [imageData, setImageData] = useState([]);

    const getData = async () => {
        const movieName = "Stranger Things";
        const dataLink = `${process.env.REACT_APP_MOVIES_BASE_URL
            }/search/tv?api_key=${process.env.REACT_APP_MOVIES_API_KEY
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
                    <Header
                        data={data}
                        imageData={imageData}
                        itemData={itemData}
                        creditsData={creditsData}
                    ></Header>
                    <SectionContainer>
                        <SectionHeader>
                            <h1 className="section_header">Videos</h1>
                            <h2 className="section_subheader">{data && data?.name}</h2>
                            <Slider id={data?.id}></Slider>
                        </SectionHeader>
                    </SectionContainer>
                </Body>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </Container>
    );
};

export default Detail;
