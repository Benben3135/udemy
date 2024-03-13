// MostRecentCoursesList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Course, { CourseProps } from './Course';

interface MostRecentCoursesListProps {
  selectedCategory: string;
  mostRecentCourses: CourseProps[]; // הוסף כאן

}

const MostRecentCoursesList: React.FC<MostRecentCoursesListProps> = ({ selectedCategory }) => {
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
    <div className="flex flex-wrap  gap-5">
      {recentCourses.map((course: CourseProps) => (
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

export default MostRecentCoursesList;
