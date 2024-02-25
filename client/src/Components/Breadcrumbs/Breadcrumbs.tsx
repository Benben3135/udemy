// Breadcrumbs.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbsProps {
  category: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/category-page/${category}`);
  };

  return (
    <div className="breadcrumbs bg-gray-200 p-4">
      <Link to="/" className="breadcrumb text-blue-500 hover:underline">
        Home
      </Link>
      <span className="mx-2 text-gray-500">/</span>
      <span
        className="breadcrumb cursor-pointer text-blue-500 hover:underline"
        onClick={handleCategoryClick}
      >
        {category}
      </span>
    </div>
  );
};

export default Breadcrumbs;
