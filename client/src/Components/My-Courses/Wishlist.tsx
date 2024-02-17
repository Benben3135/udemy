import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/user/userSlice";
import { User } from "../../util/interfaces";
import { CourseProps } from "../Courses/Course";
import { getUserWishlistCourses } from "../../../api/userApi/usersAPI";
import { useNavigate } from "react-router-dom";
import { Dot, Heart, Search, Star } from "lucide-react";
import { getBestSellerCourses } from "../../../api/coursesApi";
import { addCourseWishlist } from "../../../api/coursesApi";

const Wishlist = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const userRedux = useSelector(userSelector);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [wishlistCourses, setWishlistCourses] = useState<CourseProps[]>([]);
  const [coursesRatings, setCoursesRatings] = useState<[]>([]);
  const [ratingRounded, setRatingRounded] = useState<number[]>();
  const [bestIds, setBestIds] = useState<number[]>([]);
  const [search, setSearch] = useState<string>("");
  const [resultCourses, setResultCourses] = useState<CourseProps[]>([]);

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  useEffect(() => {
    if (user && user.wishlist) {
      setWishlist(user.wishlist);
      getWishlistCourses();
    }
  }, [user?.wishlist]);

  useEffect(() => {
    if (wishlistCourses.length > 0) {
      setRatings();
    }
  }, [wishlistCourses]);

  useEffect(() => {
    getBestSeller();
  }, []);

  useEffect(() => {
    if (search.length > 1) {
      searchResults();
    } else {
      setResultCourses([]);
    }
  }, [search]);

  const getWishlistCourses = async () => {
    const courses = await getUserWishlistCourses(user!.uid);
    const wishlistCourses: [CourseProps] = courses.wishlistCourses;
    setWishlistCourses(wishlistCourses);
  };

  const setRatings = () => {
    debugger;
    const ratings: number[] = [];
    wishlistCourses.forEach((course) => {
      const rating = course.rating;
      const roundedRating = Math.round(rating);
      ratings.push(roundedRating);
    });
    setRatingRounded(ratings);
  };

  useEffect(() => {
    console.log("your result courses are:", resultCourses);
  }, [resultCourses]);

  const getBestSeller = async () => {
    const bestID: [] = await getBestSellerCourses();
    setBestIds(bestID);
  };

  const searchResults = () => {
    const searchResultCourses = wishlistCourses.filter((course) =>
      course.courseName.includes(search)
    );
    setResultCourses(searchResultCourses);
  };

  const addToWishlist = async (id: number, uid: string) => {
    const result = await addCourseWishlist(id, uid);
    if (result.ok) {
      if (wishlist.includes(id)) {
        debugger
        setWishlist((prevWishlist) =>
          prevWishlist.filter((item) => item !== id)
        );
        window.location.reload();
      } else {
        debugger
        setWishlist((prevWishlist) => [...prevWishlist, id]);
        window.location.reload();
      }
    }
    else{
      window.location.reload();
    }
  };

  return (
    <>
      {wishlist && wishlist.length > 0 && (
        <div className=" w-full h-fit mt-8 min-h-[30rem] flex flex-col justify-start items-start">
          <div className=" h-fit flex flex-col w-[50%] items-end justify-end mx-auto">
            <div className=" w-full mx-auto h-12 flex flex-row items-center justify-end p-1 min-w-[50rem]">
              <div className=" h-full w-[14rem] border border-black flex flex-row pl-2 bg-white">
                <input
                  type="text"
                  placeholder="Search my courses"
                  className=" h-full outline-none  w-5/6 placeholder:text-sm placeholder:text-slate-600"
                  onInput={(ev) =>
                    setSearch((ev.target as HTMLInputElement).value)
                  }
                />
                <div className=" w-1/6 h-full bg-Udemygray-500 hover:bg-Udemygray-400 flex flex-col justify-center items-center">
                  <Search color="white" size="16px" />
                </div>
              </div>
            </div>
            {resultCourses.length > 0 && (
              <div className=" w-full mx-auto h-12 flex flex-row items-center justify-end p-1 min-w-[50rem] mt-4">
                <div className="w-[16rem] h-fit bg-white border border-slate-200 shadow-lg p-2">
                  {resultCourses.map((course, index) => (
                    // TODO: onclick go to course page!
                    <div
                      className=" h-fit p-1 hover:text-Udemyindigo-300 cursor-pointer"
                      key={index}
                    >
                      {course.courseName
                        .split(new RegExp(`(${search})`, "gi"))
                        .map((part, i) => (
                          <span
                            key={i}
                            style={{
                              fontWeight:
                                part.toLowerCase() === search.toLowerCase()
                                  ? "bold"
                                  : "normal",
                            }}
                          >
                            {part}
                          </span>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className=" w-[50%] min-w-[50rem] h-fit min-h-20 mx-auto mt-10 grid grid-cols-4 gap-2">
            {wishlistCourses.map((course, index) => (
              <div
                key={index}
                className=" h-[17rem] flex flex-col justify-start items-start gap-1 group cursor-pointer mb-12"
              >
                <div
                  className=" w-full flex flex-col items-end justify-start p-2 h-[8.5rem] group-hover:grayscale-[40%] group-hover:opacity-70 transition-all ease-in-out"
                  style={{
                    backgroundImage: `url(${course.course_img})`,
                    backgroundSize: "cover",
                  }}
                >
                  <Heart
                    onClick={() => addToWishlist(course.courseId, user!.uid)}
                    className="fill-white stroke-none"
                  />
                </div>

                <h1 className=" font-bold text-[1.1rem]">
                  {course.courseName}
                </h1>
                <h2 className=" text-[0.7rem] text-slate-600">
                  {course.teacherName}
                </h2>
                <div className=" w-full flex flex-row h-fit justify-start items-center">
                  <div className=" text-[0.9rem] font-bold">
                    {course.rating.toFixed(1)}
                  </div>
                  <div className=" flex flex-row justify-center items-start h-fit w-fit ml-1 gap-[0.1rem]">
                    {ratingRounded &&
                      [...Array(5)].map((_, starIndex) => (
                        <Star
                          strokeWidth={"0.8px"}
                          key={starIndex}
                          size="15px"
                          className={
                            starIndex + 1 <= ratingRounded[index]
                              ? " border-slate-500 p-0 m-0 fill-Udemyorange-400 text-Udemyorange-400"
                              : "text-Udemyorange-400 border-slate-500 p-0 m-0"
                          }
                        />
                      ))}
                  </div>
                  <div className=" text-[0.8rem] text-slate-500 ml-1">
                    ({course.numberOfRatings})
                  </div>
                </div>
                <div className=" flex flex-row h-fit w-full justify-start items-center">
                  <h2 className="text-[0.75rem] text-slate-600">
                    {course.courseDuration} total hours
                  </h2>
                  <Dot size="14px" color="gray" />
                  <h2 className="text-[0.75rem] text-slate-600">
                    {course.articlesNumber * 12} lectures
                  </h2>
                </div>
                <div className=" text-[1.06rem] font-bold">
                  ${course.discountPrice.toFixed(2)}
                </div>
                {bestIds.includes(course.courseId) && (
                  <div className=" text-center w-fit px-2 py-1 text-xs font-bold text-slate-700 bg-Udemyyellow-200">
                    Bestseller
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {wishlist && wishlist.length === 0 && (
        <div className="w-full h-[25rem] bg-white flex flex-col justify-center items-center">
          <div
            onClick={() => navigate("/")}
            className=" w-[13rem] h-[3.2rem] text-center text-white font-bold pt-2 cursor-pointer text-[1.1rem] bg-Udemygray-500 hover:bg-Udemygray-400"
          >
            Browse courses now
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;
