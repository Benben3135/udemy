import { Star } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [ratingRounded, setRatingRounded] = useState<number>(0);
  useEffect(() => {
    starColor();
  }, []);
  const starColor = () => {
    const roundedRating = Math.round(rating);
    console.log("your rounded number from" , rating , roundedRating)
    setRatingRounded(roundedRating);

  };

  return (
    <div className=" h-full w-full">
      <a href={`/course/${id}`}>
        <img className=" h-[9.6rem] w-full" src={img} alt="" />
        <h2 className=" font-bold text-[1.1rem] text-slate-800">{title}</h2>
        <p className=" text-xs font-light text-slate-800">{teacher}</p>
        <div className=" flex flex-row justify-start items-center mt-1">
          <div className=" text-sm font-bold">{rating.toFixed(2)}</div>
          <div className=" flex flex-row justify-start items-start h-fit w-fit ml-1 gap-[0.1rem]">
            {[...Array(5)].map((_, index) => (
              <Star
                strokeWidth={"0.8px"}
                key={index}
                size="15px"
                className={
                  index +1 <= ratingRounded
                    ? " border-slate-500 p-0 m-0 fill-Udemyorange-400 text-Udemyorange-400"
                    : "text-Udemyorange-400 border-slate-500 p-0 m-0"
                }
              />
            ))}
          </div>
          <div className=" text-xs text-slate-500 ml-1 pb-1">({numberOfRatings})</div>
        </div>

        <p className=" font-bold tracking-tight text-[1.2rem] mt-1">
          ${Math.round(Number(price))}
        </p>
        <div className=" w-full h-fit flex flex-row items-center justify-start mt-2">
          <div className=" text-center w-fit px-2 py-1 text-xs font-bold text-slate-700 bg-Udemyyellow-200">
            {tag}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Course;
