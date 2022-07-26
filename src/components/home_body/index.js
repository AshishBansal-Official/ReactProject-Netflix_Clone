import React from "react";
import {
    HomeBodyContainer,
    HomeBodyTile,
    LeftPane,
    RightPane,
} from "./styles/home_body";
import data from "../../fixtures/jumbotron.json";

const HomeBody = () => {
    return (
        <>
            <HomeBodyContainer>
                <HomeBodyTile>
                    <LeftPane>
                        <h1>{data[0].title}</h1>
                        <h2>{data[0].subTitle}</h2>
                    </LeftPane>
                    <RightPane>
                        <img src={data[0].image} alt="" />
                        <video
                            src="images\home\home-tv.m4v"
                            autoPlay
                            playsInline
                            muted
                            loop
                            controls
                        >
                            Not supported
                        </video>
                    </RightPane>
                </HomeBodyTile>
            </HomeBodyContainer>
            <HomeBodyContainer>
                <HomeBodyTile>
                    <LeftPane>
                        <h1>{data[0].title}</h1>
                        <h2>{data[0].subTitle}</h2>
                    </LeftPane>
                    <RightPane>
                        <img src={data[0].image} alt="" />
                    </RightPane>
                </HomeBodyTile>
            </HomeBodyContainer>
            <video src={data[0].video} autoPlay playsInline muted loop>
                <source src={data[0].video} type="video/mp4" />
            </video>
        </>
    );
};

export default HomeBody;
