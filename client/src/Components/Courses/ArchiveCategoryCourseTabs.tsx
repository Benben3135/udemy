// ArchiveCategoryCourseTabs.tsx
import React, { useState } from "react";
import MostViewedCoursesList from "./MostViewedCoursesList";
import MostRatedCoursesList from "./MostRatedCoursesList"; // Import the new component
import MostRecentCoursesList from "./MostRecentCoursesList"; // Import the new component
import Course, { CourseProps } from "./Course";

interface ArchiveCategoryCourseTabsProps {
  mostViewedCourses: CourseProps[];
  mostRatedCourses: CourseProps[];
  otherCourses: CourseProps[];
  selectedCategory: string; // Add selectedCategory to the props
  mostRecentCoursesList: CourseProps[]; // Add mostRecentCoursesList to the props
}

const ArchiveCategoryCourseTabs: React.FC<ArchiveCategoryCourseTabsProps> = ({
  mostViewedCourses,
  mostRatedCourses,
  otherCourses,
  selectedCategory,
  mostRecentCoursesList,
}) => {
  const [activeTab, setActiveTab] = useState("MostViewed");

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tabs-container mb-4 bg-white items-center w-[50vw] pt-5 flex justify-center  flex-shrink-0 border-b-Udemygray-500 mb-1">
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
            activeTab === "MostRated"
              ? "active border-b-2 border-purple-500 text-black font-bold "
              : "text-gray-500 hover:text-black hover:border-black "
          } mr-[8vw]`}
          onClick={() => handleTabClick("MostRated")}
        >
          Most Rated Courses
        </button>
        {/* Add the new button for 'MostRecent' tab */}
        <button
          className={`tab-btn ${
            activeTab === "MostRecent"
              ? "active border-b-2 border-purple-500 text-black font-bold "
              : "text-gray-500 hover:text-black hover:border-black "
          }`}
          onClick={() => handleTabClick("MostRecent")}
        >
          Most Recent Courses
        </button>
      </div>

      <div>
        {activeTab === "MostViewed" && (
          <MostViewedCoursesList mostViewedCourses={mostViewedCourses} />
        )}
        {activeTab === "MostRated" && (
          <MostRatedCoursesList mostRatedCourses={mostRatedCourses} />
        )}
        {activeTab === "MostRecent" && (
          <MostRecentCoursesList
            selectedCategory={selectedCategory}
            mostRecentCourses={mostRecentCoursesList}
          />
        )}

        <div className="flex flex-wrap">
          {otherCourses.map((course: CourseProps) => (
            <Course
              key={course.courseId}
              course_img={course.course_img}
              courseName={course.courseName}
              teacherName={course.teacherName}
              rating={course.rating}
              fullPrice={course.fullPrice}
              language={course.language}
              numberOfRatings={course.numberOfRatings}
              courseId={course.courseId}
              courseDuration={course.courseDuration}
              lastUpdated={course.lastUpdated}
              mainDescription={course.mainDescription}
              secondDescriptions={course.secondDescriptions}
              teacherId={course.teacherId}
              numberOfStudents={course.numberOfStudents}
              subtitlesLanguage={course.subtitlesLanguage}
              discountPrice={course.discountPrice}
              articlesNumber={course.articlesNumber}
              downloadableResourcesNumber={course.downloadableResourcesNumber}
              courseContent={course.courseContent}
              requirements={course.requirements}
              fullDescription={course.fullDescription}
              category={course.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchiveCategoryCourseTabs;
