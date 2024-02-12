import Course, { CourseProps } from "./Course";
const Courses = ({
  type,
  componentsTitle,
}: {
  type: any;
  componentsTitle: string;
}) => {
  if (type === null || type === undefined) return;

  return (
    <div className=" flex flex-row justify-center items-center w-full h-fit mt-6">
      <div className=" flex flex-col w-fit h-full justify-start items-start">
        <strong>
          <h2 className=" font-bold text-[1.7rem] pl-5 text-slate-900">{componentsTitle}</h2>
        </strong>
        <div className=" flex gap-5 p-5 h-[21rem] w-[95rem]">
          {type.map((course: CourseProps, index: number) => (
            <div className=" h-full flex-1 flex-grow" key={index}>
              <Course
                img={course.course_img}
                title={course.courseName}
                teacher={course.teacherName}
                rating={course.rating}
                price={course.fullPrice}
                tag={course.language}
                numberOfRatings={course.numberOfRatings}
                id={course.courseId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
