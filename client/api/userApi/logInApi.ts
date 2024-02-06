import { auth, provider } from "../../src/firebase";
import { signInWithPopup } from "firebase/auth";

export const loginUser = async () => {
  try {
   const user = signInWithPopup(auth, provider)
   .then 
   ((result)=>{
    console.log(result)
    if(result)
    {return
        ({ok:true})
        }
   })
   
    

  
  } catch (error) {
    // Handle errors here
    console.error("Error creating user:", (error as Error).message);
    throw error;
  }
};
