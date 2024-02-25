// PersonalTabContent.tsx
import React from "react";

interface PersonalTabContentProps {
  handleLearnMoreClick: () => void;
}

const PersonalTabContent: React.FC<PersonalTabContentProps> = ({ handleLearnMoreClick }) => {
  return (
    <div className="bg-white p-2  w-[25vw]">
      <h3 className="text-lg font-bold text-slate-800 mt-4">
        Subscribe to Udemy’s top courses
      </h3>
      <p className="text-slate-600">
        Get this course, plus 11,000+ of our top-rated courses, with Personal Plan.
        <span
          className="text-Udemyblue-200 cursor-pointer"
          onClick={handleLearnMoreClick}
        >
          Learn more
        </span>
      </p>
      <button className="btn-primary " onClick={handleLearnMoreClick}>
        Try Personal Plan for free
      </button>
      <p className="text-slate-600 mt-2">
        Starting at ₪66.67 per month after trial. Cancel anytime.
      </p>
    </div>
  );
};

export default PersonalTabContent;
