// MostRatedCoursesList.jsx
import React from "react";
import Course, { CourseProps } from "../Courses/Course";

interface MostRatedCoursesListProps {
  mostRatedCourses: CourseProps[];
}

const MostRatedCoursesList: React.FC<MostRatedCoursesListProps> = ({
  mostRatedCourses,
}) => {
  return (
    <div className="flex flex-wrap mb-5  gap-5">
      {mostRatedCourses.map((course) => (
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

export default MostRatedCoursesList;
