// CourseComponent.js
import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

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
    lastUpdated: Date;
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

const CourseComponent: React.FC<CourseComponentProps> = ({ course }) => {
  // הוספת עיצוב ולוגיקה שמתאימים לקומפוננטה החדשה
  return (
    <div className="course-component">
      <Breadcrumbs category={course.category} /> {/* Pass category prop here */}
      <h2>{course.courseName} Component</h2>
      {/* הוספת פרטים ועיצוב נוסף כרצונך */}
    </div>
  );
};

export default CourseComponent;
