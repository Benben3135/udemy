import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState{
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    isTeacher: boolean;
    acronyms: string;
    logIn: boolean;
    headline?: string;
    bio?: string;
    website?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    wishlist: [];
}

const initialState:UserState = {
    uid: "",
    displayName:"",
    email:"",
    photoURL:"",
    acronyms:"",
    logIn: false ,
    isTeacher: false,
    headline: "",
    bio: "",
    website: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    wishlist: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUid: (state, action) => {
            state.uid = action.payload
        },
        setName: (state, action) => {
            state.displayName = action.payload
            
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setImg: (state, action) => {
            state.photoURL = action.payload
        },
        setAcronyms: (state, action) => {
            state.acronyms = action.payload
        },
        setLogInFalse: (state, ) => {
            state.logIn  = false
          
        },
        setLogInTrue: (state, ) => {
            state.logIn  = true
          
        },
        setIsTeacherFalse: (state, ) => {
            state.isTeacher  = false
          
        },
        setIsTeacherTrue: (state, ) => {
            state.isTeacher  = true
          
        },
        setWishlist: (state,action) => {
            state.wishlist = action.payload
        }
    }
})

export const { setAcronyms,setEmail, setImg ,setName ,setUid,setLogInFalse , setLogInTrue, setIsTeacherFalse , setIsTeacherTrue, setWishlist} = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;