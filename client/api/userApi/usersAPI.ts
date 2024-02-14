import { auth, provider } from "../../src/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { User } from "../../src/util/interfaces";

export const getUser = async (uid: string) => {
  const isTeacher = false;
  const { data } = await axios.get(`/API/users/${uid}`);
  return data;
};

export const sendNewImg = async (img: string, uid: string) => {
  const { data } = await axios.post("/API/users/changeIMG", { img, uid });
  return data;
};
export const addUserInfo = async (
  uid: string,
  headline?: string,
  bio?: string,
  website?: string,
  twitter?: string,
  facebook?: string,
  linkedin?: string,
  youtube?: string
) => {
  debugger;

  const { data } = await axios.post("/API/users/add-info", {
    uid,
    headline,
    bio,
    website,
    twitter,
    facebook,
    linkedin,
    youtube,
  });
  return data;
};
