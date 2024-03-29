import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCoursesByMostRated,
  getCoursesByMostViewing,
  getCoursesByRecentlySearched,
} from "../../api/coursesApi";
import { CourseProps } from "../Components/Courses/Course";
import Courses from "../Components/Courses/Courses";
import LogosComponent from "../Components/LogosCompany";
import FeaturedCourse from "../Components/featuredCourse";
import { isUserSelector } from "../features/user/isUserSlice";
import { userSelector } from "../features/user/userSlice";
import { categoriesTab } from "../util/categories";
import BannerUdemy from "./BannerUdemy";
import CategoryImages from "./CategoriesImges";
import TabsComponent from "./TabsComponent";
import TestimonialsSlider from "./TestimonialsSlider";
const coursesByMostViewing: CourseProps[] = await getCoursesByMostViewing();
const coursesByRecentlySearched: CourseProps[] =
  await getCoursesByRecentlySearched();
const coursesByMostRated: CourseProps[] = await getCoursesByMostRated();
const recentlySearched = localStorage.getItem("recentlySearched");

const MainPage = () => {
  const navigate = useNavigate();
  const isUserRedux = useSelector(isUserSelector);
  const userRedux = useSelector(userSelector);
  const [isUser, setIsUser] = useState<boolean>();


  useEffect(() => {
    setIsUser(isUserRedux);
  }, [isUserRedux]);


  const getFirstName = () => {
    const firstName = userRedux.displayName!.split(" ")[0];
    return firstName;
  };

  return (
    <>
      {isUser && userRedux.displayName ? (
        <div>
          <>
            <div className=" h-100vh">
              <div className="max-w-[82rem] mx-auto h-fit ">
                <div
                  style={{
                    backgroundImage: `url("../../public/images/87ab2850-d0a8-4ea7-a36c-6f2e4c6a6a2e.jpg")`,
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[23rem] pl-14 pt-16"
                >
                  <div className="h-[13.5rem] w-[26rem] bg-white shadow-md p-6 flex flex-col items-start justify-start gap-3">
                    <h1 className=" font-bold text-2xl leading-[1.7rem] tracking-normal text-Udemygray-500">
                      Welcome back, <br />
                      {getFirstName()}{" "}
                    </h1>
                    <p>
                      Expand your horizons with learning that’s worldwide. Save
                      now through Feb 8.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-fit flex-col justify-start items-start mx-auto max-w-[82rem] my-8">
              <h1 className=" text-4xl font-bold text-slate-800">What to learn next</h1>
              <h2 className=" text-2xl font-bold text-slate-800 mt-6">Our top pick for you</h2>
              <div className=" hover:bg-Udemypurple-100 transition-all ease-in-out cursor-pointer w-full h-[20rem] border border-slate-300 mt-4 flex flex-row items-center justify-start p-6">
                  <FeaturedCourse/>
              </div>
            </div>
            <Courses
              type={coursesByMostViewing}
              componentsTitle={"Learners are viewing"}
            />
            <Courses
              type={coursesByRecentlySearched}
              componentsTitle={`Because you searched "${recentlySearched}"`}
            />
            <Courses type={coursesByMostRated} componentsTitle={"Most rated"} />
          </>
        </div>
      ) : (
        <>
          <div className=" h-100vh">
            <div className="max-w-[82rem] mx-auto h-fit ">
              <div
                style={{
                  backgroundImage: `url("../../public/images/06bffb17-9483-429e-9145-25f046f65ad1.png")`,
                  backgroundSize: "cover",
                }}
                className="w-full h-[23rem] pl-14 pt-16"
              >
                <div className="h-[16.5rem] w-[26rem] bg-white shadow-md p-6 flex flex-col items-start justify-start gap-3">
                  <h1 className=" font-bold text-3xl leading-[2.4rem] tracking-normal text-Udemygray-500">
                    Subscribe to the best of <br /> Udemy
                    {userRedux.displayName}{" "}
                  </h1>
                  <p>
                    With Personal Plan, you get access to 8,000 of our top-rated
                    courses in tech, business, design, and more.
                  </p>
                  <div
                    onClick={() => navigate("/register-page")}
                    className="hover:bg-gray-700 cursor-pointer w-24 h-12 bg-gray-900 text-white flex flex-row justify-center items-center font-bold"
                  >
                    Try it free
                  </div>
                </div>
              </div>
            </div>
          </div>

          <LogosComponent />
          <TabsComponent categories={categoriesTab} />
          <TestimonialsSlider />
          <Courses
            type={coursesByMostViewing}
            componentsTitle={"Learners are viewing"}
          />
          <CategoryImages />
          <BannerUdemy />
        </>
      )}
    </>
  );
};

export default MainPage;
