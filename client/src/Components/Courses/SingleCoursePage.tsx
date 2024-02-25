import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Course, { CourseProps } from "../Courses/Course";
import { getCourseById } from "../../../api/coursesApi";
import CourseComponent from "./CourseComponent";

const SingleCoursePage = () => {
  const {courseId} = useParams();
  const [course, setCourse] = useState<CourseProps | null>(null);

  useEffect(() => {
    console.log("courseId:", courseId);
    const fetchCourse = async () => {
      try {
        if (courseId) {
          const courseData = await getCourseById(Number(courseId));
          console.log("courseData:", courseData);
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
    <div className="font-custom max-w-[82rem] mx-auto h-fit">
    <h1 className="text-Udemygray-500 text-3xl font-bold my-12">
      {course.courseName} Details
    </h1>

    <CourseComponent course={course} />
  </div>
  );
};

export default SingleCoursePage;
