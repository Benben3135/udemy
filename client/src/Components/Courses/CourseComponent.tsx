// CourseComponent.js
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
import Typography from "@mui/material/Typography";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CodeIcon from "@mui/icons-material/Code";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

interface CourseComponentProps {
  course: {
    courseId: number;
    teacherId: number;
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

const CourseComponent: React.FC<CourseComponentProps> = ({ course }) => {
  const limitWords = (content: string, limit: number) => {
    const words = content.split(" ");
    return words.slice(0, limit).join(" ");
  };
  const [activeTab, setActiveTab] = useState("Personal");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Add logic to handle tab change if needed
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
            className="w-[38vw] bg-Udemygray-500 h-[216px] pr-[15vw] pt-6 shadow-inner "
          />
          <div className="tabs-container bg-white items-center w-[23vw] pt-5 flex justify-center">
            <button
              className={`tab-btn ${
                activeTab === "Personal"
                  ? "active border-b-2 border-purple-500 text-black font-bold"
                  : "text-gray-500 hover:text-black hover:border-black"
              } mr-[8vw]`}
              onClick={() => handleTabClick("Personal")}
            >
              Personal
            </button>
            <button
              className={`tab-btn ${
                activeTab === "Teams"
                  ? "active border-b-2 border-purple-500 text-black font-bold"
                  : "text-gray-500 hover:text-black hover:border-black"
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
          {/* עמודה ראשונה */}
          <div className="row w-[20vw] bg-white flex flex-col justify-between items-start ml-5 ">
            <ul className="">
              <li className="my-2  ">
                <OndemandVideoIcon className="mr-3" />
                {secondDescriptions && secondDescriptions[3]}
              </li>
              <li className="my-2">
                <CodeIcon className="mr-3" />
                {secondDescriptions && secondDescriptions[6]}
              </li>
              <li className="my-2">
                <ContentPasteIcon className="mr-3" />
                {secondDescriptions && secondDescriptions[1]}
              </li>
            </ul>
          </div>

          <div className="row w-[30vw] bg-white flex flex-col justify-between items-center ml-2">
            <ul>
              {secondDescriptions && secondDescriptions.length > 2 && (
                <li className="my-2">
                  <SaveAltIcon className="mr-3" />
                  {secondDescriptions[1]}
                </li>
              )}
              {secondDescriptions && secondDescriptions.length > 3 && (
                <li className="my-2 ">
                  <SmartphoneOutlinedIcon className="mr-3" />
                  {secondDescriptions[8]}
                </li>
              )}
              {/* המשך רשימת האייקונים כרצונך */}
              <li className="my-2">
                <EmojiEventsOutlinedIcon className="mr-3" />
                {secondDescriptions[0]}
              </li>
            </ul>
          </div>

          {/* עמודה שנייה */}
        </div>
      </div>
    </>
  );
};

export default CourseComponent;
