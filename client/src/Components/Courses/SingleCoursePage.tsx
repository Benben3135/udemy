import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../../api/coursesApi";
import { CourseProps } from "../Courses/Course";
import CourseComponent from "./CourseComponent";

const SingleCoursePage = () => {
  const {courseId} = useParams();
  const [course, setCourse] = useState<CourseProps | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        if (courseId) {
          const courseData = await getCourseById(Number(courseId));
          setCourse(courseData);
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourse();
  }, [courseId]);


  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-custom max-w-[100vw] mx-auto h-fit bg-Udemygray-500 ">

   

    <CourseComponent course={course} selectedCategory={""} />
  </div>
  );
};

export default SingleCoursePage;
