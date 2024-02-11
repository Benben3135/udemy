import { auth, provider } from "../../src/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";


export const getUser = async (uid:string) => {
    const isTeacher = false;
    const {data} = await axios.get(`/API/users/${uid}`)
    return data;
  }
  