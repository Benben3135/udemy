// CourseComponent.ts
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Check, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PersonalTabContent from "./PersonalTabContent";
import TeamsTabContent from "./TeamsTabContent";
import LanguageIcon from "@mui/icons-material/Language";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import SvgIcon from "@mui/material/SvgIcon";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CodeIcon from "@mui/icons-material/Code";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { FooterLogos } from "../../../public/images/footerLogos/FooterLogos";
import TeacherInfo from "./TeacherInfo";
import { User } from "../../util/interfaces";


interface CourseComponentProps {
  course: {
    courseId: number;
    teacherId: number;
    uid:string;
    courseName: string;
    teacherName: string;
    mainDescription: string;
    rating: number;
    numberOfRatings: number;
    numberOfStudents: number;
    lastUpdated?: Date;
    language: string;
    subtitlesLanguage: { type: string; default: "English" };
    fullPrice: number;
    discountPrice: number;
    secondDescriptions: string[];

    courseDuration: number;
    articlesNumber: number;
    downloadableResourcesNumber: number;
    courseContent: string;
    requirements: [string];
    fullDescription: string;
    course_img: string;
    category: string;
  };
}

const CourseComponent: React.FC<
  CourseComponentProps & { selectedCategory: string }
> = ({ course, selectedCategory }) => {
  const limitWords = (content: string, limit: number) => {
    const words = content.split(" ");
    return words.slice(0, limit).join(" ");
  };
  const [activeTab, setActiveTab] = useState("Personal");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Add logic to handle tab change if needed
  };
  const [showFullRequirements, setShowFullRequirements] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleFullRequirements = () => {
    setShowFullRequirements(!showFullRequirements);
  };

  const toggleFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate(`/category-page/${course.category}`);
  };
  const [lastUpdatedString, setLastUpdatedString] = useState<string>(""); // Declare the state
  const { secondDescriptions } = course;

  useEffect(() => {
    const lastUpdatedSTR = () => {
      if (course.lastUpdated) {
        const lastUpdatedDate = new Date(course.lastUpdated);
        const options = { month: "long", year: "numeric" };
        const formattedDate = lastUpdatedDate.toLocaleDateString(
          "en-US",
          options
        );

        setLastUpdatedString(formattedDate);
      }
    };

    lastUpdatedSTR();
  }, [course.lastUpdated]);
  function handleAddToCart(_course: { courseId: number; courseName: string; teacherName: string; fullPrice: number; discountPrice: number; }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="course-component flex">
        <div className="course-details pl-[15vw] flex-grow">
          <Breadcrumbs category={course.category} />
          <h2 className="text-white text-[2rem] font-bold pt-6">
            {course.courseName}
          </h2>
          <h3 className="text-white text-[1.3rem] font-[400] pt-2 pb-2 pr-8">
            {limitWords(course.courseContent, 15)}
          </h3>
          <div className="flex items-center">
            <div className="text-s font-bold text-Udemyorange-300">
              {course.rating.toFixed(2)}
            </div>
            <div className="flex ml-1 gap-[0.1rem]">
              {[...Array(5)].map((_, index) => (
                <Star
                  strokeWidth={"0.8px"}
                  key={index}
                  size="15px"
                  className={
                    index + 1 <= Math.round(course.rating)
                      ? "border-slate-500 p-0 m-0 fill-Udemyorange-300 text-Udemyorange-300"
                      : "text-Udemyorange-400 border-slate-500 p-0 m-0"
                  }
                />
              ))}
            </div>
            <div className="text-s text-Udemyblue-200 ml-1 pb-1 underline">
              ({course.numberOfRatings} ratings)
            </div>
            <div className="text-s text-white ml-1 pb-1 ">
              {course.numberOfStudents} Students
            </div>
          </div>
          <div className="text-s text-white ml-1 pb-1 ">
            Created by {course.teacherName}
          </div>
          <div className="text-s text-white ml-1 pb-1 flex ">
            <h2 className="text-s text-white ml-0 pb-1 text-sm">
              <SvgIcon
                component={NewReleasesIcon}
                className="new-icon"
                sx={{
                  fontSize: 25,
                  strokeWidth: "0.8px",
                  paddingRight: "10px",
                }}
              />
              Last updated{" "}
              <span className="font-semibold text-white ">
                {lastUpdatedString || "Not Available"}{" "}
                {/* Handle undefined case */}
              </span>{" "}
            </h2>
            <h2 className="text-s text-white ml-2 pb-1 text-sm">
              <LanguageIcon
                component={LanguageIcon}
                className="new-icon"
                sx={{
                  fontSize: 25,
                  strokeWidth: "0.8px",
                  paddingRight: "10px",
                }}
              />
              English SubtitlesIcon
            </h2>
            <h2 className="text-s text-white ml-2 pb-1 text-sm">
              <SubtitlesIcon
                component={SubtitlesIcon}
                className="new-icon"
                sx={{
                  fontSize: 25,
                  strokeWidth: "0.8px",
                  paddingRight: "10px",
                }}
              />
              English [Auto]
            </h2>
          </div>
        </div>

        <div className="course-image sticky top-0 flex-shrink-0">
          <img
            src={course.course_img}
            alt={course.courseName}
            className="w-[38vw] bg-Udemygray-500 h-[216px] pr-[15vw] pt-6 shadow-inner  "
          />
          <div className="tabs-container bg-white items-center w-[23vw] pt-5 flex justify-center sticky top-0 flex-shrink-0">
            <button
              className={`tab-btn ${
                activeTab === "Personal"
                  ? "active border-b-2 border-purple-500 text-black font-bold sticky top-0 flex-1"
                  : "text-gray-500 hover:text-black hover:border-black sticky top-0 flex-1 border-b-1 border-purple-500 " 
              }`}
              onClick={() => handleTabClick("Personal")}
            >
              Personal
            </button>
            <button
              className={`tab-btn ${
                activeTab === "Teams"
                  ? "active border-b-2 border-purple-500 text-black font-bold sticky top-0 flex-1"
                  : "text-gray-500 hover:text-black hover:border-black sticky top-0 flex-1 border-b-1 border-purple-500"
              }`}
              onClick={() => handleTabClick("Teams")}
            >
              Teams
            </button>
          </div>
          {activeTab === "Personal" ? (
            <PersonalTabContent
            course={course}
            handleLearnMoreClick={handleLearnMoreClick}
            handleAddToCart={handleAddToCart}  
          />
          ) : (
            <TeamsTabContent
              course={course}
              handleLearnMoreClick={handleLearnMoreClick}
            />
          )}
        </div>
      </div>
      <div className="w-[100vw] h-50 bg-white py-1 mt-[-35vh]  ">
        <div className="border border-Udemygray-200  h-[27vh] w-[40vw]  my-10 ml-[15vw] ">
          <h2 className="text-Udemygray-500 text-[1.5rem] font-bold pt-6  pl-3">
            What you'll learn
          </h2>
          <div className=" flex flex-col justify-start items-start h-fit w-full mt-3 gap-2 pl-3">
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
              {secondDescriptions?.length > 2 && (
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
            <div className=" flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
              <Check className=" min-w-4" size="16px" color="gray" />
              {secondDescriptions && secondDescriptions.length > 2 && (
                <h3 className="text-sm font-normal text-slate-700">
                  {secondDescriptions[3]}
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-50 bg-white pl-[14vw]">
        <h2 className="text-Udemygray-500 text-[1.5rem] font-bold pt-6 pl-3">
          This course includes:
        </h2>
        <div className="flex flex-row w-[92vw] h-[20vh]">
          <div className="row w-[20vw] bg-white flex flex-col justify-between items-start ml-5 ">
            <ul>
              <li className="my-2  ">
                <OndemandVideoIcon className="mr-3" />
                {secondDescriptions &&
                  secondDescriptions[2] &&
                  limitWords(secondDescriptions[2], 5)}
              </li>
              <li className="my-2">
                <CodeIcon className="mr-3" />
                {secondDescriptions &&
                  secondDescriptions[7] &&
                  limitWords(secondDescriptions[7], 4)}
              </li>
              <li className="my-2">
                <ContentPasteIcon className="mr-3" />
                {secondDescriptions &&
                  secondDescriptions[1] &&
                  limitWords(secondDescriptions[1], 4)}
              </li>
            </ul>
          </div>

          <div className="row w-[30vw] bg-white flex flex-col justify-between items-center ml-[-30px]">
            <ul>
              {secondDescriptions && secondDescriptions.length > 2 && (
                <li className="my-2">
                  <SaveAltIcon className="mr-3" />
                  {secondDescriptions[1] &&
                    limitWords(secondDescriptions[1], 5)}
                </li>
              )}
              {secondDescriptions && secondDescriptions.length > 3 && (
                <li className="my-2 ">
                  <SmartphoneOutlinedIcon className="mr-3" />
                  {secondDescriptions[7] &&
                    limitWords(secondDescriptions[7], 5)}
                </li>
              )}
              <li className="my-2">
                <EmojiEventsOutlinedIcon className="mr-3" />
                {secondDescriptions[2] && limitWords(secondDescriptions[2], 5)}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-50 bg-white   ">
        <div className="border border-Udemygray-200  h-[22vh] w-[40vw]   ml-[15vw] ">
          <h2 className="text-Udemygray-500 text-[1.1rem] font-bold pt-6  pl-3">
            Top companies offer this course to their employees
          </h2>
          <p className="text-Udemygray-600 text-[0.9rem] text-left pl-6">
            Get this course, plus 11,000+ of our top-rated courses, with
            Personal Plan.
            <span
              className="text-Udemyblue-300 cursor-pointer pl-2 underline font-bold pr-6 "
              onClick={handleLearnMoreClick}
            >
              <br></br> Learn more
            </span>
          </p>
          <div className="flex items-center space-x-8 my-4 pl-4">
            {/* לוגואים שמתקראים מהמערך FooterLogos */}
            {FooterLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="h-10 w-auto dark-logo "
                style={{ filter: "brightness(30%)" }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-70 bg-white pb-24 pt-12   ">
        <div className="bg-Udemygray-100  h-[36vh] w-[40vw]   ml-[15vw] flex pt-5 px-5 ">
          <div className=" w-[40%] ">
            <h2 className="text-Udemygray-500 text-[1.1rem] font-bold pt-6  ">
              Coding Exercises
            </h2>
            <p className="text-Udemygray-300 text-[0.9rem] text-left py-3  ">
              This course includes our updated coding exercises so you can
              practice your skills as you learn.
              <span
                className="text-Udemyblue-300 cursor-pointer pl-2 underline font-bold pr-6 pb-10 "
                onClick={handleLearnMoreClick}
              >
                <br></br> <br></br> <br></br>Learn more
              </span>
            </p>
          </div>
          <div className="w-[60%]">
            <img src="https://www.udemy.com/staticx/udemy/js/webpack/coding-exercises-demo-preview-desktop.2957bed27c3ae43a02824b61ad9cda03.png"></img>
          </div>
        </div>
      </div>
      <div className="w-[100vw] bg-white mt-[-10vh]  ">
        <div className=" h-fit w-[40vw] ml-[15vw] pb-5 ">
          <h2 className="text-Udemygray-500 text-[1.5rem] font-bold pt-6 pl-3">
            Requirements
          </h2>
          <p className="text-Udemygray-300 text-[0.9rem] text-left py-3 px-3 ">
            {showFullRequirements
              ? course.requirements.join(" ")
              : course.requirements.slice(0, 5).join(" ")}
            <span>
              {course.requirements.length > 5
                ? showFullRequirements
                  ? ""
                  : "..."
                : ""}
            </span>
            {course.requirements.length > 5 && (
              <button
                className="text-blue-500 underline"
                onClick={toggleFullRequirements}
              >
                {showFullRequirements ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
          <h2 className="text-Udemygray-500 text-[1.5rem] font-bold pt-6 pl-3">
            Description
          </h2>
          <p className="text-Udemygray-300 text-[0.9rem] text-left py-3 px-3  ">
            {showFullDescription
              ? course.fullDescription
              : course.fullDescription.slice(0, 200)}
            <span>
              <br></br>
              <br></br>
              {course.fullDescription.length > 200
                ? showFullDescription
                  ? ""
                  : ""
                : ""}
            </span>
            {course.fullDescription.length > 5 && (
              <button
                className="text-Udemyblue-300 underline font-bold "
                onClick={toggleFullDescription}
              >
                {showFullDescription ? "Read Less ↑" : "Read More ↓"}
              </button>
            )}
          </p>
        </div>
      </div>
      <div className="w-[100vw] h-50 bg-white   ">
        <div className="  h-[22vh] w-[40vw]   ml-[15vw] ">
          <h2 className="text-Udemygray-500 text-[1.5rem] font-bold pt-6  pl-3">
            Students also bought
          </h2>
          {/* <Courses
            type={MostViewedCoursesList}
            componentsTitle={selectedCategory || ""}
          /> */}
        </div>
      </div>
      <div>
      <TeacherInfo
  teacher={course.teacherName as unknown as User}
  numberOfStudents={course.numberOfStudents}
  numberOfReviews={course.numberOfRatings}
  numberOfCourses={null}
/></div>
    </>
  );
};

export default CourseComponent;
