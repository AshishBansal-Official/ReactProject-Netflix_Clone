import React from "react";
import { Slider } from "./components/index";
import { Container } from "./styles/body";
import { data } from "./browse_data.js";
import { Routes, Route } from "react-router-dom";

const Body = () => {
    return (
        <div>
            <Container>
                {/* <Header></Header> */}
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={data.map((item, index) => (
                            <div key={index}>
                                {item.home ? (
                                    <Slider
                                        title={item.title}
                                        url={item.url}
                                    ></Slider>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    ></Route>
                    <Route
                        exact
                        path="/home"
                        element={data.map((item, index) => (
                            <div key={index}>
                                {item.home ? (
                                    <Slider
                                        title={item.title}
                                        url={item.url}
                                    ></Slider>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    ></Route>
                    <Route
                        exact
                        path="/tv-shows"
                        element={data.map((item, index) => (
                            <div key={index}>
                                {item.tv ? (
                                    <Slider
                                        title={item.title}
                                        url={item.url}
                                    ></Slider>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    ></Route>
                    <Route
                        exact
                        path="/movies"
                        element={data.map((item, index) => (
                            <div key={index}>
                                {item.movie ? (
                                    <Slider
                                        title={item.title}
                                        url={item.url}
                                    ></Slider>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    ></Route>
                    <Route
                        exact
                        path="/new-and-popular"
                        element={data.map((item, index) => (
                            <div key={index}>
                                {item.isNew ? (
                                    <Slider
                                        title={item.title}
                                        url={item.url}
                                    ></Slider>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    ></Route>
                    <Route
                        exact
                        path="/my-list"
                        element={data.map((item, index) => (
                            <div key={index}>
                                {item.myList ? (
                                    <Slider
                                        title={item.title}
                                        url={item.url}
                                    ></Slider>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    ></Route>
                </Routes>
            </Container>
        </div>
    );
};

export default Body;
