import React from "react";
import {
    MoreDetailsContainer,
    MoreDetailsHeader,
    MoreDetailsContent,
} from "./styles/more_details_section";
import { getLanguageName } from "../../../../../utils/getLanguageName";

const MoreDetailsSection = ({ data }) => {
    return (
        <>
            <div style={{ marginBottom: "10px" }}></div>
            <MoreDetailsContainer>
                <div>
                    <MoreDetailsHeader>Watch offline</MoreDetailsHeader>
                    <MoreDetailsContent>
                        Available to download
                    </MoreDetailsContent>
                </div>
                <div>
                    <MoreDetailsHeader>Genres</MoreDetailsHeader>
                    {data &&
                        data?.genres?.length > 0 &&
                        data?.genres?.map((genre, index) => (
                            <MoreDetailsContent key={index}>
                                {index === 0 ? "" : ", "}
                                {genre.name}
                            </MoreDetailsContent>
                        ))}
                </div>
                <div>
                    <MoreDetailsHeader>Original Language</MoreDetailsHeader>
                    <MoreDetailsContent>
                        {getLanguageName(data.original_language)}
                    </MoreDetailsContent>
                </div>
                <div>
                    <MoreDetailsHeader>Popularity</MoreDetailsHeader>
                    <MoreDetailsContent>
                        {data && data?.popularity}
                    </MoreDetailsContent>
                </div>
            </MoreDetailsContainer>
            <div style={{ marginBottom: "10px" }}></div>
            <MoreDetailsHeader>Cast</MoreDetailsHeader>
            <MoreDetailsContainer>
                {data?.credits?.cast?.length > 0 &&
                    data?.credits?.cast?.slice(0, 20)?.map((creator, index) => {
                        return <span key={index}>{creator.name}</span>;
                    })}
                <MoreDetailsContent></MoreDetailsContent>
            </MoreDetailsContainer>
        </>
    );
};

export default MoreDetailsSection;
