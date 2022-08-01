import { configureStore } from "@reduxjs/toolkit";
import showVideoReducer from "../features/detail/showVideoSlice";
import videoDataReducer from "../features/detail/videoDataSlice";

export default configureStore({
    reducer: {
        showVideo: showVideoReducer,
        videoData: videoDataReducer,
    },
});
