import React, { useEffect, useState } from "react";
import {
    SliderContainer,
    SliderLeftButton,
    SliderRightButton,
    SliderList,
    SliderListItem,
} from "./styles/slider";

const Slider = ({ id }) => {
    const [showLeftButton, setshowLeftButton] = useState(false);
    const [showRightButton, setshowRightButton] = useState(false);
    const [videoData, setVideoData] = useState([]);

    const getVideoData = async () => {
        id = "66732";
        const dataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/tv/${id}/videos?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`;
        const res = await fetch(dataLink);
        const fetchedData = await res.json();
        setVideoData(fetchedData?.results);
    };

    useEffect(() => {
        getVideoData();
    }, []);

    useEffect(() => {
        const sliderList = document.getElementById("slider_list");
        const leftButton = document.getElementById("left_button");
        const rightButton = document.getElementById("right_button");

        sliderList.scrollWidth >= sliderList.clientWidth
            ? setshowRightButton(true)
            : setshowRightButton(false);

        const handleOnScroll = (event) => {
            sliderList.scrollLeft === 0
                ? setshowLeftButton(false)
                : setshowLeftButton(true);
            sliderList.scrollLeft + sliderList.clientWidth >=
            sliderList.scrollWidth
                ? setshowRightButton(false)
                : setshowRightButton(true);
        };

        const handleOnClickLeftButton = (event) => {
            sliderList.scrollBy(-sliderList.clientWidth, 0);
        };

        const handleOnClickRightButton = (event) => {
            sliderList.scrollBy(sliderList.clientWidth, 0);
        };

        sliderList.addEventListener("scroll", handleOnScroll, true);
        leftButton.addEventListener("click", handleOnClickLeftButton, true);
        rightButton.addEventListener("click", handleOnClickRightButton, true);

        return () => {
            sliderList.removeEventListener("scroll", handleOnScroll, true);
            leftButton?.removeEventListener(
                "click",
                handleOnClickLeftButton,
                true
            );
            rightButton?.removeEventListener(
                "click",
                handleOnClickRightButton,
                true
            );
        };
    }, []);

    return (
        <SliderContainer>
            <SliderLeftButton show={showLeftButton}>
                <img
                    id="left_button"
                    src="/images/browse/slider_button.svg"
                    alt=""
                />
                <span></span>
            </SliderLeftButton>

            <SliderList id="slider_list">
                {videoData &&
                    videoData.length > 0 &&
                    videoData?.map((data, index) =>
                        [
                            "Clip",
                            "Trailer",
                            "Teaser",
                            "Opening Credits",
                            "Featurette",
                        ].includes(data?.type) ? (
                            <SliderListItem
                                image={`https://img.youtube.com/vi/${data?.key}/hqdefault.jpg`}
                                key={index}
                            >
                                <a href="#">
                                    <div>
                                        <svg
                                            viewBox="0 0 50 50"
                                            className="additional-video-play-icon"
                                            data-uia="additional-video-play-icon"
                                        >
                                            <g fill="none" fillRule="nonzero">
                                                <path
                                                    fill="#fff"
                                                    d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z"
                                                    className="base"
                                                />
                                                <path
                                                    fill="#000"
                                                    d="M35.3 25l-15.6-8.6v17.2z"
                                                    className="triangle"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <span>{data?.name}</span>
                                </a>
                            </SliderListItem>
                        ) : (
                            <span key={index}></span>
                        )
                    )}
            </SliderList>

            <SliderRightButton show={showRightButton}>
                <span></span>
                <img
                    id="right_button"
                    src="/images/browse/slider_button.svg"
                    alt=""
                />
            </SliderRightButton>
        </SliderContainer>
    );
};

export default Slider;
