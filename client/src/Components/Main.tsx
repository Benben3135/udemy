import { useEffect, useState } from "react";
import { isUserSelector } from "../features/user/isUserSlice";
import { useSelector } from "react-redux";
import { userSelector } from "../features/user/userSlice";
import LogosComponent from "../Components/LogosCompany";
import TabsComponent from "./TabsComponent";
import { categoriesTab } from "../util/categories";
import TestimonialsSlider from "./TestimonialsSlider";
import CategoryImages from "./CategoriesImges";
import { useNavigate } from "react-router-dom";
import {
  getCoursesByMostRated,
  getCoursesByMostViewing,
  getCoursesByRecentlySearched,
} from "../../api/coursesApi";
import { CourseProps } from "../Components/Courses/Course";
import Courses from "../Components/Courses/Courses";
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
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    setIsUser(isUserRedux);
  }, [isUserRedux]);

  useEffect(() => {
    const firstName = getFirstName(userRedux.name);
    setUserName(firstName!);
  }, [userRedux]);

  const getFirstName = (userName: string) => {
    const firstName = userName!.split(" ")[0];
    return firstName;
  };

  return (
    <>
      {isUser ? (
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
                      {userName}{" "}
                    </h1>
                    <p>
                      Expand your horizons with learning that’s worldwide. Save
                      now through Feb 8.
                    </p>
                  </div>
                </div>
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
                    {userName}{" "}
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
          <CategoryImages />
        </>
      )}
    </>
  );
};

export default MainPage;
