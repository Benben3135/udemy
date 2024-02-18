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
                if (selectedCategory) {  
                    const coursesData = await getAllCoursesByCategory(selectedCategory);
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
                    <Course img={''} title={''} teacher={''} price={0} tag={''} id={1} key={course.courseId} {...course} />
                ))}
            </div>
        </div>
    );
};

export default ArchiveCategoreyCourse;
