import Course, { CourseProps } from './Course';
const Courses = ({ type, componentsTitle }: { type: any, componentsTitle: string }) => {
    if (type === null || type === undefined) return;
    console.log(componentsTitle)
    return (
        <div>
            <strong><h2 style={{ paddingLeft: "20px" }}>{componentsTitle}</h2></strong>
            <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
                {type.map((course: CourseProps, index: number) => (
                    <div key={index}>
                        <Course img={course.course_img} title={course.courseName} teacher={course.teacherName} rating={course.rating} price={course.fullPrice}
                            tag={course.language} numberOfRatings={course.numberOfRatings} id={course.courseId} />
                    </div>
                ))}
            </div></div>
    )
}

export default Courses