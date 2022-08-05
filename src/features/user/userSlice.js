import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            uid: "",
            email: "",
            username: "",
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.value.uid = action.payload.uid;
            state.value.email = action.payload.email;
            state.value.username = action.payload.email.split("@")[0];
        },
        resetUser: (state) => {
            state.value = {
                uid: "",
                email: "",
                username: "",
            };
        },
    },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
