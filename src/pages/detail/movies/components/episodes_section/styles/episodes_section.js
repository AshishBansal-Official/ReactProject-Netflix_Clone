import styled from "styled-components/macro";

export const EpisodesSelect = styled.div`
    position: relative;
    select {
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
        line-height: 27px;
        outline: none;
        padding: 7px 10px 7px 0;
        border-radius: 2px;
        background-color: transparent;
        margin: 10px 40px 30px 0px;

        option {
            min-height: 1.2em;
            padding: 0px 2px 1px 0px;
            background-color: #181818;
        }
    }
    img {
        color: #e50914;
        font-size: 14px;
        transform: rotate(270deg);
        pointer-events: none;
        position: relative;
    }
`;

export const EpisodesSectionBody = styled.div`
    div#season_details {
        color: #a3a3a3;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        margin: 5px 0 20px;
        width: 50%;
    }
`;

export const EpisodesList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    justify-content: space-evenly;
    grid-column-gap: 12px;

    @media (max-width: 1919px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1439px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 599px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const EpisodeListItem = styled.div`
    div.episode_list_thumbnail {
        width: 100%;
        position: relative;
        aspect-ratio: 5/3;
        overflow: hidden;
        background-image: ${({ imageUrl }) => `url(${imageUrl})`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #333;
        img {
            position: relative;
            width: 100%;
            height: 100%;
        }
        span.episode_list_gradient {
            background-image: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.8) 5%,
                transparent 95%
            );
            bottom: 0px;
            height: 55px;
            left: 0;
            position: absolute;
            right: -0.5px;
        }
    }
    div.episode_metadata {
        display: grid;
        grid-template-columns: ${({ containsHour }) =>
            !containsHour ? "83% 17%" : "90% 10%"};
        grid-gap: 2px;
        margin-top: 4px;

        h3 {
            line-height: 27px;
            font-size: 16px;
            font-weight: 700;
            margin: 0;
        }
        span {
            color: #a3a3a3;
            font-size: 16px;
            font-weight: 400;
        }
    }
    div.episode_details {
        color: #a3a3a3;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 12px;
    }
`;
