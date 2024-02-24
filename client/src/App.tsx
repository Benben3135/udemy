import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./view/pages/main-page";
import NotFound from "./view/pages/not-found";
import NavBar from "./Components/NavBar/NavBar";
import UserPage from "./view/pages/user-page"
import PublicProfilePage from "./view/pages/public-profile-page"
import MyCoursesPage from "./view/pages/my-courses-page"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  setIsTeacherTrue,
  userSelector,
  setWishlist
} from "./features/user/userSlice";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Terms from "./view/pages/terms-page"
import { getUser } from "../api/userApi/usersAPI"
import { checkImgDB } from "../api/userApi/usersAPI"
import { getUserWishlist } from "../api/userApi/usersAPI"

import Footer from "./Components/Footer/Footer";
import TeacherPage from "./view/teacher-page";
import { Archive } from "lucide-react";
import ArchiveCategoreyCourse from "./Components/Courses/ArchiveCategoreyCourse";
import { User } from "./util/interfaces";
import SingleCoursePage from "./Components/Courses/SingleCoursePage";

function App() {
  const dispatch = useDispatch();
  const userRedux = useSelector(userSelector);
  const [teachers, setTeachers] = useState<User[]>()
  const [dataFetched, setDataFetched] = useState(false);
  // useEffect(() => {
  //   const fetchTeachers = async () => {
  //     try {
  //       const result = await getTeachers();
  //       setTeachers(result);
  //       setDataFetched(true);
  //     } catch (error) {
  //       console.error('Error fetching teachers:', error);
  //     }
  //   };

  //   fetchTeachers();
  // }, []);
  // useEffect(() => {
  //   dispathTeachers();
  // }, [])
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
          checkImg(user.uid)
          dispatchUser(user.uid)
          setWishlistFromDB(user.uid)
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

  // const dispathTeachers = async () => {
  //   const result = await getTeachers()
  //   console.log(result);
  //   setTeachers(result);
  //   console.log(teachers)
  // }
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


  const checkImg = async (uid: string) => {
    const result = await checkImgDB(uid);
    if (result) {
      console.log("now testing true", result)
      const newImage = result.image;
      dispatch(setImg(newImage))
    }
    else {
      console.log("now testing false", result)
    }
  }

  const setWishlistFromDB = async (uid: string) => {
    const wishlist = await getUserWishlist(uid);
    if (wishlist.ok) {
      dispatch(setWishlist(wishlist.wishlist))
    }
    else {
      dispatch(setWishlist([]))
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
          <Route path="/user/public-profile" element={<PublicProfilePage />} />
          <Route path="/my-courses/:page" element={<MyCoursesPage />} />
          <Route path="category-page/:selectedCategory" element={<ArchiveCategoreyCourse />} />
          <Route path="course-page/:courseId" element={<SingleCoursePage />} />
          {/* {teachers && teachers.length > 0 && dataFetched ? teachers.map((teacher, index) => { return <Route path={`/user/${teacher.displayName}`} element={<TeacherPage key={teacher.uid} teacher={teacher} />} /> }) : ""} */}
          <Route path="/user/:teachersName" element={<TeacherPage />} />;
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
