import React, { useEffect, useState } from "react";
import {
    EpisodesSelect,
    EpisodesSectionBody,
    EpisodesList,
    EpisodeListItem,
} from "./styles/episodes_section";

const EpisodesSection = ({ id, data }) => {
    const [season, setSeason] = useState(data[0].season_number);
    const [seasonData, setSeasonData] = useState([]);

    useEffect(() => {
        const getSeasonData = async () => {
            const dataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/tv/${id}/season/${season}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`;
            const res = await fetch(dataLink);
            const fetchedData = await res.json();
            setSeasonData(fetchedData);
        };
        getSeasonData();
    }, [data, season]);

    return (
        <>
            <EpisodesSelect>
                <select onChange={(e) => setSeason(e.target.value)}>
                    {data.map((season, index) => {
                        return (
                            <option value={season.season_number} key={index}>
                                {season.name}
                            </option>
                        );
                    })}
                </select>
            </EpisodesSelect>
            <EpisodesSectionBody>
                <div id="release_year">
                    {" "}
                    Release Year:{" "}
                    {seasonData && seasonData?.air_date?.slice(0, 4)}
                </div>
                <div id="season_details">{data[season - 1]?.overview}</div>
                <EpisodesList>
                    {seasonData &&
                        seasonData?.episodes?.length > 0 &&
                        seasonData.episodes.map((episode, index) => (
                            <EpisodeListItem
                                imageUrl={
                                    episode.still_path
                                        ? `${process.env.REACT_APP_IMAGES_BASE_URL}/${episode.still_path}`
                                        : ""
                                }
                                containsHour={episode?.runtime > 60}
                                key={index}
                            >
                                <div className="episode_list_thumbnail">
                                    <span className="episode_list_gradient"></span>
                                </div>
                                <div className="episode_metadata">
                                    <h3>
                                        {index + 1}
                                        {". "}
                                        {episode.name}
                                    </h3>
                                    <span>
                                        {!(episode.runtime > 60)
                                            ? `${parseInt(
                                                  episode.runtime / 60
                                              )}h ${episode.runtime}`
                                            : episode.runtime}
                                        {"m"}
                                    </span>
                                </div>
                                <div className="episode_details">
                                    {episode.overview}
                                </div>
                            </EpisodeListItem>
                        ))}
                </EpisodesList>
            </EpisodesSectionBody>
        </>
    );
};

export default EpisodesSection;
