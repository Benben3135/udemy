// ArchiveCategoryCourseTabs.jsx
import React, { useState } from "react";
import MostViewedCoursesList from "./MostViewedCoursesList";
import MostRatedCoursesList from "./MostRatedCoursesList"; // Import the new component
import Course, { CourseProps } from "./Course";

interface ArchiveCategoryCourseTabsProps {
  mostViewedCourses: CourseProps[];
  mostRatedCourses: CourseProps[];
  otherCourses: CourseProps[];
}

const ArchiveCategoryCourseTabs: React.FC<ArchiveCategoryCourseTabsProps> = (
  props
) => {
  const [activeTab, setActiveTab] = useState("MostViewed");

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div>

      <div className="tabs-container bg-white items-center w-[36vw] pt-5 flex justify-start  flex-shrink-0 border-b-Udemygray-500 mb-1 border-Udemygray-300 border-1">
        <button
          className={`tab-btn mx-2 ${
            activeTab === "MostViewed"
              ? "active border-b-2 border-purple-500 text-black font-bold "
              : "text-gray-500 hover:text-black hover:border-black "
          }`}
          onClick={() => handleTabClick("MostViewed")}
        >
          Most Viewed Courses
        </button>
        <button
          className={`tab-btn mx-2 ${
            activeTab === "MostRated"
              ? "active border-b-2 border-purple-500 text-black font-bold "
              : "text-gray-500 hover:text-black hover:border-black "
          }`}
          onClick={() => handleTabClick("MostRated")}
        >
          Most Rated
        </button>
        <button
          className={`tab-btn mx-2 ${
            activeTab === "Other"
              ? "active border-b-2 border-purple-500 text-black font-bold "
              : "text-gray-500 hover:text-black hover:border-black "
          }`}
          onClick={() => handleTabClick("Other")}
        >
          New
        </button>
      </div>

      <div>
        {activeTab === "MostViewed" && <MostViewedCoursesList {...props} />}
        {activeTab === "MostRated" && <MostRatedCoursesList {...props} />}{" "}
        {/* Add the condition for the new tab */}
        {activeTab === "Other" && (
          <div className="flex flex-wrap">
            {props.otherCourses.map((course: CourseProps) => (
              <Course
                key={course.courseId}
                img={course.course_img}
                title={course.courseName}
                teacher={course.teacherName}
                rating={course.rating}
                price={course.fullPrice}
                tag={course.language}
                numberOfRatings={course.numberOfRatings}
                id={course.courseId}
                courseDuration={course.courseDuration}
                lastUpdated={course.lastUpdated}
                mainDescription={course.mainDescription}
                secondDescriptions={course.secondDescriptions}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchiveCategoryCourseTabs;
