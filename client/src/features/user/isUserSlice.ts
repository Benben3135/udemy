import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IsUserState{
    value: boolean;
}

const initialState:IsUserState = {
    value: false,
};

export const isUserSlice = createSlice({
    name: "isUser",
    initialState,
    reducers: {
        thereUser: (state) => {
            state.value = true
        },
        thereNoUser: (state) => {
            state.value = false
        },
    }
})

export const {thereUser , thereNoUser} = isUserSlice.actions;

export const isUserSelector = (state: RootState) => state.isUser.value;

export default isUserSlice.reducer;