import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Course, { CourseProps } from "../../Components/Courses/Course";
import { User } from "../../util/interfaces";
import { userSelector } from "../../features/user/userSlice";
import { getCartCourses } from "../../../api/carts/carts";
import { Divider, Skeleton } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Check, Dot, Star } from "lucide-react";
import { getBestSellerCourses } from "../../../api/coursesApi";

const CompletionPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const userRedux = useSelector(userSelector);
  const [cart, setCart] = useState<[CourseProps] | []>([]);
  const [dis, setDis] = useState<number>();
  const [full, setFull] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [bestIds, setBestIds] = useState<number[]>([]);
  const [updatedRecently, setUpdatedRecently] = useState<number[] | null>();

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  useEffect(() => {
    calculateFull();
  }, [cart]);

  const calculateFull = () => {
    let price = 0;
    let fullPrice = 0;
    cart.forEach((item) => {
      price += item.discountPrice;
      fullPrice += item.fullPrice;
    });
    setDis(price);
    setFull(fullPrice);
  };

  useEffect(() => {
    getCoursesFromDB();
  }, [user]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    getBestSeller();
    UpdatedRecentlyCheck();
  }, []);

  const getBestSeller = async () => {
    const bestID: [] = await getBestSellerCourses();
    setBestIds(bestID);
  };

  const UpdatedRecentlyCheck = () => {
    const updatedItems: number[] = []; // Define an array to hold updated items
    cart.forEach((item) => {
      if (hasMonthPassed(item.lastUpdated)) {
        console.log("no!");
      } else {
        updatedItems.push(item.courseId); // Add the item to the updatedItems array
      }
    });

    // Assuming setUpdatedRecently is a function to update state
    setUpdatedRecently(updatedItems);
  };

  function hasMonthPassed(dateString: Date): boolean {
    const currentDate = new Date();
    const givenDate = new Date(dateString);

    // Calculate the difference in months
    const monthsDiff =
      (currentDate.getFullYear() - givenDate.getFullYear()) * 12 +
      (currentDate.getMonth() - givenDate.getMonth());

    // Check if the difference is greater than or equal to 1
    return monthsDiff >= 1;
  }

  const getCoursesFromDB = async () => {
    try {
      const courses = await getCartCourses(user!.uid);
      setCart(courses.courses);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center mt-12">
      <div className=" w-[40rem] h-fit flex flex-col items-center justify-start">
        <h1 className=" text-[2.4rem] text-slate-800 font-bold">
          Order confirmation
        </h1>
      </div>
      <div>
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <div key={index} className=" w-full h-fit py-4">
                <Divider />
                <div className=" flex flex-row items-start justify-between w-full h-fit gap-2 mt-4">
                  <img
                    className="flex-[1.6] h-[4rem] mr-2"
                    src={item.course_img}
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-start flex-[8] h-full">
                    <h1 className=" font-bold text-[1.1rem] text-slate-900">
                      {item.courseName}
                    </h1>
                    <h2 className=" text-[0.75rem] text-gray-700 mb-2">
                      by {item.teacherName}
                    </h2>
                    <div className=" flex flex-row items-center justify-center gap-2">
                      {bestIds.includes(item.courseId) && (
                        <div className=" bg-Udemyyellow-200 text-Udemyyellow-500 font-[600] text-[0.8rem] px-[0.3rem] py-[0.2rem]">
                          Bestseller
                        </div>
                      )}

                      {updatedRecently?.includes(item.courseId) && (
                        <div className=" bg-Udemygreen-200 text-Udemygreen-500 font-[600] text-[0.8rem] px-1 py-1">
                          Updated Recently
                        </div>
                      )}
                      <h2 className=" font-bold text-[0.8rem] text-gray-800">
                        {item.rating.toFixed(1)}
                      </h2>
                      <div className=" flex flex-row justify-start items-start h-fit w-fit ml-1 gap-[0.1rem]">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            strokeWidth={"0.8px"}
                            key={index}
                            size="13px"
                            className={
                              index + 1 <= Math.round(item.rating)
                                ? " border-slate-500 p-0 m-0 fill-Udemyorange-400 text-Udemyorange-400"
                                : "text-Udemyorange-400 border-slate-500 p-0 m-0"
                            }
                          />
                        ))}
                      </div>
                      <h2 className="text-gray-600 text-[0.75rem]">
                        (
                        <span className="text-[0.75rem]">
                          {item.numberOfRatings}
                        </span>{" "}
                        ratings)
                      </h2>
                    </div>
                    <div className=" flex flex-row justify-center items-center h-fit w-fit ">
                      <h3 className=" text-[0.78rem] text-slate-600">
                        {item.courseDuration} total hours
                      </h3>
                      <Dot size="35px" color="gray" className="p-0 m-0" />
                      <h3 className=" text-[0.78rem] text-slate-600">
                        {item.articlesNumber * 12} lectures
                      </h3>
                      <Dot size="35px" color="gray" className="p-0 m-0" />
                      <h3 className=" text-[0.78rem] text-slate-600">
                        All levels
                      </h3>
                    </div>
                  </div>

                  <div className=" flex-[1.5] flex flex-col justify-start items-start ml-8">
                    <div className="flex flex-row justify-center items-center gap-1">
                      <h2 className=" text-Udemyindigo-300 font-bold text-[1.1rem]">
                        ${item.discountPrice}
                      </h2>
                      <Check
                        className="scale-75"
                        style={{ color: "#53c91c" }}
                      />
                    </div>
                    <div className="line-through">${item.fullPrice}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Skeleton
            animation="pulse"
            variant="rectangular"
            width={1000}
            height={1000}
          />
        )}
      </div>
      <div onClick={() => navigate("/")} className=" bg-Udemypurple-300 text-white font-bold w-fit h-fit py-4 px-6 hover:bg-Udemypurple-400 cursor-pointer">Back to homepage</div>
    </div>
  );
};

export default CompletionPage;
