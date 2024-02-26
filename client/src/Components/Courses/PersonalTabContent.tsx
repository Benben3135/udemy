// PersonalTabContent.tsx
import React from "react";
import { Course } from "./../../../../server/api/courses/coursesModel";

interface PersonalTabContentProps {
  handleLearnMoreClick: () => void;
  course: {
    fullPrice: number;
    discountPrice: number;
  };
}

const PersonalTabContent: React.FC<PersonalTabContentProps> = ({
  handleLearnMoreClick,
  course,
}) => {
  return (
    <div className="bg-white p-2   w-[24vw] text-center pl-5">
      <h3 className="text-[1.3rem] font-bold text-Udemygray-500 mt-4 text-left pl-6 pb-1">
        Subscribe to Udemy’s top <br></br>courses
      </h3>
      <p className="text-Udemygray-600 text-[0.9rem] text-left px-6">
        Get this course, plus 11,000+ of our top-rated courses, with Personal
        Plan.
        <span
          className="text-Udemyblue-300 cursor-pointer pl-2 underline font-bold "
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
      <span className="flex justify-center text-[0.8rem] text-Udemygray-300 my-3"></span>
      ————————or————————{" "}
      <h4 className="text-left text-[1.5rem] font-bold text-Udemygray-600 pl-6 py-4 ">
        {course.fullPrice}$
      </h4>
      <button
        className="  w-[85%] h-12 bg-white hover:bg-Udemygray-150 font-bold my-3  cursor-pointer text-Udemygray-600 mr-5 border-[1px] border-Udemygray-550 "
        onClick={handleLearnMoreClick}
      >
        Buy this course
      </button>
    </div>
  );
};

export default PersonalTabContent;
