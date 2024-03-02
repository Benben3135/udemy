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
    <div className="flex flex-wrap mb-5 border-Udemygray-300">
      {mostViewedCourses.map((course) => (
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
  );
};

export default MostViewedCoursesList;
