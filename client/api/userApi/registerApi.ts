import { auth, provider } from "../../src/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";

export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    debugger;
    sendUserDB(user.uid, name, user.email);
    return user;
  } catch (error) {
    // Handle errors here
    console.error("Error creating user:", (error as Error).message);
    throw error;
  }
};

export const sendUserDB = async (
  uid: string,
  displayName: string | null,
  email: string | null
) => {
  const isTeacher = false;
  const result = await axios.post("/API/users", {
    uid,
    isTeacher,
    displayName,
    email,
  });
  debugger;
  console.log("result from sendUserDB", result);
};
