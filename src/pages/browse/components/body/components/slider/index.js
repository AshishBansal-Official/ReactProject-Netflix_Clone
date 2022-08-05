import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    SliderTitle,
    SliderContainer,
    SliderLeftButton,
    SliderRightButton,
    SliderList,
    SliderListItem,
    SliderWrapper,
} from "./styles/slider";

const Slider = ({ title, url }) => {
    const [showLeftButton, setshowLeftButton] = useState(false);
    const [showRightButton, setshowRightButton] = useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch(url);
        if (res.status === 200) {
            const fetchedData = await res.json();
            fetchedData?.results?.sort((a, b) => 0.5 - Math.random());
            setData(fetchedData?.results);
        }
    };

    useEffect(() => {
        getData();
    }, [title]);

    useEffect(() => {
        const sliderList = document.getElementById("slider_list");
        const leftButton = document.getElementById("left_button");
        const rightButton = document.getElementById("right_button");
        sliderList?.scrollWidth > sliderList?.clientWidth
            ? setshowRightButton(true)
            : setshowRightButton(false);

        const handleOnScroll = (event) => {
            sliderList?.scrollLeft === 0
                ? setshowLeftButton(false)
                : setshowLeftButton(true);
            sliderList?.scrollLeft + sliderList?.clientWidth ===
            sliderList?.scrollWidth
                ? setshowRightButton(false)
                : setshowRightButton(true);
        };

        const handleOnClickLeftButton = (event) => {
            sliderList?.scrollBy(-sliderList?.clientWidth, 0);
        };

        const handleOnClickRightButton = (event) => {
            sliderList?.scrollBy(sliderList?.clientWidth, 0);
        };

        sliderList?.addEventListener("scroll", handleOnScroll, true);
        leftButton?.addEventListener("click", handleOnClickLeftButton, true);
        rightButton?.addEventListener("click", handleOnClickRightButton, true);

        return () => {
            sliderList?.removeEventListener("scroll", handleOnScroll, true);
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
    }, [data]);

    return (
        <div>
            {data && data?.length > 0 && (
                <SliderWrapper>
                    <SliderTitle>{title}</SliderTitle>
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
                            {data.map((item, index) => {
                                return (
                                    <SliderListItem
                                        key={index}
                                        image={`${process.env.REACT_APP_IMAGES_BASE_URL}${item.backdrop_path}`}
                                    >
                                        <Link to={`/title/${item.id}`}>
                                            <div></div>
                                            <span>
                                                {item.name ?? item.title}
                                            </span>
                                        </Link>
                                    </SliderListItem>
                                );
                            })}
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
                </SliderWrapper>
            )}
        </div>
    );
};

export default Slider;
