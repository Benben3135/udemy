import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IsFooterState{
    value: boolean;
}

const initialState:IsFooterState = {
    value: true,
};

export const isFooterSlice = createSlice({
    name: "isFooter",
    initialState,
    reducers: {
        noFooter: (state) => {
            state.value = false
        },
    }
})

export const {noFooter} = isFooterSlice.actions;

export const isFooterSelector = (state: RootState) => state.isFooter.value;

export default isFooterSlice.reducer;