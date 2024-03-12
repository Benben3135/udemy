import { useState, useEffect } from "react";
import Course, { CourseProps } from "./Course";
import ArchiveCategoryCourseTabs from "./ArchiveCategoryCourseTabs";
import {
  getCoursesByMostViewing,
  getCoursesByMostRated,
  getAllCoursesByCategory,
  getCoursesByRecentlySearched,
} from "../../../api/coursesApi";
import { useParams } from "react-router-dom";
import FeaturedCourse from "../featuredCourse";
import TestimonialsSlider from "../TestimonialsSlider";

export interface Course {
  courseId: number;
}

// ...

const ArchiveCategoryCourse = () => {
  const { selectedCategory } = useParams();
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [mostViewedCourses, setMostViewedCourses] = useState<CourseProps[]>([]);
  const [mostRatedCourses, setMostRatedCourses] = useState<CourseProps[]>([]);
  const [mostRecentCoursesList, setMostRecentCoursesList] = useState<
    CourseProps[]
  >([]);

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

    const fetchMostRecentCoursesData = async () => {
      try {
        // Assuming you have the correct function getCoursesByMostRecent
        const mostRecentCoursesData = await getCoursesByRecentlySearched();
        setMostRecentCoursesList(mostRecentCoursesData); // Fix the assignment here
      } catch (error) {
        console.error("Error fetching most recent courses:", error);
      }
    };

    fetchCourses();
    fetchMostViewedCoursesData();
    fetchMostRatedCoursesData();
    fetchMostRecentCoursesData();
  }, [selectedCategory]);

  if (!selectedCategory) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="font-custom max-w-[82rem] mx-auto h-fit  ">
        <h1 className="text-Udemygray-500 text-3xl font-bold mt-12 mb-2">
          {selectedCategory} Courses Archive
        </h1>
        <h2 className="text-Udemygray-500 text-2xl font-bold my-10 ">
          {" "}
          Courses to get you started
        </h2>

        {/* Display tabs */}
        <ArchiveCategoryCourseTabs
          mostViewedCourses={mostViewedCourses}
          mostRatedCourses={mostRatedCourses}
          mostRecentCoursesList={mostRecentCoursesList}
          otherCourses={[]}
          selectedCategory={selectedCategory}
        />

        {/* Display Other Courses */}
        <div className=" mt-10">
          <FeaturedCourse />

          <div className="flex flex-wrap gap-5 max-w-[82rem]  justify-around mt-12">
            {courses.map((course) => (
              <Course
                key={course.courseId}
                course_img={course.course_img}
                courseName={course.courseName}
                teacherName={course.teacherName}
                rating={course.rating}
                fullPrice={course.fullPrice}
                numberOfRatings={course.numberOfRatings}
                courseId={course.courseId}
                courseDuration={course.courseDuration}
                lastUpdated={course.lastUpdated}
                mainDescription={course.mainDescription}
                secondDescriptions={course.secondDescriptions}
                teacherId={course.teacherId}
                numberOfStudents={course.numberOfStudents}
                language={course.language}
                subtitlesLanguage={course.subtitlesLanguage}
                discountPrice={course.discountPrice}
                articlesNumber= {course.articlesNumber}
                downloadableResourcesNumber= {course.downloadableResourcesNumber}
                courseContent={course.courseContent}
                requirements={course.requirements}
                fullDescription={course.fullDescription}
                category={course.category}
                />
            ))}
          </div>

          <h2 className="mt-12">Other Courses</h2>
        </div>
        <TestimonialsSlider />
      </div>
    </>
  );
};

export default ArchiveCategoryCourse;
