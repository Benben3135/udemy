import Course, { CourseProps } from "./Course";
import { MostViewedCoursesList } from "../../../api/coursesApi"; // הוספתי ייבוא של MostViewedCoursesList

const Courses = ({
  type,
  componentsTitle,
}: {
  type: MostViewedCoursesList; // השינוי כאן נעשה על מנת להצביע על הטיפוס המתאים
  componentsTitle: string;
}) => {
  if (!type || !type.length) return null; // שינוי כאן - הוספתי בדיקה שלא לצייר אם אין טיפוס או אם המערך ריק

  return (
    <div className="flex flex-row justify-center items-center w-full h-fit mt-6">
      <div className="flex flex-col w-fit h-full justify-start items-start">
        <strong>
          <h2 className="font-bold text-[1.7rem] pl-28 text-slate-900">
            {componentsTitle}
          </h2>
        </strong>
        <div className="flex gap-5 p-5 h-[21rem] w-[95rem] px-28">
          {type.map((course: CourseProps, index: number) => (
            <div className="h-full flex-1 flex-grow" key={index}>
              <Course
                key={index}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
