import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Course, { CourseProps } from "../Courses/Course";
import { getAllCoursesByCategory, getCoursesByMostViewing } from '../../../api/coursesApi'; 

export interface Course {
    courseId: number;
}

const ArchiveCategoreyCourse = () => {
    const { selectedCategory } = useParams();
    const [courses, setCourses] = useState<CourseProps[]>([]);
    const [mostViewedCourses, setMostViewedCourses] = useState<CourseProps[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                debugger
                if (selectedCategory) {
                    const coursesData = await getAllCoursesByCategory(selectedCategory);
                    console.log('coursesData:', coursesData);
                    setCourses(coursesData);
                }
            } catch (error) {
                console.error('Error fetching courses by category:', error);
            }
        };

        const fetchMostViewedCoursesData = async () => {
            try {
                const mostViewedCoursesData = await getCoursesByMostViewing();
                console.log('mostViewedCoursesData:', mostViewedCoursesData);
                setMostViewedCourses(mostViewedCoursesData);
            } catch (error) {
                console.error('Error fetching most viewed courses:', error);
            }
        };

        fetchCourses();
        fetchMostViewedCoursesData();
    }, [selectedCategory]);

    if (!selectedCategory) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{selectedCategory} Courses Archive</h1>

            {/* Display Most Viewed Courses */}
            <div>
                <h2>Most Viewed Courses</h2>
                <div className="flex flex-wrap">
                    {mostViewedCourses.map((course) => (
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
                            secondDescriptions={course.secondDescriptions} />
                    ))}
                </div>
            </div>

            {/* Display Other Courses */}
            <div>
                <h2>Other Courses</h2>
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
                            secondDescriptions={course.secondDescriptions} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchiveCategoreyCourse;
