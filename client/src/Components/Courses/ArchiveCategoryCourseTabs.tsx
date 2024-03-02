import React, { useState } from "react";
import MostViewedCoursesList from "./MostViewedCoursesList";
import Course, { CourseProps } from "./Course";

const ArchiveCategoryCourseTabs = ({
  mostViewedCourses,
  otherCourses,
}: {
  mostViewedCourses: CourseProps[];
  otherCourses: CourseProps[];
}) => {
  const [activeTab, setActiveTab] = useState("MostViewed");

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tabs-container bg-white items-center w-[28vw] pt-5 flex justify-center  flex-shrink-0 border-b-Udemygray-500 mb-1">
        <button
          className={`tab-btn ${
            activeTab === "MostViewed"
              ? "active border-b-2 border-purple-500 text-black font-bold "
              : "text-gray-500 hover:text-black hover:border-black "
          } mr-[8vw]`}
          onClick={() => handleTabClick("MostViewed")}
        >
          Most Viewed Courses
        </button>
        <button
          className={`tab-btn ${
            activeTab === "Other"
              ? "active border-b-2 border-purple-500 text-black font-bold "
              : "text-gray-500 hover:text-black hover:border-black "
          }`}
          onClick={() => handleTabClick("Other")}
        >
          Other Courses
        </button>
      </div>

      <div>
        {activeTab === "MostViewed" && (
          <MostViewedCoursesList mostViewedCourses={mostViewedCourses} />
        )}

        {activeTab === "Other" && (
          <div className="flex flex-wrap">
            {otherCourses.map(
              (course: {
                courseId: React.Key | null | undefined;
                course_img: string;
                courseName: string;
                teacherName: string;
                rating: number;
                fullPrice: number;
                language: string;
                numberOfRatings: number;
                courseDuration: number;
                lastUpdated: Date | undefined;
                mainDescription: string;
                secondDescriptions: string[];
              }) => (
                <Course
                  key={course.courseId}
                  img={course.course_img}
                  title={course.courseName}
                  teacher={course.teacherName}
                  rating={course.rating}
                  price={course.fullPrice}
                  tag={course.language}
                  numberOfRatings={course.numberOfRatings}
                  id={typeof course.courseId === "number" ? course.courseId : 0}
                  courseDuration={course.courseDuration}
                  lastUpdated={course.lastUpdated}
                  mainDescription={course.mainDescription}
                  secondDescriptions={course.secondDescriptions}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchiveCategoryCourseTabs;
