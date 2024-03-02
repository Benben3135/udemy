// TeamsTabContent.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
interface TeamsTabContentProps {
  handleLearnMoreClick: () => void;
  course: {
    fullPrice: number;
    discountPrice: number;
    secondDescriptions: string[]
  };
}

const TeamsTabContent: React.FC<TeamsTabContentProps> = ({
  handleLearnMoreClick,
  course,
}) => {

  const navigate = useNavigate();

  const handleNavigateToOtherPage = () => {
    navigate("/teach/landing");
  };

  const renderSecondDescriptions = (secondDescriptions: string[]) => {
    console.log(course);
    return secondDescriptions.slice(0, 4).map((description, index) => (
      <div key={index} className="flex flex-row justify-start items-start w-full text-sm font-normal text-slate-700 gap-4">
        <Check className="min-w-4" size="16px" color="gray" />
        <h3 className="text-sm font-normal text-slate-700">{description}</h3>
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
          <p className="text-slate-600 text-[0.8rem]  text-center">
        Starting at ₪66.67 per month after trial.<br></br> Cancel anytime.
      </p>
      <h5 className="flex justify-center text-[0.8rem] text-Udemygray-300 my-2">
        ————————or————————
      </h5>
      <h4 className="text-left text-[1.5rem] font-bold text-Udemygray-600 pl-6 py-1 ">
        {course.fullPrice}$
      </h4>
      <button
        className="  w-[85%] h-12 bg-white hover:bg-Udemygray-150 font-bold my-2 cursor-pointer text-Udemygray-600 mr-5 border-[1px] border-Udemygray-550 "
        onClick={handleLearnMoreClick}
      >
        Buy this course
      </button>
        </div>
      ) : (
        <div>No course data available</div>
      )}
    </div>
  );
};

export default TeamsTabContent;
