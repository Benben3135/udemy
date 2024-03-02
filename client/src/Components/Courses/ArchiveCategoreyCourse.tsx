import { useState, useEffect } from "react";
import Course, { CourseProps } from "./Course";
import ArchiveCategoryCourseTabs from "./ArchiveCategoryCourseTabs";
import { getCoursesByMostViewing, getCoursesByMostRated, getAllCoursesByCategory } from "../../../api/coursesApi";
import { useParams } from "react-router-dom";
import FeaturedCourse from "../featuredCourse";

export interface Course {
  courseId: number;
}

const ArchiveCategoryCourse = () => {
  const { selectedCategory } = useParams();
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [mostViewedCourses, setMostViewedCourses] = useState<CourseProps[]>([]);
  const [mostRatedCourses, setMostRatedCourses] = useState<CourseProps[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (selectedCategory) {
          const coursesData = await getAllCoursesByCategory(selectedCategory);
          setCourses(coursesData);
        }
      } catch (error) {
        console.error("Error fetching courses by category:", error);
      }
    };

    const fetchMostViewedCoursesData = async () => {
      try {
        const mostViewedCoursesData = await getCoursesByMostViewing();
        setMostViewedCourses(mostViewedCoursesData);
      } catch (error) {
        console.error("Error fetching most viewed courses:", error);
      }
    };

    const fetchMostRatedCoursesData = async () => {
      try {
        const mostRatedCoursesData = await getCoursesByMostRated();
        setMostRatedCourses(mostRatedCoursesData);
      } catch (error) {
        console.error("Error fetching most rated courses:", error);
      }
    };

    fetchCourses();
    fetchMostViewedCoursesData();
    fetchMostRatedCoursesData();
  }, [selectedCategory]);

  if (!selectedCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-custom max-w-[82rem] mx-auto h-fit  ">
      <h1 className="text-Udemygray-500 text-3xl font-bold my-12">
        {selectedCategory} Courses Archive
      </h1>
      <h2 className="text-Udemygray-500 text-2xl font-bold my-12">
        {" "}
        Courses to get you started
      </h2>

      {/* Display tabs */}
      <ArchiveCategoryCourseTabs
        mostViewedCourses={mostViewedCourses}
        mostRatedCourses={mostRatedCourses}
        otherCourses={courses}
      />

      {/* Display Other Courses */}
      <div className="mb-12">

      <FeaturedCourse/>
        <h2 className="mt-12">Other Courses</h2>
        <div className="flex flex-wrap">
          {courses.map((course) => (
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
      </div>
    </div>
  );
};

export default ArchiveCategoryCourse;
