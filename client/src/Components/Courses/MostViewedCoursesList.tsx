// MostViewedCoursesList.jsx

import React from 'react';
import Course, { CourseProps } from '../Courses/Course';

interface MostViewedCoursesListProps {
  mostViewedCourses: CourseProps[];
}

const MostViewedCoursesList: React.FC<MostViewedCoursesListProps> = ({ mostViewedCourses }) => {
  // פונקציה שסוננת קורסים לפי הקטגוריה
  const filterCoursesByCategory = (courses: CourseProps[], category: string): CourseProps[] => {
    return courses.filter(course => course.language === category);
  };

  return (
    <div className="flex flex-wrap">
      {/* הצג את הקורסים הכי נצפים מתוך הרשימה שסוננה לפי הקטגוריה */}
      {filterCoursesByCategory(mostViewedCourses, mostViewedCourses[0]?.language).map((course) => (
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
