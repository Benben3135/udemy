import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Course, { CourseProps } from "../Courses/Course";
import { getAllCoursesByCategory } from '../../../api/coursesApi';  // המימוש של פונקציה זו תצטרך למצוא או לכתוב
export interface Course {
    courseId: number;

}

const ArchiveCategoreyCourse = () => {
     const { selectedCategory } = useParams();
    const [courses, setCourses] = useState<CourseProps[]>([]);


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                debugger
                if (selectedCategory) {
                    const coursesData = await getAllCoursesByCategory(selectedCategory);
                    console.log('coursesData:', coursesData);  // Add this line
                    setCourses(coursesData);
                }
            } catch (error) {
                console.error('Error fetching courses by category:', error);
            }
        };

        fetchCourses();
    }, [selectedCategory]);

    if (!selectedCategory) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{selectedCategory} Courses Archive</h1>
            <div className="flex flex-wrap">
                {courses.map((course) => (
                    <Course  key={course}
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
    );
};

export default ArchiveCategoreyCourse;
