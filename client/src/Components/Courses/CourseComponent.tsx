// CourseComponent.js
import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Star } from 'lucide-react';

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
  const limitWords = (content: string, limit: number) => {
    const words = content.split(' ');
    return words.slice(0, limit).join(' ');
  };

  return (
    <div className="course-component flex">
      <div className="course-details pl-[15vw] flex-grow">
        <Breadcrumbs category={course.category} />
        <h2 className="text-white text-3xl font-bold pt-3">{course.courseName}</h2>
        <h3 className="text-white text-[1.2rem] font-[500] pt-1">{limitWords(course.courseContent, 15)}</h3>
        <div className="flex items-center">
          <div className="text-xs font-bold text-Udemyorange-400">
            {course.rating.toFixed(2)}
          </div>
          <div className="flex ml-1 gap-[0.1rem]">
            {[...Array(5)].map((_, index) => (
              <Star
                strokeWidth={"0.8px"}
                key={index}
                size="15px"
                className={
                  index + 1 <= Math.round(course.rating)
                    ? "border-slate-500 p-0 m-0 fill-Udemyorange-400 text-Udemyorange-400"
                    : "text-Udemyorange-400 border-slate-500 p-0 m-0"
                }
              />
            ))}
          </div>
          <div className="text-xs text-slate-500 ml-1 pb-1">
            ({course.numberOfRatings})
          </div>
        </div>
      </div>
      <div className="course-image sticky top-0 flex-shrink-0">
        <img src={course.course_img} alt={course.courseName} className="w-[528px] h-[236px] pr-[15vw]" />
      </div>
    </div>
  );
};

export default CourseComponent;
