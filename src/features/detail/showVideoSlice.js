import { createSlice } from "@reduxjs/toolkit";

export const showVideoSlice = createSlice({
    name: "showVideo",
    initialState: {
        value: false,
    },
    reducers: {
        displayVideo: (state) => {
            state.value = true;
        },
        hideVideo: (state) => {
            state.value = false;
        },
    },
});

export const { displayVideo, hideVideo } = showVideoSlice.actions;

export default showVideoSlice.reducer;
