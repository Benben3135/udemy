export interface CourseProps {
  courseId: number;
  teacherId: number;
  courseName: string;
  teacherName: string;
  mainDescription: string;
  rating: number;
  numberOfRatings: number;
  numberOfStudents: number;
  lastUpdated: Date;
  language: string;
  subtitlesLanguage: { type: string; default: "English" };
  fullPrice: number;
  discountPrice: number;
  secondDescriptions: [string];
  courseDuration: number;
  articlesNumber: number;
  downloadableResourcesNumber: number;
  courseContent: string;
  requirements: [string];
  fullDescription: string;
  course_img: string;
}
const Course = ({
  img,
  title,
  teacher,
  rating,
  price,
  tag,
  numberOfRatings,
  id,
}: {
  img: string;
  title: string;
  teacher: string;
  rating: number;
  price: number;
  tag: string;
  numberOfRatings: number;
  id: number;
}) => {
  const starColor = () => {
    const stars = document.querySelectorAll(".star") as NodeListOf<HTMLElement>;
    if (stars.length > 0) {
      stars.forEach((star, index) => {
        if (index >= 5) index = 0;
        if (index + 1 <= rating) star.style.color = "#B4690E";
      });
    }
  };
  starColor();
  return (
    <div className=" h-full w-full">
      <a href={`/course/${id}`}>
        <img className=" h-[9.6rem] w-full" src={img} alt="" />
        <h2 className=" font-bold text-[1.1rem] text-slate-800">{title}</h2>
        <p className=" text-xs font-light text-slate-800">{teacher}</p>
        <p>
          {rating.toFixed(2)}&nbsp;
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>&nbsp;({numberOfRatings})
        </p>
        <p className=" font-bold tracking-tight text-[1rem] mt-1">
          ${Math.round(Number(price))}
        </p>
        <div className=" w-full h-fit flex flex-row items-center justify-start mt-2">
          <div className=" text-center w-fit px-4 text-xs font-bold text-slate-700 bg-Udemyyellow-200">
            {tag}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Course;
