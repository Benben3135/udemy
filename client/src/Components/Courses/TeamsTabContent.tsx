// TeamsTabContent.tsx
import React from "react";

interface TeamsTabContentProps {
  handleLearnMoreClick: () => void;
}

const TeamsTabContent: React.FC<TeamsTabContentProps> = ({
  handleLearnMoreClick,
}) => {
  return (
    <div className="bg-white p-10  w-[23vw]">
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
        alt="logo-ub"
        className=""
      />
      <p className="text-slate-600">
        Subscribe to this course and 25,000+ top‑rated Udemy courses for your
        organization.
        <span
          className="text-Udemyblue-200 cursor-pointer"
          onClick={handleLearnMoreClick}
        >
          Learn more
        </span>
      </p>
      <button className="btn-primary " onClick={handleLearnMoreClick}>
        Try Udemy for Business
      </button>
      <p className="text-slate-600 mt-2">
        Starting at ₪66.67 per month after trial. Cancel anytime.
      </p>
    </div>
  );
};

export default TeamsTabContent;
