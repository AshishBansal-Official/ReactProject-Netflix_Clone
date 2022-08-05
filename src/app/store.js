import { configureStore } from "@reduxjs/toolkit";
import showVideoReducer from "../features/detail/showVideoSlice";
import videoDataReducer from "../features/detail/videoDataSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
    reducer: {
        showVideo: showVideoReducer,
        videoData: videoDataReducer,
        user: userReducer,
    },
});
