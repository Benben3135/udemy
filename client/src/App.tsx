import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './view/pages/main-page';
import NotFound from './view/pages/not-found';
import NavBar from './Components/NavBar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thereUser } from './features/user/isUserSlice';
import { auth } from './firebase';
import {setAcronyms,setEmail,setImg, setLogInFalse, setLogInTrue, setName,setUid } from './features/user/userSlice';
import Register from './Components/Register';
import Login from './Components/Login';

import Footer from './Components/Footer/Footer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        console.log("there user!", user)
        if (user.metadata.lastSignInTime && checkSignInTime(user.metadata.lastSignInTime) && user.displayName){
         
          const initials = getaddNameSRT(user.displayName!)
          console.log("your initials baby!" , initials)
          dispatch(setAcronyms(initials))
          dispatch(thereUser())
          dispatch(setEmail(user.email));
          dispatch(setUid(user.uid));
          dispatch(setName(user.displayName));
          dispatch(setImg(user.photoURL))}
          if(localStorage.getItem("userName")){
            dispatch(setLogInTrue());
          }
          
          else{
            if(localStorage.getItem("userName")){
              dispatch(setLogInTrue());
            }
            dispatch(setLogInFalse());
          }
       
      }
     
      else{
        console.log("no token")
        dispatch(setLogInFalse());
      }
    })
  },[])

  const getaddNameSRT = (name:string) => {
    debugger
    const words = name.split(' ');
    const initials = words.map(word => word.charAt(0)).join('');
    return initials;
  }

  const checkSignInTime = (time: string) => {
    // Convert the given date string to a Date object
    const givenDate = new Date(time);

    // Get the current time
    const currentTime = new Date();

    // Calculate the difference between the two timestamps in milliseconds
    const differenceInMilliseconds = currentTime.getTime() - givenDate.getTime();

    // Convert milliseconds to minutes
    const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

    console.log("Difference in minutes:", differenceInMinutes);


    const recentThreshold = 480; 

    // Return true if the sign-in occurred within the threshold, false otherwise
    console.log("are the difference good?" , differenceInMinutes <= recentThreshold)
    return differenceInMinutes <= recentThreshold;
}

  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/register-page' element={<Register />}
           />
           <Route path='/login-page' element={<Login />}
           />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
