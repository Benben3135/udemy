import { auth, provider } from "../../src/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
console.log(user)
    return user;
  
  } catch (error) {
    // Handle errors here
    console.error("Error creating user:", (error as Error).message);
    throw error;
  }
};
