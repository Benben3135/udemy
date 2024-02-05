import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState{
    uid: string;
    name:string;
    email:string;
    img:string;
    acronyms:string;



}

const initialState:UserState = {
    uid: "",
    name:"",
    email:"",
    img:"",
    acronyms:"",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUid: (state, action) => {
            state.uid = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
            
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setImg: (state, action) => {
            state.img = action.payload
        },
        setAcronyms: (state, action) => {
            state.acronyms = action.payload
        },
    }
})

export const { setAcronyms,setEmail, setImg ,setName ,setUid} = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;