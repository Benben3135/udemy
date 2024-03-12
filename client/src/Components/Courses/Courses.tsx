import Course, { CourseProps } from "./Course";

const Courses = ({
  type,
  componentsTitle,
}: {
  type: CourseProps[]; // השינוי כאן נעשה על מנת להצביע על הטיפוס המתאים
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
                teacherId={course.teacherId}
                key={index}
                course_img={course.course_img}
                courseName={course.courseName}
                teacherName={course.teacherName}
                rating={course.rating}
                fullPrice={course.fullPrice}
                language={course.language}
                numberOfRatings={course.numberOfRatings}
                courseId={course.courseId}
                courseDuration={course.courseDuration}
                lastUpdated={course.lastUpdated}
                mainDescription={course.mainDescription}
                secondDescriptions={course.secondDescriptions}
                numberOfStudents={course.numberOfStudents}
                subtitlesLanguage={course.subtitlesLanguage}
                discountPrice={course.discountPrice}
                articlesNumber={course.articlesNumber}
                downloadableResourcesNumber={course.downloadableResourcesNumber}
                courseContent={course.courseContent}
                requirements={course.requirements}
                fullDescription={course.fullDescription}
                category={course.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
