import { Check, Dot, Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { getBestSellerCourses } from "../../../api/coursesApi";
import { addCourseWishlist } from "../../../api/coursesApi";

import { useSelector } from "react-redux";
import { setUid, userSelector } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import AddToCart from "../carts/AddToCart";
import { addCourseToCart } from "../../../api/carts/carts";
import { User } from "../../util/interfaces";

export interface CourseProps {
  courseId: number,
  teacherId: string,
  courseName: string,
  teacherName: string,
  mainDescription: string,
  rating: number,
  numberOfRatings: number,
  numberOfStudents: number,
  lastUpdated: Date,
  language: string,
  subtitlesLanguage: string,
  fullPrice: number,
  discountPrice: number,
  secondDescriptions: string[],
  courseDuration: number,
  articlesNumber: number,
  downloadableResourcesNumber: number,
  courseContent: string,
  requirements: string[],
  fullDescription: string,
  course_img: string,
  category: string,
}

export const Course = ({
  courseId,
  teacherId,
  courseName,
  teacherName,
  mainDescription,
  rating,
  numberOfRatings,
  numberOfStudents,
  lastUpdated,
  language,
  subtitlesLanguage,
  fullPrice,
  discountPrice,
  secondDescriptions,
  courseDuration,
  articlesNumber,
  downloadableResourcesNumber,
  courseContent,
  requirements,
  fullDescription,
  course_img,
  category,

}: CourseProps) => {
  const [bestIds, setBestIds] = useState<number[]>([]);
  const [lastUpdatedString, setLastUpdatedString] = useState<string>("");
  const userRedux = useSelector(userSelector);
const [user, setUser] = useState<User>();
  const [wishlist, setWishlist] = useState<number[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    setUser(userRedux)
  },[userRedux])

  useEffect(() => {
    if (user && user.uid) {
      setUid(user.uid);
    }
  }, [user?.uid]);
  useEffect(()=>{
    if(userRedux != undefined
      ){setUser(userRedux)}
  },[userRedux])
  useEffect(() => {
    console.log(id, title);
    starColor();
  }, []);


  useEffect(() => {
    if (user && user.wishlist) {
      setWishlist(user.wishlist);
    }
  }, [user?.wishlist]);

  const getBestSeller = async () => {
    const bestID: [] = await getBestSellerCourses();
    setBestIds(bestID);
  };
  useEffect(() => {
    if (user && user.uid) {
      setUid(user.uid);
    }
  }, [user?.uid]);

  const lastUpdatedSTR = () => {
    const lastUpdatedDate = new Date(lastUpdated);
    const options = { month: "long", year: "numeric" };
    const formattedDate = lastUpdatedDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    setLastUpdatedString(formattedDate);
  };

  const handleAddToCartInternal = async () => {
    console.log("Adding to cart...");
    try {
      debugger
      await addCourseToCart(courseId, user!.uid);
      console.log("Course added to cart successfully!");
    } catch (error) {
      console.error("Failed to add course to cart", error);
    }
  };

  const addToWishlist = async () => {
    const result = await addCourseWishlist(courseId, user!.uid);
    if (result.ok) {
      if (wishlist.includes(courseId)) {
        setWishlist((prevWishlist) =>
          prevWishlist.filter((item) => item !== courseId)
        );
      } else {
        setWishlist((prevWishlist) => [...prevWishlist, courseId]);
      }
    }
  };

  useEffect(() => {
    getBestSeller();
    lastUpdatedSTR();
  }, []);

  return (
    <div className="group flex flex-row">
      <div
        onClick={() => navigate(`/course-page/${courseId}`)}
        key={courseId}
        className=" h-full w-full cursor-pointer"
      >
        <img className=" h-[9.6rem] w-full" src={course_img} alt="" />
        <h2 className=" font-bold text-[1.1rem] text-slate-800">{courseName}</h2>
        <p className=" text-xs font-light text-slate-800">{teacherName}</p>
        <div className=" flex flex-row justify-start items-center mt-1">
          <div className=" text-sm font-bold">{rating.toFixed(2)}</div>
          <div className=" flex flex-row justify-start items-start h-fit w-fit ml-1 gap-[0.1rem]">
            {[...Array(5)].map((_, index) => (
              <Star
                strokeWidth={"0.8px"}
                key={index}
                size="15px"
                className={
                  index + 1 <= Math.round(rating)
                    ? " border-slate-500 p-0 m-0 fill-Udemyorange-400 text-Udemyorange-400"
                    : "text-Udemyorange-400 border-slate-500 p-0 m-0"
                }
              />
            ))}
          </div>
          <div className=" text-xs text-slate-500 ml-1 pb-1">
            ({numberOfRatings})
          </div>
        </div>

        <p className=" font-bold tracking-tight text-[1.2rem] mt-1">
          ${Math.round(Number(fullPrice))}
        </p>
        <div className=" w-full h-fit flex flex-row items-center justify-start mt-2">
          {bestIds.includes(courseId) && (
            <div className=" text-center w-fit px-2 py-1 text-xs font-bold text-slate-700 bg-Udemyyellow-200">
              Bestseller
            </div>
          )}
        </div>
      </div>
      <div className="absolute w-[19rem] h-fit p-6 ml-64 border border-slate-300 shadow-md bg-white scale-0 group-hover:scale-100 transition-all ease-in">
        <div className=" h-fit flex flex-col justify-start items-start">
          <h1 className=" text-[1.34rem] font-[700] text-slate-800">{courseName}</h1>
          <div className=" flex flex-row gap-2 h-fit w-full items-center justify-start mt-2">
            {bestIds.includes(courseId) && (
              <div className=" text-center w-fit px-2 py-1 text-xs font-bold text-slate-700 bg-Udemyyellow-200">
                Bestseller
              </div>
            )}
            <h2 className=" text-green-700 text-xs">
              Updated{" "}
              <span className=" font-semibold">{lastUpdatedString}</span>
            </h2>
          </div>
          <div className=" flex flex-row justify-center items-center h-fit w-fit mt-2">
            <h3 className=" text-xs text-slate-600">
              {courseDuration} total hours
            </h3>
            <Dot size="10px" color="gray" />
            <h3 className=" text-xs text-slate-600">All Levels</h3>
            <Dot size="10px" color="gray" />
            <h3 className=" text-xs text-slate-600">Subtitles</h3>
          </div>
          <div className=" text-sm font-normal text-slate-700">
            {mainDescription}
          </div>
          <div className=" flex flex-col justify-start items-start h-fit w-full mt-3 gap-2">
            <div className=" flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
              <Check className=" min-w-4" size="16px" color="gray" />
              {secondDescriptions && secondDescriptions.length > 0 && (
                <h3 className="text-sm font-normal text-slate-700">
                  {secondDescriptions[0]}
                </h3>
              )}
            </div>
            <div className=" flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
              <Check className=" min-w-4" size="16px" color="gray" />
              {secondDescriptions && secondDescriptions.length > 1 && (
                <h3 className="text-sm font-normal text-slate-700">
                  {secondDescriptions[1]}
                </h3>
              )}
            </div>
            <div className=" flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
              <Check className=" min-w-4" size="16px" color="gray" />
              {secondDescriptions && secondDescriptions.length > 2 && (
                <h3 className="text-sm font-normal text-slate-700">
                  {secondDescriptions[2]}
                </h3>
              )}
            </div>
          </div>
          <div className=" flex flex-row w-full h-fit mt-4 gap-2">
            <div
              // onClick={() => addToCart(id)}
              className=" w-4/5 h-12 bg-Udemyindigo-300 hover:bg-Udemypurple-600 flex flex-row justify-center items-center cursor-pointer"
            >
              <AddToCart handleAddToCart={handleAddToCartInternal} />
            </div>
            {wishlist && (
              <div
                onClick={addToWishlist}
                className=" w-12 rounded-full h-12 border border-black flex flex-row items-center justify-center hover:bg-slate-300 cursor-pointer"
              >
                {wishlist.includes(courseId) ? (
                  <Heart fill="black" size="22px" />
                ) : (
                  <Heart size="22px" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
