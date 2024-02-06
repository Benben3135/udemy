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
      if(user) 
      {
        if (user.displayName){ const initials = getaddNameSRT(user.displayName!)
          dispatch(setAcronyms(initials))
          dispatch(thereUser())
          dispatch(setEmail(user.email));
          dispatch(setUid(user.uid));
          dispatch(setName(user.displayName));
          dispatch(setImg(user.photoURL))}
          
          else{

            dispatch(setEmail(user.email));
            dispatch(setUid(user.uid));
            dispatch(setLogInTrue());
          }
       
      }
     
      else{
        console.log("no token")
        dispatch(setLogInFalse());
      }
    })
  },[])

  const getaddNameSRT = (name:string) => {
    const words = name.split(' ');
    const initials = words.map(word => word.charAt(0)).join('');
    return initials;
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
