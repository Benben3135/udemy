// CourseComponent.js
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PersonalTabContent from "./PersonalTabContent";
import TeamsTabContent from "./TeamsTabContent";
import { Badge } from "lucide-react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SvgIcon from "@mui/material/SvgIcon";



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
    secondDescriptions: [string];
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

const CourseComponent: React.FC<CourseComponentProps> = ({ course,  }) => {
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

  useEffect(() => {
    const lastUpdatedSTR = () => {
      if (course.lastUpdated) {
        const lastUpdatedDate = new Date(course.lastUpdated);
        const options = { month: "long", year: "numeric" };
        const formattedDate = lastUpdatedDate.toLocaleDateString("en-US", options);
  
        setLastUpdatedString(formattedDate);
      }
    };
  
    lastUpdatedSTR();
  }, [course.lastUpdated]);
  return (
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
          <div className="text-s text-white ml-1 pb-1  ">
          
          <h2 className="text-s text-white ml-1 pb-1">
          <SvgIcon component={NewReleasesIcon} className="new-icon" sx={{ fontSize: 15, strokeWidth: "0.8px" }} />
            Last updated{" "}
          
            <span className="font-semibold text-white">
              {lastUpdatedString || "Not Available"} {/* Handle undefined case */}
            </span>{" "}
           
          </h2>

          </div>
      </div>
      <div className="course-image sticky top-0 flex-shrink-0">
        <img
          src={course.course_img}
          alt={course.courseName}
          className="w-[38vw] bg-Udemygray-500 h-[216px] pr-[15vw] pt-6 shadow-inner "
        />
        <div className="tabs-container bg-white items-center w-[23vw]  pt-5 flex justify-center ">
          <button
            className={`tab-btn bg-white mr-[8vw] ${
              activeTab === "Personal " ? "active" : ""
            }`}
            onClick={() => handleTabClick("Personal")}
          >
            Personal
          </button>
          <button
            className={`tab-btn  ${activeTab === "Teams" ? "active" : ""}`}
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
          <TeamsTabContent handleLearnMoreClick={handleLearnMoreClick} />
        )}
      </div>
    </div>
  );
};

export default CourseComponent;
