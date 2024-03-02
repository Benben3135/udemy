// TeamsTabContent.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

interface TeamsTabContent {
  course?: { secondDescriptions: string[] };
}

const TeamsTabContent: React.FC<{ course?: { secondDescriptions: string[] } }> = ({ course }) => {
  const navigate = useNavigate();

  const handleNavigateToOtherPage = () => {
    navigate("/teach/landing");
  };

  const renderSecondDescriptions = (secondDescriptions: string[]) => {
    console.log(course);
    return secondDescriptions.map((secondDescriptions, index) => (
      <div key={index} className="flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
        <Check className="min-w-4" size="16px" color="gray" />
        <h3 className="text-sm font-normal text-slate-700">{secondDescriptions}</h3>
      </div>
      
      
    ));
  };

  return (
    <div className="bg-white p-2 w-[23vw] text-center pl-5">
   
      {course ? (
        <div>
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
            alt="logo-ub"
            className="w-40 h-12 mt-4 text-left pl-6 pb-1"
          />
          <p className="text-Udemygray-600 text-[0.9rem] text-left pl-6 pr-6">
            Subscribe to this course and 25,000+ top-rated Udemy courses for your organization.
          </p>
          <button
            onClick={handleNavigateToOtherPage}
            className="w-[85%] h-12 bg-Udemyindigo-300 hover:bg-Udemypurple-600 font-bold my-3 cursor-pointer text-white mr-5"
          >
            Try Udemy for Business
          </button>
          <div className="flex flex-col justify-start items-start h-fit w-full mt-3 gap-2">
            {renderSecondDescriptions(course.secondDescriptions)}
          </div>
        </div>
      ) : (
        <div>No course data available</div>
      )}
    </div>
  );
};

export default TeamsTabContent;
