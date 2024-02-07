import { auth, provider } from "../../src/firebase";
import { signInWithPopup , signInWithEmailAndPassword } from "firebase/auth";

export const loginUserWithPopUp = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    if (result) {
      localStorage.setItem("userName", result.user.displayName!);
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
    console.log(user);
    if (user) {
      return { ok: true };
    }
  } catch (error) {
    // Handle errors here
    return {ok:false}
    console.error("Error creating user:", (error as Error).message);
    throw error;
  }
};