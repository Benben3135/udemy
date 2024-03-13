import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../util/interfaces";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/user/userSlice";
import { getCartCourses } from "../../../api/carts/carts";
import Course, { CourseProps } from "../../Components/Courses/Course";
import { Divider, Skeleton } from "@mui/material";
import { getBestSellerCourses } from "../../../api/coursesApi";
import { Dot, Star } from "lucide-react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { addCourseWishlist } from "../../../api/coursesApi";
import { removeCourseFromCart } from "../../../api/carts/carts";

const CartPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const userRedux = useSelector(userSelector);
  const [cart, setCart] = useState<[CourseProps] | []>([]);
  const [bestIds, setBestIds] = useState<number[]>([]);
  const [updatedRecently, setUpdatedRecently] = useState<number[] | null>();
  const [dis, setDis] = useState<number>();
  const [full, setFull] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState<number[]>([]);


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
    getBestSeller();
    UpdatedRecentlyCheck();
  }, []);

  useEffect(() => {
    getCoursesFromDB();
  }, [user,cart]);


  const getCoursesFromDB = async () => {
    try {
      const courses = await getCartCourses(user!.uid);
      setCart(courses.courses);
    } catch (error) {
      console.error(error);
    }
  };

  
  useEffect(() => {
    if (user && user.wishlist) {
      setWishlist(user.wishlist);
    }
  }, [user?.wishlist]);

  const addToWishlist = async (courseID : number) => {
    const remove = await removeFromCart(courseID)
    const result = await addCourseWishlist(courseID, user!.uid);
    if (result.ok) {
      if (wishlist.includes(courseID)) {
        setWishlist((prevWishlist) =>
          prevWishlist.filter((item) => item !== courseID)
        );
      } else {
        setWishlist((prevWishlist) => [...prevWishlist, courseID]);
      }
    }
  };


  const removeFromCart = async (courseID: number) => {
    try {
      const result: any = await removeCourseFromCart(courseID, user!.uid);
      if (result) {
        setCart(prevCart => prevCart.filter(item => item.courseId !== courseID) as [CourseProps] | []);
        getCoursesFromDB();
      }
    } catch (error) {
      console.error(error);
    }
  };



  const getBestSeller = async () => {
    const bestID: [] = await getBestSellerCourses();
    setBestIds(bestID);
  };

  const UpdatedRecentlyCheck = () => {
    const updatedItems: number[] = []; // Define an array to hold updated items
    cart.forEach((item) => {
      if (hasMonthPassed(item.lastUpdated)) {
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

  return (
    <div className="w-screen h-fit px-[16rem]">
      <div className=" w-full h-fit min-h-screen mx-auto flex justify-start items-start mt-6">
        <div className="items-center w-full mx-auto">
          <div className=" w-full h-fit flex flex-row justify-start items-start">
            <h1 className=" text-[2.6rem] font-bold text-slate-800">
              Shopping Cart
            </h1>
          </div>
          <div className=" flex flex-row justify-center items-start h-fit mt-6 gap-8">
            <div className=" flex-[3]">
              <div className=" w-full flex flex-row items-start justify-start mb-2">
                <h2 className=" font-semibold">
                  {cart.length} Courses in Cart
                </h2>
              </div>
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
                        <div className=" flex-[2] h-full flex flex-col justify-start items-end gap-1">
                          <button onClick={() => removeFromCart(item.courseId)} className="text-Udemyblue-300 text-[0.9rem] hover:text-Udemyblue-400">
                            Remove
                          </button>
                          <button onClick={() => addToWishlist(item.courseId)} className="text-Udemyblue-300 text-[0.9rem] hover:text-Udemyblue-400">
                            Save for Later
                          </button>
                          <button onClick={() => addToWishlist(item.courseId)} className="text-Udemyblue-300 text-[0.9rem] hover:text-Udemyblue-400">
                            Move to Wishlist
                          </button>
                        </div>
                        <div className=" flex-[1.5] flex flex-col justify-start items-start ml-8">
                          <div className="flex flex-row justify-center items-center gap-1">
                            <h2 className=" text-Udemyindigo-300 font-bold text-[1.1rem]">
                              ${item.discountPrice}
                            </h2>
                            <LocalOfferIcon
                              className="scale-75"
                              style={{ color: "#a435f0" }}
                            />
                          </div>
                          <div className="line-through">${item.fullPrice}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Skeleton animation="pulse" variant="rectangular" width={1000} height={1000} />
              )}
            </div>
           {cart.length > 0 ? (<div className=" flex-[0.7] flex flex-col items-start justify-start">
              <h1 className="font-bold text-gray-600">Total:</h1>
              <h1 className=" font-bold text-[2rem]">${dis}</h1>
              <h2 className="line-through text-[1rem] text-gray-600">
                ${full?.toFixed(2)}
              </h2>
              <h2>{((dis! / full!) * 100).toFixed(0)}% off</h2>
              <div
                onClick={() => navigate("/checkout")}
                className=" w-full h-[3rem] mt-2 bg-Udemypurple-300 hover:bg-Udemypurple-400 cursor-pointer text-white font-bold flex flex-row items-center justify-center"
              >
                Checkout
              </div>
              <div className=" bg-gray-300 w-full h-[0.01rem] mt-4"></div>
              <h1 className="mt-4 text-[1rem] font-bold">Promotions</h1>
              <div className=" flex flex-col items-start justify-start w-full h-fit border-dashed border border-gray-200 p-2">
                <h3 className=" text-[0.75rem]">
                  <span className="text-[0.95rem] font-bold text-gray-500">
                    ST12MT030524
                  </span>{" "}
                  is applied
                </h3>
                <h3 className=" text-[0.75rem]">Udemy coupon</h3>
              </div>
              <div className=" flex flex-row items-center justify-center w-full h-fit border border-black mt-2">
                <input className=" flex-[5] h-full outline-none pl-2" />
                <button
                  onClick={() => setError(true)}
                  className=" bg-Udemypurple-300 flex-[1] h-full px-2 py-1 text-white font-bold"
                >
                  Apply
                </button>
              </div>
              {error && (
                <h3 className="text-Udemyred-400 text-[0.72rem] mt-1">
                  The coupon code entered is not valid for this course. Perhaps
                  you used the wrong coupon code?
                </h3>
              )}
            </div>):(
              <div>
                <img src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
