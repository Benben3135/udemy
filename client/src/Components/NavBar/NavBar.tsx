import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//UI
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Divider } from "@mui/material";
import Badge from "@mui/material/Badge";
import { categories } from "../../util/categories";
import { useSelector } from "react-redux";
import { isUserSelector } from "../../features/user/isUserSlice";
import { userSelector } from "../../features/user/userSlice";
import { logOut } from "../../../api/userApi/logInApi";
import { getUserWishlistCourses } from "../../../api/userApi/usersAPI";
import NavMenu from "../NavMenu";
import { User } from "../../util/interfaces";
import { CourseProps } from "../Courses/Course";

const NavBar = () => {
  //initials
  const navigate = useNavigate();

  //useStates
  const [glassColor, setGlassColor] = useState<Boolean>(false);
  const [search, setSearch] = useState<string>("");
  // TODO: write regex/search function

  const [user, setUser] = useState<User>();
  const [isUser, setIsUser] = useState<boolean>(false);
  const [isInstructor, setIsInstructor] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [wishlistCourses, setWishlistCourses] = useState<CourseProps[]>([]);
  const isUserRedux = useSelector(isUserSelector);
  const userRedux = useSelector(userSelector);

  //useEffects

  //by redux, we check if there is a user and save it to state:
  useEffect(() => {
    setIsUser(isUserRedux);
  }, [isUserRedux]);

  useEffect(() => {
    if (search?.length > 0) {
      setGlassColor(true);
      localStorage.setItem("recentlySearched", search);
    } else {
      setGlassColor(false);
    }
  }, [search]);
  const handleSearch = () => {
    //navigate to search page
  };

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  useEffect(() => {
    
    if (user && user.wishlist) {
      setWishlist(user.wishlist);
      setTimeout(() => {
        getWishlistCourses();
      }, 2000);
    }
  }, [user?.wishlist]);

  useEffect(() => {
    
    setTimeout(() => {
      getWishlistCourses();
    }, 2000);
  }, [wishlist]);

  useEffect(() => {
    
    setTimeout(() => {
      getWishlistCourses();
    }, 2000);
  }, [wishlistCourses]);


  useEffect(() => {
    console.log("wishlist courses are:", wishlistCourses);
  }, [wishlistCourses]);

  //functions

  const logoutUser = async () => {
    const response = await logOut();

    if (response.ok) {
      window.location.reload();
      navigate("/");
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const getWishlistCourses = async () => {
    const courses = await getUserWishlistCourses(user!.uid);
    const newWishlistCourses = [...courses.wishlistCourses]; // Create a new array
    setWishlistCourses(newWishlistCourses);
  };

  return (
    <div>
      {isUser ? (
        <>
          <div>
            <div className=" w-screen h-[72px] flex flex-row justify-between items-center bg-white px-[1.8rem] shadow-2xl shadow-gray-400">
              <div className=" mr-4">
                <img
                  onClick={() => navigate("/")}
                  className=" bg-white w-[91px] h-[34px] cursor-pointer"
                  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                  alt=""
                />
              </div>
              <div className="group h-[70px] mt-10">
                <button className="text-[0.9rem] h-[54px] pb-10  leading-normal font-normal text-gray-700 font-sans hover:text-Udemyblue-300 pr-3 flex-shrink-0 group-hover:text-Udemyblue-300">
                  Categories
                  <div className="absolute z-50 w-72 top-20 h-[38rem] bg-white border-Udemygray-200 border-[1.4px] shadow-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in hover:scale-100">
                    <div className="h-5/6 w-full flex flex-col items-center justify-senter">
                      {categories.map((selectedCategory) => (
                        <div
                          key={selectedCategory}
                          className="flex flex-row items-center justify-between w-full p-2 text-gray-700 hover:text-Udemyblue-300"
                          onClick={() =>
                            navigate(`/category-page/${selectedCategory}`)
                          }
                          // TODO: category page navigation
                        >
                          <div>{selectedCategory}</div>
                          <div>
                            <KeyboardArrowRightIcon />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
              </div>
              <div className=" h-[3rem] border-[1px] border-solid bg-Udemygray-100 border-Udemygray-500 rounded-[9999px] mx-4 flex-grow-[1] flex flex-row items-center justify-start p-2">
                <div onClick={() => handleSearch()}>
                  <SearchIcon
                    className={
                      glassColor
                        ? "ml-2 text-gray-900 cursor-pointer"
                        : "ml-2 text-gray-500 cursor-not-allowed"
                    }
                  />
                </div>
                <form className="w-[80%] ml-4 h-full flex items-center flex-row-reverse pr-9 bg-none border-0 font-[400] text-[0.9rem]">
                  <input
                    onInput={(ev) =>
                      setSearch((ev.target as HTMLInputElement).value)
                    }
                    placeholder="Search for anything"
                    className="w-full h-full placeholder:text-Udemygray-300 bg-Udemygray-100 border-0 active:border-none outline-none text-Udemygray-500 tracking-tight"
                    type="text"
                  />
                </form>
              </div>
              <div className=" h-full w-32 flex flex-col justify-center items-center">
                {
                  user?.isTeacher ? (
                    <a
                      className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight ml-12"
                      href="/instructor-page"
                    >
                      Instructor
                    </a>
                  ) : (
                    <div onClick={() => navigate("/teach/landing")} className=" flex flex-col group">
                    <a
                      className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight"
                      href="/teach/landing"
                    >
                      Teach on Udemy
                    </a>
                    <div className="absolute scale-0 group-hover:scale-100 transition-all ease-in-out w-[18rem] p-4 right-[20rem] h-[11rem] bg-white border border-gray-500 top-[4.6rem] flex flex-col justify-center items-end">
                      <h1 className=" text-[1.14rem] font-bold leading-7 mb-3">Turn what you know into an opportunity and reach millions around the world.</h1>
                      <button onClick={() => navigate("/teach/landing")} className=" bg-Udemygray-500 w-full h-[5rem] hover:bg-Udemygray-400 text-white">Learn more</button>
                    </div>
                    </div>
                  )
                }
              </div>
              <div className=" h-full w-32 flex flex-col justify-center items-center">
                <a
                  className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight"
                  href="/my-courses/learning"

                >
                  My learning
                </a>
              </div>
              <div className=" flex flex-col group w-12 h-full mt-12 gap-2">
                <div className="w-12">
                  {wishlist.length > 0 ? (
                    <Badge variant="dot" badgeContent="" color="secondary">
                      <FavoriteBorderIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
                    </Badge>
                  ) : (
                    <FavoriteBorderIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
                  )}
                </div>
                {wishlist.length === 0 ? (
                  <div className=" absolute flex flex-col justify-center items-center gap-4 right-44 top-16 scale-0 group-hover:scale-100 w-[17rem] h-24 bg-white border border-slate-200 shadow-lg transition-all ease-in-out">
                    <h2 className=" text-slate-400">Your wishlist is empty.</h2>
                    <div
                      onClick={() => reloadPage()}
                      className=" text-Udemyblue-300 text-sm font-bold hover:text-Udemyblue-400 cursor-pointer"
                    >
                      Explore courses
                    </div>
                  </div>
                ) : (
                  <div className="  absolute flex flex-col justify-center items-center gap-4 right-44 top-16 scale-0 group-hover:scale-100 w-[19rem] h-fit bg-white border border-slate-200 shadow-lg transition-all ease-in-out">
                    <div
                      className={
                        wishlist.length > 3
                          ? "h-fit w-full min-h-20 max-h-[26rem] overflow-y-scroll overflow-x-hidden"
                          : "h-fit w-full min-h-20 max-h-[26rem]"
                      }
                    >
                      {wishlistCourses &&
                        wishlistCourses.map((course, index) => (
                          <div
                            key={index}
                            className=" h-36 bg-white border-b border-slate-300 w-full gap-3 p-2 flex flex-col justify-start items-start"
                          >
                            <div className=" flex flex-row gap-2 items-start justify-start">
                              <img
                                className="w-[60px] h-[60px]"
                                src={course.course_img}
                                alt=""
                              />
                              <div className=" flex flex-col gap-1">
                                <h1 className=" text-[0.95rem] leading-4 font-[600] whitespace-nowrap">
                                  {course.courseName}
                                </h1>
                                <h2 className=" text-[0.7rem] text-slate-500">
                                  {course.teacherName}
                                </h2>
                                <h2 className=" font-bold text-[0.85rem]">
                                  ${course.discountPrice.toFixed(2)}
                                </h2>
                              </div>
                            </div>
                            <div className=" bg-white border border-slate-500 w-full h-10 text-sm font-bold text-center pt-2 hover:bg-Udemygray-200 cursor-pointer">
                              Add to cart
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className=" w-full h-[4.5rem] border-t shadow-lg p-3">
                      <div
                        onClick={() => navigate("/my-courses/wishlist")}
                        className=" w-full h-full text-center text-white cursor-pointer pt-2 font-semibold bg-Udemygray-500 hover:bg-Udemygray-400"
                      >
                        Go to wishlist
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-12">
                <Badge variant="dot" badgeContent="" color="secondary">
                  <ShoppingCartOutlinedIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
                </Badge>
              </div>
              <div className="w-12">
                <Badge variant="dot" badgeContent="" color="secondary">
                  <NotificationsOutlinedIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
                </Badge>
              </div>
              <div className="w-12 group  h-[70px] mt-10">
                <Badge variant="dot" badgeContent="" color="secondary">
                  {user?.photoURL ? (
                    <div className="rounded-full w-8 h-8 flex flex-col items-center justify-center cursor-pointer ">
                      <img
                        className="rounded-full w-8 h-8 flex"
                        src={user.photoURL}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className=" bg-Udemygray-500 rounded-full w-8 h-8 flex flex-col items-center justify-center cursor-pointer ">
                      <h1 className="font-[700] text-Udemywhite font-sans text-sm text-center">
                        {user!.acronyms}
                      </h1>
                    </div>
                  )}
                  <div className="absolute right-0 z-50 top-12 h-fit w-[14rem] bg-white border-Udemygray-200 border-[1.4px] shadow-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in hover:scale-100">
                    <div className="h-5/6 w-full flex flex-col items-center justify-start">
                      <div
                        onClick={() => navigate("/user/edit-profile")}
                        className="flex flex-row items-start justify-center h-24 w-full gap-2 p-3 border-b cursor-pointer"
                      >
                        {user?.photoURL ? (
                          <div className="rounded-full w-16 h-16 flex flex-col items-center justify-center">
                            <img
                              className="rounded-full w-16 h-16"
                              src={user.photoURL}
                              alt=""
                            />
                          </div>
                        ) : (
                          <div className=" bg-Udemygray-500 rounded-full w-16 h-16 flex flex-col items-center justify-center ">
                            <h1 className="font-[700] text-2xl text-Udemywhite font-sans text-center">
                              {user!.acronyms}
                            </h1>
                          </div>
                        )}
                        <div
                          className=" flex flex-col items-strat justify-start"
                          onClick={() => navigate("/user/edit-profile")}
                        >
                          {" "}
                          <h1 className=" font-bold text-slate-800 leading-[1.3rem] hover:text-Udemyblue-300">
                            {user?.name.split(" ")[0]} <br />{" "}
                            {user?.name.split(" ")[1]}
                          </h1>
                          <h2 className=" font-extralight text-xs">
                            {user?.email}
                          </h2>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center h-fit w-full gap-2 p-2 border-b">
                        <div
                          onClick={() => navigate("/my-courses/learning")}
                          className=" h-8 text-sm w-full flex flex-row justify-start items-start group cursor-pointer"
                        >
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            My learning
                          </h3>
                        </div>
                        <div onClick={() => navigate("/my-courses/learning")} className=" h-8 text-sm w-full flex flex-row justify-start items-between group">
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            My Cart
                          </h3>
                          <div className=" w-6 h-6 rounded-full bg-purple-700 text-center text-white">
                            8
                          </div>
                        </div>
                        <div
                          onClick={() => navigate("/my-courses/wishlist")}
                          className=" h-8 text-sm w-full flex flex-row justify-start items-start group"
                        >
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            Wishlist
                          </h3>
                        </div>
                        {/* TODO: instructor dashboard if redux tell that it is an instructor */}
                        {/* {<div className=" h-8 text-sm w-full flex flex-row justify-start items-start group">
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">Instructor Dashboard</h3>
                        </div>} */}
                      </div>
                      <div className="flex flex-col items-start justify-center h-fit w-full gap-2 p-2 border-b">
                        <div className=" h-8 text-sm w-full flex flex-row justify-start items-start group">
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            Account settings
                          </h3>
                        </div>
                        <div className=" h-8 text-sm w-full flex flex-row justify-start items-between group">
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            Payment methods
                          </h3>
                          <div className=" w-6 h-6 rounded-full bg-purple-700 text-center text-white">
                            8
                          </div>
                        </div>
                        <div className=" h-8 text-sm w-full flex flex-row justify-start items-center group">
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            Purchase history
                          </h3>
                        </div>
                        <div className="flex flex-col items-start justify-center h-fit w-full border-b"></div>
                        <a
                          href="/user/public-profile"
                          className=" h-8 text-sm w-full flex flex-row justify-start items-center group"
                        >
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            Public profile
                          </h3>
                        </a>
                        <a
                          href="/user/edit-profile"
                          className=" h-8 text-sm w-full flex flex-row justify-start items-between group"
                        >
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            Edit profile
                          </h3>
                        </a>
                        <div className="flex flex-col items-start justify-center h-fit w-full gap-2 border-b"></div>
                        <a
                          href="https://support.udemy.com/hc/en-us"
                          className=" h-8 text-sm w-full flex flex-row justify-start items-center group"
                        >
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            Help
                          </h3>
                        </a>
                        <div
                          onClick={() => logoutUser()}
                          className=" h-8 text-sm w-full flex flex-row justify-start items-start group"
                        >
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                            Log out
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Badge>
              </div>
            </div>
            <Divider className=" mt-0 pt-0" />
          </div>
          <NavMenu />
        </>
      ) : (
        <div>
          <div className=" w-screen h-[72px] flex flex-row justify-between items-center bg-white px-[1.8rem]">
            <div className=" mr-4">
              <img
                className=" w-[91px] h-[34px]"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt=""
              />
            </div>
            <div className="group h-[70px] mt-10">
              <button className="text-[0.9rem] h-[74px] pb-10  leading-normal font-normal text-gray-700 font-sans hover:text-Udemyblue-300 pr-3 flex-shrink-0 group-hover:text-Udemyblue-300 ">
                Categories
                <div className=" bg-white absolute z-50 w-72 top-20 h-[38rem]  border-Udemygray-200 border-[1.4px] shadow-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in hover:scale-100">
                  <div className="h-5/6 w-full flex flex-col items-center justify-senter">
                    {categories.map((selectedCategory) => (
                      <div
                        key={selectedCategory}
                        className="flex flex-row items-center justify-between w-full p-2 text-gray-700 hover:text-Udemyblue-300"
                        onClick={() =>
                          navigate(`/category-page/${selectedCategory}`)
                        }
                        // TODO: category page navigation
                      >
                        <div>{selectedCategory}</div>
                        <div>
                          <KeyboardArrowRightIcon />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            </div>
            <div className=" h-[3rem] border-[1px] border-solid bg-Udemygray-100 border-Udemygray-500 rounded-[9999px] mx-4 flex-grow-[1] flex flex-row items-center justify-start p-2">
              <div onClick={() => handleSearch()}>
                <SearchIcon
                  className={
                    glassColor
                      ? "ml-2 text-gray-900 cursor-pointer"
                      : "ml-2 text-gray-500 cursor-not-allowed"
                  }
                />
              </div>
              <form className="w-[80%] ml-4 h-full flex items-center flex-row-reverse pr-9 bg-none border-0 font-[400] text-[0.9rem]">
                <input
                  onInput={(ev) =>
                    setSearch((ev.target as HTMLInputElement).value)
                  }
                  placeholder="Search for anything"
                  className="w-full h-full placeholder:text-Udemygray-300 bg-Udemygray-100 border-0 active:border-none outline-none text-Udemygray-500 tracking-tight"
                  type="text"
                />
              </form>
            </div>
            <div className=" h-full w-32 flex flex-col justify-center items-center">
              <a
                className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight"
                href="teaching"
              >
                Teach on Udemy
              </a>
            </div>
            <div className="w-12">
              <Badge variant="dot" badgeContent="" color="secondary">
                <ShoppingCartOutlinedIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
              </Badge>
            </div>
            <div className=" h-10 min-w-20 mx-1">
              <button
                onClick={() => navigate("/login-page")}
                className=" w-full h-full p-4 border-[1px] border-solid border-black flex flex-row items-center justify-center font-bold font-sans hover:bg-Udemygray-200"
              >
                Log in
              </button>
            </div>
            <div className=" h-10 min-w-20 mx-1">
              <button
                onClick={() => navigate("/register-page")}
                className=" w-full h-full p-4 border-[1px] border-solid text-Udemywhite bg-Udemygray-600 border-black flex flex-row items-center justify-center font-bold font-sans hover:bg-Udemygray-400"
              >
                Sign up
              </button>
            </div>
          </div>
          <Divider className=" mt-0 pt-0" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
