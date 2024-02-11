import firebase from "firebase/compat/app";
import { auth, provider } from "../../src/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";

export const loginUserWithPopUp = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    if (result) {
      localStorage.setItem("userName", result.user.displayName!);
      console.log("i set the local storage! with" , result.user.displayName)
      return { ok: true };
    }
  } catch (error) {
    // Handle errors here
    console.error("Error signing in with popup:", (error as Error).message);
    throw error;
  }
};

export const loginUserWithEmail = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      return { ok: true };
    }
  } catch (error) {
    // Handle errors here
    return { ok: false };
    console.error("Error creating user:", (error as Error).message);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return { ok: true };
  } catch (error) {
    console.error("Error logging out:", (error as Error).message);
    return { ok: false };
  }
}