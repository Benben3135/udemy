import React, { useEffect, useState } from "react";
import { getMostPopularCourse } from "../../api/coursesApi";
import { CourseProps } from "./Courses/Course";
import { Dot, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedCourse = () => {
  const [course, setCourse] = useState<CourseProps>();
  const [lastUpdatedString, setLastUpdatedString] = useState<string>("");
  const [ratingRounded, setRatingRounded] = useState<number>();
  const navigate = useNavigate()

  const getMostPopular = async () => {
    const mostPopularCourse = await getMostPopularCourse();
    if (mostPopularCourse.ok) {
      const newCourse = mostPopularCourse.courses[0];
      setCourse(newCourse);
    }
  };

  useEffect(() => {
    getMostPopular();
  }, []);

  useEffect(() => {
    if (course != undefined) {
      lastUpdatedSTR();
      roundRating();
    }
  }, [course]);

  const lastUpdatedSTR = () => {
    debugger;
    const lastUpdatedDate = new Date(course!.lastUpdated);
    const options = { month: "long", year: "numeric" };
    const formattedDate = lastUpdatedDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    setLastUpdatedString(formattedDate);
  };

  const roundRating = () => {
    const rating = course!.rating;
    const roundedRating = Math.round(rating);
    setRatingRounded(roundedRating);
  };

  return (
    <>
      {lastUpdatedString && course && (
        <div onClick={() => navigate(`/course-page/${course.courseId}`)} className=" h-full w-4/5 flex flex-row justify-start items-start">
          <img className=" h-full w-[45%]" src={course?.course_img} alt="" />
          <div className=" flex flex-col h-full items-between justify-between ml-4">
            <div className=" flex flex-col items-start justify-start ">
              <h1 className=" text-[1.66rem] font-bold">
                {course?.courseName}
              </h1>
              <h2 className="">{course?.mainDescription}</h2>
              <h3 className=" text-sm text-gray-600 mt-2">
                by {course?.teacherName}
              </h3>
              <div className=" flex flex-row justify-start items-center w-full h-fit text-xs mt-1">
                <h3 className=" text-Udemygreen-400 mr-2">
                  Updated{" "}
                  <span className=" font-bold">{lastUpdatedString}</span>
                </h3>
                <h3>
                  <span className=" text-[0.9rem] text-gray-600">
                    {course.courseDuration}
                  </span>{" "}
                  total hours
                </h3>
                <Dot size="10px" color="gray" />
                <h3>
                  <span className=" text-[0.9rem] text-gray-600">
                    {course.articlesNumber * 40}
                  </span>{" "}
                  lectures{" "}
                </h3>
                <Dot size="10px" color="gray" />
                <h3>intermediate</h3>
              </div>
              <div className=" w-full flex flex-row h-fit mt-2 justify-start items-center">
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
                          starIndex + 1 <= ratingRounded
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
            </div>
            <div className=" flex flex-row gap-2 text-xl">
              <h2 className=" font-bold text-slate-900">${course.discountPrice.toFixed(2)}</h2>
              <h2 className=" text-slate-600 line-through">${course.fullPrice.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedCourse;
