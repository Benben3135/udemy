import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { isFooterSelector } from "./features/user/footerSlice";
import { thereUser } from "./features/user/isUserSlice";
import { isNavbarSelector } from "./features/user/navbarSlice";
import { auth } from "./firebase";
import CreateCoursePage from "./view/pages/create-course";
import InstructorPage from "./view/pages/instructor-page";
import MainPage from "./view/pages/main-page";
import MyCoursesPage from "./view/pages/my-courses-page";
import NotFound from "./view/pages/not-found";
import PublicProfilePage from "./view/pages/public-profile-page";
import TeachOnUdemyLandingPage from "./view/pages/teachOnLandingPage";
import UserPage from "./view/pages/user-page";

import { checkImgDB, getUser, getUserWishlist } from "../api/userApi/usersAPI";
import Login from "./Components/Login";
import Register from "./Components/Register";
import {
  setAcronyms,
  setEmail,
  setImg,
  setIsTeacherFalse,
  setIsTeacherTrue,
  setLogInFalse,
  setLogInTrue,
  setName,
  setUid,
  setWishlist,
} from "./features/user/userSlice";
import Terms from "./view/pages/terms-page";

import ArchiveCategoreyCourse from "./Components/Courses/ArchiveCategoreyCourse";
import SingleCoursePage from "./Components/Courses/SingleCoursePage";
import Footer from "./Components/Footer/Footer";
import CartPage from "./view/pages/Cart-page";
import CheckoutPage from "./view/pages/Checkout-page";
import CompletionPage from "./view/pages/completion-page";
import TeacherPage from "./view/teacher-page";

function App() {
  const dispatch = useDispatch();



  const navbarRedux = useSelector(isNavbarSelector);
  const footerRedux = useSelector(isFooterSelector);
  const [isNavbar, setIsNavbar] = useState<boolean>(true);
  const [isFooter, setIsfooter] = useState<boolean>(true);
  

  useEffect(() => {
    setIsNavbar(navbarRedux);
  }, [navbarRedux]);

  useEffect(() => {
    setIsfooter(footerRedux);
  }, [footerRedux]);

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
          checkImg(user.uid);
          dispatchUser(user.uid);
          setWishlistFromDB(user.uid);
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
    console.log(unsubscribe)
  }, []);

  const dispatchUser = async (uid: string) => {
    const result = await getUser(uid);
    const teacher = result.user.isTeacher;

    if (teacher) {
      dispatch(setIsTeacherTrue());
    } else {
      dispatch(setIsTeacherFalse());
    }
  };

  const checkImg = async (uid: string) => {
    const result = await checkImgDB(uid);
    if (result) {
      const newImage = result.image;
      dispatch(setImg(newImage));
    }
  };

  const setWishlistFromDB = async (uid: string) => {
    const wishlist = await getUserWishlist(uid);
    if (wishlist.ok) {
      dispatch(setWishlist(wishlist.wishlist));
    } else {
      dispatch(setWishlist([]));
    }
  };

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

    return differenceInMinutes <= recentThreshold;
  };

  return (
    <>
        <BrowserRouter>
          {isNavbar && <NavBar />}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/register-page" element={<Register />} />
            <Route path="/login-page" element={<Login />} />
            <Route path="/terms-Page" element={<Terms />} />
            <Route path="/instructor-page" element={<InstructorPage />} />
            <Route path="/create-course" element={<CreateCoursePage />} />
            <Route path="/user/edit-profile" element={<UserPage />} />
            <Route
              path="/user/public-profile"
              element={<PublicProfilePage />}
            />
            <Route path="/my-courses/:page" element={<MyCoursesPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/completion" element={<CompletionPage/>}/>
            <Route path="/cart" element={<CartPage/>} />
            <Route
              path="category-page/:selectedCategory"
              element={<ArchiveCategoreyCourse />}
            />
            <Route
              path="course-page/:courseId"
              element={<SingleCoursePage />}
            />
            {/* {teachers && teachers.length > 0 && dataFetched ? teachers.map((teacher, index) => { return <Route path={`/user/${teacher.displayName}`} element={<TeacherPage key={teacher.uid} teacher={teacher} />} /> }) : ""} */}
            <Route path="/user/:teachersName" element={<TeacherPage />} />;
            <Route
              path="/teach/landing"
              element={<TeachOnUdemyLandingPage />}
            />
          </Routes>
          {isFooter && <Footer />}
        </BrowserRouter>
    </>
  );
}

export default App;
