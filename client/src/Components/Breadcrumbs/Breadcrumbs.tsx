// Breadcrumbs.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface BreadcrumbsProps {
  category: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/category-page/${category}`);
  };

  return (
    <div className="breadcrumbs  bg-Udemygray-500 pt-8">
      <Link
        to="/"
        className="breadcrumb text-Udemyblue-200 hover:underline font-bold"
      >
        Home
      </Link>
      <span className="mx-2 text-Udemyblue-200">/</span>
      <span
        className="breadcrumb cursor-pointer text-Udemyblue-200 hover:underline font-bold"
        onClick={handleCategoryClick}
      >
        {category}
      </span>
    </div>
  );
};

export default Breadcrumbs;
