// TeamsTabContent.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { CourseProps } from "../Courses/Course";
import { Check } from "lucide-react";

interface TeamsTabContentProps {
  course?: CourseProps; // שימוש ב-? להצהיר על כך שה-props אופציונלי
}

const TeamsTabContent: React.FC<TeamsTabContentProps> = ({ course }) => {
  const navigate = useNavigate();  if (!course) {
    return <div>No course data available</div>;
  }
  const { secondDescriptions } = course;
  const handleNavigateToOtherPage = () => {
    navigate('/teach/landing'); // שינוי זה!
  };
  return (
    <div className="bg-white p-2 w-[23vw] text-center pl-5">
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
        alt="logo-ub"
        className="w-40 h-12 mt-4 text-left pl-6 pb-1"
      />
      <p className="text-Udemygray-600 text-[0.9rem] text-left pl-6 pr-6">
        Subscribe to this course and 25,000+ top-rated Udemy courses for your
        organization.
      </p>
      <button onClick={handleNavigateToOtherPage}  className="w-[85%] h-12 bg-Udemyindigo-300 hover:bg-Udemypurple-600 font-bold my-3 cursor-pointer text-white mr-5">
        Try Udemy for Business
      </button>
      <div className="flex flex-col justify-start items-start h-fit w-full mt-3 gap-2">
        <div className="flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
          <Check className="min-w-4" size="16px" color="gray" />
          {secondDescriptions && secondDescriptions.length > 0 && (
            <h3 className="text-sm font-normal text-slate-700">
              {secondDescriptions[0]}
            </h3>
          )}
        </div>
        <div className="flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
          <Check className="min-w-4" size="16px" color="gray" />
          {secondDescriptions && secondDescriptions.length > 1 && (
            <h3 className="text-sm font-normal text-slate-700">
              {secondDescriptions[1]}
            </h3>
          )}
        </div>
        <div className="flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
          <Check className="min-w-4" size="16px" color="gray" />
          {secondDescriptions && secondDescriptions.length > 2 && (
            <h3 className="text-sm font-normal text-slate-700">
              {secondDescriptions[2]}
            </h3>
          )}
        </div>
        <div className="flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
          <Check className="min-w-4" size="16px" color="gray" />
          {secondDescriptions && secondDescriptions.length > 2 && (
            <h3 className="text-sm font-normal text-slate-700">
              {secondDescriptions[2]}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamsTabContent;
