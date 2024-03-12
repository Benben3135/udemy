// MostViewedCoursesList.jsx
import React from "react";
import Course, { CourseProps } from "../Courses/Course";

interface MostViewedCoursesListProps {
  mostViewedCourses: CourseProps[];
}

const MostViewedCoursesList: React.FC<MostViewedCoursesListProps> = ({
  mostViewedCourses,
}) => {
  return (
    <div className="flex flex-wrap mb-5 border-Udemygray-300  gap-5">
      {mostViewedCourses.map((course) => (
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
  );
};

export default MostViewedCoursesList;
