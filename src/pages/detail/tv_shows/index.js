import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Footer } from "../../components";
import {
    Header,
    Slider,
    EpisodesSection,
    MoreDetailsSection,
    MoreLikeThisSection,
} from "./components";
import {
    Container,
    Body,
    SectionContainer,
    SectionHeader,
} from "./styles/detail";

const TVShowDetail = () => {
    const [data, setData] = useState([]);

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        window.scrollTo(0, 0);
        const getData = async () => {
            const dataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/tv/${id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&append_to_response=videos,images,aggregate_credits,similar`;
            const res = await fetch(dataLink);
            const fetchedData = await res.json();
            fetchedData?.aggregate_credits?.cast?.sort((a, b) => {
                return parseInt(b.popularity) - parseInt(a.popularity);
            });
            setData(fetchedData);
        };
        getData();
    }, [id]);

    return (
        <Container>
            <div>
                <Nav></Nav>
                <Body>
                    <Header data={data}></Header>

                    {/* Videos Section */}
                    {data && data?.videos?.results?.length > 1 && (
                        <SectionContainer>
                            <SectionHeader>
                                <h1 className="section_header">Videos</h1>
                                <h2 className="section_subheader">
                                    {data.name}
                                </h2>
                                <Slider data={data.videos.results}></Slider>
                            </SectionHeader>
                        </SectionContainer>
                    )}

                    {/* Episodes Section */}
                    {data && data?.seasons?.length > 0 && (
                        <SectionContainer>
                            <SectionHeader>
                                <h1 className="section_header">Episodes</h1>
                                <h2 className="section_subheader">
                                    {data.name}
                                </h2>
                            </SectionHeader>
                            <EpisodesSection
                                id={data.id}
                                data={data.seasons}
                            ></EpisodesSection>
                        </SectionContainer>
                    )}

                    {/* More Details Section */}
                    {data && (
                        <SectionContainer>
                            <SectionHeader>
                                <h1 className="section_header">More Details</h1>
                            </SectionHeader>
                            <MoreDetailsSection
                                data={data}
                            ></MoreDetailsSection>
                        </SectionContainer>
                    )}

                    {/* More Like This Section */}
                    {data && data?.similar?.results?.length > 0 && (
                        <SectionContainer>
                            <SectionHeader>
                                <h1 className="section_header">
                                    More Like This
                                </h1>
                            </SectionHeader>
                            <MoreLikeThisSection
                                data={data.similar.results}
                            ></MoreLikeThisSection>
                        </SectionContainer>
                    )}
                </Body>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </Container>
    );
};

export default TVShowDetail;
