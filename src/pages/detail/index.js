import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TVShowDetail from "./tv_shows";
import MovieDetail from "./movies";
import { useSelector, useDispatch } from "react-redux";
import { hideVideo } from "../../features/detail/showVideoSlice";
import {
    Overlay,
    VideoContainer,
    Header,
    Title,
    CloseIcon,
} from "./styles/detail";

const Detail = () => {
    const [isMovie, setIsMovie] = useState(null);
    const [isShow, setIsShow] = useState(null);
    const [data, setData] = useState([]);

    const showVideo = useSelector((state) => state.showVideo.value);
    const videoData = useSelector((state) => state.videoData.value);
    const dispatch = useDispatch();

    const params = useParams();
    const id = params.id;

    const navigate = useNavigate();

    const getShowData = async () => {
        const dataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/tv/${id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`;
        let res;
        try {
            res = await fetch(dataLink);
        } catch (error) {
            console.log(error.code);
        }
        if (res.status === 200) {
            const fetchedData = await res.json();
            setData(fetchedData);
            setIsShow(true);
        } else {
            getMovieData();
        }
    };

    const getMovieData = async () => {
        const dataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`;
        const res = await fetch(dataLink);
        if (res.status === 200) {
            const fetchedData = await res.json();
            setData(fetchedData);
            setIsMovie(true);
        } else {
            navigate("/404page", { replace: "true" });
        }
    };

    useEffect(() => {
        dispatch(hideVideo());
        getShowData();
    }, [id]);

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        showVideo
            ? (document.body.style.overflowY = "hidden")
            : (document.body.style.overflowY = "scroll");
    }, [showVideo]);

    useEffect(() => {}, [videoData]);

    return (
        <div>
            {
                <div>
                    {showVideo && (
                        <Overlay onClick={() => dispatch(hideVideo())}>
                            <VideoContainer
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                            >
                                <Header>
                                    <Title>{videoData?.videoTitle}</Title>
                                    <CloseIcon
                                        onClick={() => {
                                            return dispatch(hideVideo());
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </CloseIcon>
                                </Header>
                                {videoData?.videoUrl !== "" && (
                                    <iframe
                                        src={videoData?.videoUrl}
                                        title={videoData?.videoTitle}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                )}
                            </VideoContainer>
                        </Overlay>
                    )}
                </div>
            }
            {isMovie && <MovieDetail></MovieDetail>}
            {isShow && <TVShowDetail></TVShowDetail>}
        </div>
    );
};

export default Detail;
