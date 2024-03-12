import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IsNavbarState{
    value: boolean;
}

const initialState:IsNavbarState = {
    value: true,
};

export const isNavbarSlice = createSlice({
    name: "isNavbar",
    initialState,
    reducers: {
        noNavbar: (state) => {
            state.value = false
        },
    }
})

export const {noNavbar} = isNavbarSlice.actions;

export const isNavbarSelector = (state: RootState) => state.isNavbar.value;

export default isNavbarSlice.reducer;