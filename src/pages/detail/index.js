import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TVShowDetail from "./tv_shows";
import MovieDetail from "./movies";

const Detail = () => {
    const [isMovie, setIsMovie] = useState(null);
    const [isShow, setIsShow] = useState(null);
    const [data, setData] = useState([]);

    const params = useParams();
    const id = params.id;

    const navigate = useNavigate();

    const getShowData = async () => {
        const dataLink = `${process.env.REACT_APP_MOVIES_BASE_URL}/tv/${id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`;
        let res;
        try {
            res = await fetch(dataLink);
            console.log(res.status);
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
        getShowData();
    }, [id]);

    if (isMovie) {
        return <MovieDetail></MovieDetail>;
    } else if (isShow) {
        return <TVShowDetail></TVShowDetail>;
    }
};

export default Detail;
