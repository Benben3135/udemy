import React from "react";
import { useNavigate } from "react-router-dom";
import categoryImagesData from "../util/categories"; // Use the correct path to your file

interface CategoryImage {
  category: string;
  imagePath: string;
}

interface CategoryProps {
  category: CategoryImage;
  additionalText?: string;
  displayAltOnly?: boolean;
}

const Category: React.FC<CategoryProps> = ({ category, additionalText, displayAltOnly = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categoryPage?category=${category.category}`);
  };

  if (displayAltOnly) {
    return (
      <div className="text-center pt-4">
        {additionalText && <p className="text-gray-500">{additionalText}</p>}
        <p className="text-black text-lg font-bold">{category.category}</p>
      </div>
    );
  }

  return (
    <div className="relative cursor-pointer overflow-hidden group" onClick={handleClick}>
      <img
        src={category.imagePath}
        alt={category.category}
        className="w-full h-[35vh] object-contain transition-transform duration-300 transform group-hover:scale-110"
      />
      <div className="">
        {additionalText && <p className="text-gray-500 pl-6">{additionalText}</p>}
        <p className="text-black text-lg font-bold pl-6 pt-4 ">{category.category}</p>
      </div>
    </div>
  );
};

const FeaturedCategory: React.FC = () => {
  const navigate = useNavigate();

  // Define additional text for each category
  const additionalTexts = [
    "Additional Text 1",
    "Additional Text 2",
    "Additional Text 3",
    "Additional Text 4",
  ];

  return (
    <div className="">
      <h1 className="mx-auto h-fit text-[1.5rem] pl-28 pt-10 font-[700]">
        Featured topics by category
      </h1>
      <div className="grid grid-cols-4 gap-8 mt-8 max-w-[82rem] mx-auto h-fit ">
        {categoryImagesData.slice(0, 8).map((category, index) => (
          <Category
            key={index}
            category={category}
            additionalText={additionalTexts[index]}
            displayAltOnly
          />
        ))}
      </div>
    </div>
  );
};

const CategoryImages: React.FC = () => {
  return (
    <>
      <div className="">
        <h1 className="mx-auto h-fit text-[1.5rem] pl-28 pt-10 font-[700]">
          Top categories
        </h1>
        <div className="grid grid-cols-4 gap-8 mt-8 max-w-[82rem] mx-auto h-fit ">
          {categoryImagesData.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
      <FeaturedCategory />
    </>
  );
};

export default CategoryImages;
