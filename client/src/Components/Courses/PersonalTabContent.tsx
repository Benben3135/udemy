// PersonalTabContent.tsx
import React from "react";

interface PersonalTabContentProps {
  handleLearnMoreClick: () => void;
}

const PersonalTabContent: React.FC<PersonalTabContentProps> = ({ handleLearnMoreClick }) => {
  return (
    <div className="bg-white p-2 pl-8  w-[25vw] text-left">
      <h3 className="text-[1.3rem] font-bold text-Udemygray-500 mt-4">
        Subscribe to Udemy’s top <br></br>courses
      </h3>
      <p className="text-Udemygray-600 text-[0.9rem]">
        Get this course, plus 11,000+ of our top-rated courses, with Personal Plan. 
        <span
          className="text-Udemyblue-300 cursor-pointer pl-2 underline font-bold "
          onClick={handleLearnMoreClick}
        >
           Learn more
        </span>
      </p>
      <button className="btn-primary bg-Udemyblue-300 " onClick={handleLearnMoreClick}>
        Try Personal Plan for free
      </button>
      <p className="text-slate-600 mt-2">
        Starting at ₪66.67 per month after trial. Cancel anytime.
      </p>
    </div>
  );
};

export default PersonalTabContent;
