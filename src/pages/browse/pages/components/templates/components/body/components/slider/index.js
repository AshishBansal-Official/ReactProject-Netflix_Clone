import React, { useEffect, useState } from "react";
import {
    SliderTitle,
    SliderContainer,
    SliderLeftButton,
    SliderRightButton,
    SliderList,
    SliderListItem,
    SliderWrapper,
} from "./styles/slider";

const Slider = () => {
    const [showLeftButton, setshowLeftButton] = useState(false);
    const [showRightButton, setshowRightButton] = useState(false);

    useEffect(() => {
        const sliderList = document.getElementById("slider_list");
        const leftButton = document.getElementById("left_button");
        const rightButton = document.getElementById("right_button");

        sliderList.scrollWidth > sliderList.clientWidth
            ? setshowRightButton(true)
            : setshowRightButton(false);

        const handleOnScroll = (event) => {
            sliderList.scrollLeft === 0
                ? setshowLeftButton(false)
                : setshowLeftButton(true);
            sliderList.scrollLeft + sliderList.clientWidth ===
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
        <SliderWrapper>
            <SliderTitle>K-Dramas</SliderTitle>
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
                    <SliderListItem image="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABShWb9mWFrhDHskSLwbwpgsf29JNH1Heth1qtEZ-SiR_5PYUR6ckXyaF52rlJtLiL_Eb40Z_o2p8eswttX0AHfD-GwxTnipejhCv9-Gr-Nzz_9q4f5FHIi8sBGiYWc0Eh6IXoqHkPW1YJP23GQxHXJ3g1jYkaauZeZ5MUw.jpg?r=118">
                        <a href="#">
                            <div></div>
                            <span>Extraordinary Attorney Woo</span>
                        </a>
                    </SliderListItem>
                    <SliderListItem image="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABShWb9mWFrhDHskSLwbwpgsf29JNH1Heth1qtEZ-SiR_5PYUR6ckXyaF52rlJtLiL_Eb40Z_o2p8eswttX0AHfD-GwxTnipejhCv9-Gr-Nzz_9q4f5FHIi8sBGiYWc0Eh6IXoqHkPW1YJP23GQxHXJ3g1jYkaauZeZ5MUw.jpg?r=118">
                        <a href="#">
                            <div></div>
                            <span>Extraordinary Attorney Woo</span>
                        </a>
                    </SliderListItem>
                    <SliderListItem image="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABShWb9mWFrhDHskSLwbwpgsf29JNH1Heth1qtEZ-SiR_5PYUR6ckXyaF52rlJtLiL_Eb40Z_o2p8eswttX0AHfD-GwxTnipejhCv9-Gr-Nzz_9q4f5FHIi8sBGiYWc0Eh6IXoqHkPW1YJP23GQxHXJ3g1jYkaauZeZ5MUw.jpg?r=118">
                        <a href="#">
                            <div></div>
                            <span>Extraordinary Attorney Woo</span>
                        </a>
                    </SliderListItem>
                    <SliderListItem image="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABShWb9mWFrhDHskSLwbwpgsf29JNH1Heth1qtEZ-SiR_5PYUR6ckXyaF52rlJtLiL_Eb40Z_o2p8eswttX0AHfD-GwxTnipejhCv9-Gr-Nzz_9q4f5FHIi8sBGiYWc0Eh6IXoqHkPW1YJP23GQxHXJ3g1jYkaauZeZ5MUw.jpg?r=118">
                        <a href="#">
                            <div></div>
                            <span>Extraordinary Attorney Woo</span>
                        </a>
                    </SliderListItem>
                    <SliderListItem image="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABShWb9mWFrhDHskSLwbwpgsf29JNH1Heth1qtEZ-SiR_5PYUR6ckXyaF52rlJtLiL_Eb40Z_o2p8eswttX0AHfD-GwxTnipejhCv9-Gr-Nzz_9q4f5FHIi8sBGiYWc0Eh6IXoqHkPW1YJP23GQxHXJ3g1jYkaauZeZ5MUw.jpg?r=118">
                        <a href="#">
                            <div></div>
                            <span>Extraordinary Attorney Woo</span>
                        </a>
                    </SliderListItem>
                    <SliderListItem image="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABShWb9mWFrhDHskSLwbwpgsf29JNH1Heth1qtEZ-SiR_5PYUR6ckXyaF52rlJtLiL_Eb40Z_o2p8eswttX0AHfD-GwxTnipejhCv9-Gr-Nzz_9q4f5FHIi8sBGiYWc0Eh6IXoqHkPW1YJP23GQxHXJ3g1jYkaauZeZ5MUw.jpg?r=118">
                        <a href="#">
                            <div></div>
                            <span>Extraordinary Attorney Woo</span>
                        </a>
                    </SliderListItem>
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
    );
};

export default Slider;
