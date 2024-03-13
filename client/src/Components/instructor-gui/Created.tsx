import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/user/userSlice";
import { User } from "../../util/interfaces";
import { CourseProps } from "../Courses/Course";
import { getUserWishlistCourses } from "../../../api/userApi/usersAPI";
import { Dot, Heart, Search, Star } from "lucide-react";
import { getAllPurchasedCourses } from "../../../api/carts/carts";
import { getAllCoursesByInstructor } from "../../../api/coursesApi";

const Courses = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const userRedux = useSelector(userSelector);
  const [created, setCreated] = useState<CourseProps[]>([]);
  const [coursesRatings, setCoursesRatings] = useState<[]>([]);
  const [ratingRounded, setRatingRounded] = useState<number[]>();
  const [resultCourses, setResultCourses] = useState<CourseProps[]>([]);

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  useEffect(() => {
    if (user && user.uid) {
      getPurchasedCourses();
    }
  }, [user]);

  useEffect(() => {
  }, [created]);

  useEffect(() => {
    if (created.length > 0) {
      setRatings();
    }
  }, [created]);

  const getPurchasedCourses = async () => {
    const courses = await getAllCoursesByInstructor(user!.name);
    const createdCourses: CourseProps[] = courses;
    setCreated(createdCourses);
  };

  const setRatings = () => {
    debugger;
    const ratings: number[] = [];
    created.forEach((course) => {
      const rating = course.rating;
      const roundedRating = Math.round(rating);
      ratings.push(roundedRating);
    });
    setRatingRounded(ratings);
  };

  return (
    <>
      {created && created.length > 0 && (
        <div className=" w-full h-fit mt-8 min-h-[30rem] flex flex-col justify-start items-start">
          <div className=" w-full h-fit flex justify-center items-center text-center text-[2rem] font-bold text-slate-800 mt-8">
            Courses by {user.name}
          </div>
          <div className=" w-[50%] min-w-[50rem] h-fit min-h-20 mx-auto mt-10 grid grid-cols-4 gap-2">
            {created.map((course, index) => (
              <div
                onClick={() => navigate(`/course-page/${course.courseId}`)}
                key={index}
                className=" h-[17rem] flex flex-col justify-start items-start gap-1 group cursor-pointer mb-12"
              >
                <div
                  className=" w-full flex flex-col items-end justify-start p-2 h-[8.5rem] group-hover:grayscale-[40%] group-hover:opacity-70 transition-all ease-in-out"
                  style={{
                    backgroundImage: `url(${course.course_img})`,
                    backgroundSize: "cover",
                  }}
                ></div>

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
              </div>
            ))}
          </div>
        </div>
      )}
      {created && created.length === 0 && (
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

export default Courses;
