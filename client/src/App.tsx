import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./view/pages/main-page";
import NotFound from "./view/pages/not-found";
import NavBar from "./Components/NavBar/NavBar";
import UserPage from "./view/pages/user-page";
import PublicProfilePage from "./view/pages/public-profile-page";
import MyCoursesPage from "./view/pages/my-courses-page";
import TeachOnUdemyLandingPage from "./view/pages/teachOnLandingPage";
import CreateCoursePage from "./view/pages/create-course";
import InstructorPage from "./view/pages/instructor-page";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thereUser } from "./features/user/isUserSlice";
import { isNavbarSelector } from "./features/user/navbarSlice";
import { isFooterSelector } from "./features/user/footerSlice";
import { auth } from "./firebase";
import { loadStripe, Stripe } from "@stripe/stripe-js";

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
  setWishlist,
} from "./features/user/userSlice";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Terms from "./view/pages/terms-page";
import { getUser } from "../api/userApi/usersAPI";
import { checkImgDB } from "../api/userApi/usersAPI";
import { getUserWishlist } from "../api/userApi/usersAPI";

import Footer from "./Components/Footer/Footer";
import TeacherPage from "./view/teacher-page";
import { Archive } from "lucide-react";
import ArchiveCategoreyCourse from "./Components/Courses/ArchiveCategoreyCourse";
import { User } from "./util/interfaces";
import SingleCoursePage from "./Components/Courses/SingleCoursePage";
import CheckoutPage from "./view/pages/Checkout-page";
import CartPage from "./view/pages/Cart-page";
import { Elements } from "@stripe/react-stripe-js";
import CompletionPage from "./view/pages/completion-page";

function App() {
  const dispatch = useDispatch();
  const stripePromise = loadStripe(
    'pk_test_51Ob07vGPw5IknvcVtIUwKmD9eGipq3c6RvsO5jjDuWkUWVtBeTCEfYosk42VsZka5bZpvNZ0O9FKJ63CO8R5qTh900nqsKvmNq'
  );


  const navbarRedux = useSelector(isNavbarSelector);
  const footerRedux = useSelector(isFooterSelector);
  const userRedux = useSelector(userSelector);
  const [teachers, setTeachers] = useState<User[]>();
  const [dataFetched, setDataFetched] = useState(false);
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
    } else {
      console.log("now testing false", result);
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
