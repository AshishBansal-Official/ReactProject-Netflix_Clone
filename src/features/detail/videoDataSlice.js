import { createSlice } from "@reduxjs/toolkit";

export const videoDataSlice = createSlice({
    name: "videoData",
    initialState: {
        value: {
            videoTitle: "",
            videoUrl: "",
        },
    },
    reducers: {
        addVideoData: (state, action) => {
            state.value = action.payload;
        },
        emptyVideoData: (state) => {
            state.value = {
                videoTitle: "",
                videoUrl: "",
            };
        },
    },
});

export const { addVideoData, emptyVideoData } = videoDataSlice.actions;

export default videoDataSlice.reducer;
