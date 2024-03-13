// PersonalTabContent.tsx
import React, { useEffect, useState } from "react";
import AddToCart from "../carts/AddToCart";
import { addCourseToCart } from "../../../api/carts/carts";
import { useSelector } from "react-redux";
import { UserState, userSelector } from "../../features/user/userSlice";


interface PersonalTabContentProps {
  handleLearnMoreClick: () => void;
  handleAddToCart: (course: {
    courseId: number;
    uid: string;
    courseName: string;
    teacherName: string;
    fullPrice: number;
    discountPrice: number;
  }) => void;
  course: {
    uid: string;
    courseId: number;
    teacherId: number;
    courseName: string;
    teacherName: string;
    mainDescription: string;
    rating: number;
    numberOfRatings: number;
    numberOfStudents: number;
    lastUpdated?: Date;
    language: string;
    subtitlesLanguage: { type: string; default: "English" };
    fullPrice: number;
    discountPrice: number;
    secondDescriptions: string[];
    courseDuration: number;
    articlesNumber: number;
    downloadableResourcesNumber: number;
    courseContent: string;
    requirements: [string];
    fullDescription: string;
    course_img: string;
    category: string;
  };
}

const PersonalTabContent: React.FC<PersonalTabContentProps> = ({ handleLearnMoreClick, course }) => {
  const userRedux = useSelector(userSelector); // השם שבו אתה שמור את התוצאה מה־userSelector
  const [user, setUser] = useState<UserState>();

  useEffect(() => {
    return setUser(userRedux);
  }, [userRedux]);

   const handleAddToCartInternal = async () => {
    try {
      debugger
     
      await addCourseToCart(course.courseId, user?.uid || '');
    } catch (error) {
      console.error("Failed to add course to cart", error);
    }
  };


  return (
    <div className="bg-white p-2   w-[23vw] text-center pl-5 ">
      <h3 className="text-[1.3rem] font-bold text-Udemygray-500 mt-4 text-left pl-6 pb-1">
        Subscribe to Udemy’s top <br></br>courses
      </h3>
      <p className="text-Udemygray-600 text-[0.9rem] text-left pl-6">
        Get this course, plus 11,000+ of our top-rated courses, with Personal
        Plan.
        <span
          className="text-Udemyblue-300 cursor-pointer pl-2 underline font-bold pr-6 "
          onClick={handleLearnMoreClick}
        >
          Learn more
        </span>
      </p>
      <button
        className="  w-[85%] h-12 bg-Udemyindigo-300 hover:bg-Udemypurple-600 font-bold my-3  cursor-pointer text-white mr-5 "
        onClick={handleLearnMoreClick}
      >
        Try Personal Plan for free
      </button>
      <p className="text-slate-600 text-[0.8rem]  text-center">
        Starting at ₪66.67 per month after trial.<br></br> Cancel anytime.
      </p>
      <h5 className="flex justify-center text-[0.8rem] text-Udemygray-300 my-2">
        ————————or————————
      </h5>
      <h4 className="text-left text-[1.5rem] font-bold text-Udemygray-600 pl-6 py-1 ">
        {course.fullPrice}$
      </h4>
      <AddToCart handleAddToCart={handleAddToCartInternal} />
    </div>
  );
};

export default PersonalTabContent;
