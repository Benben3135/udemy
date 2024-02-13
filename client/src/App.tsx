import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./view/pages/main-page";
import NotFound from "./view/pages/not-found";
import NavBar from "./Components/NavBar/NavBar";
import UserPage from "./view/pages/user-page"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { thereUser } from "./features/user/isUserSlice";
import { auth } from "./firebase";
import {
  setAcronyms,
  setEmail,
  setImg,
  setLogInFalse,
  setLogInTrue,
  setName,
  setUid,
  setIsTeacherFalse,
  setIsTeacherTrue
} from "./features/user/userSlice";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Terms from "./view/pages/terms-page"
import { getUser } from "../api/userApi/usersAPI"

import Footer from "./Components/Footer/Footer";
import TeacherPage from "./view/teacher-page";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (
          user.metadata.lastSignInTime &&
          checkSignInTime(user.metadata.lastSignInTime) &&
          user.displayName
        ) {
          const initials = getaddNameSRT(user.displayName!);
          dispatch(setAcronyms(initials));
          dispatch(thereUser());
          dispatch(setEmail(user.email));
          dispatch(setUid(user.uid));
          dispatch(setName(user.displayName));
          dispatch(setImg(user.photoURL));
          dispatchUser(user.uid)
          if (localStorage.getItem("userName")) {
            dispatch(setLogInTrue());
          } else {
            dispatch(setLogInFalse());
          }
        }

      } else {
        if (localStorage.getItem("userName")) {
          dispatch(setLogInTrue());
        } else {
          dispatch(setLogInFalse());
        }
      }
    });
  }, []);

  const dispatchUser = async (uid: string) => {
    const result = await getUser(uid);
    const teacher = result.user.isTeacher

    if (teacher) {

      dispatch(setIsTeacherTrue());
    }
    else {
      dispatch(setIsTeacherFalse());
    }
  }


  const getaddNameSRT = (name: string) => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0)).join("");
    const initialsUpper = initials.toUpperCase();
    return initialsUpper;
  };

  const checkSignInTime = (time: string) => {
    const givenDate = new Date(time);
    const currentTime = new Date();
    // Calculate the difference between the two timestamps in milliseconds
    const differenceInMilliseconds =
      currentTime.getTime() - givenDate.getTime();
    const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
    console.log("Difference in minutes:", differenceInMinutes);
    const recentThreshold = 480;
    // Return true if the sign-in occurred within the threshold, false otherwise
    console.log(
      "are the difference good?",
      differenceInMinutes <= recentThreshold
    );
    return differenceInMinutes <= recentThreshold;
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register-page" element={<Register />} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/terms-Page" element={<Terms />} />
          <Route path="/user/edit-profile" element={<UserPage />} />
          <Route path="/user/:userName" element={<TeacherPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
