import { getCoursesByRecentlySearched } from '../../../api/coursesApi';
import Course, { CourseProps } from './Course';

const courses: CourseProps[] = await getCoursesByRecentlySearched();
const Courses = () => {

    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            {courses.map(course => <Course img={course.course_img} title={course.courseName} teacher={course.teacherName} rating={course.rating} price={course.fullPrice}
                tag={course.language} numberOfRatings={course.numberOfRatings} />)}
        </div>
    )
}

export default Courses