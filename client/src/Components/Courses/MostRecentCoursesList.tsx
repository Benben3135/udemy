// MostRecentCoursesList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Course, { CourseProps } from './Course';

interface MostRecentCoursesListProps {
  selectedCategory: string;
  mostRecentCourses: CourseProps[]; // הוסף כאן

}

const MostRecentCoursesList: React.FC<MostRecentCoursesListProps> = ({ selectedCategory, mostRecentCourses }) => {
  const [recentCourses, setRecentCourses] = useState<CourseProps[]>([]);

  useEffect(() => {
    const fetchRecentCourses = async () => {
      try {
        const response = await axios.get(`/API/courses/getCoursesByRecentlySearched/${selectedCategory}`);
        setRecentCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching most recent courses:', error);
      }
    };

    if (selectedCategory) {
      fetchRecentCourses();
    }
  }, [selectedCategory]);

  return (
    <div className="flex flex-wrap">
      {recentCourses.map((course: CourseProps) => (
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

export default MostRecentCoursesList;
