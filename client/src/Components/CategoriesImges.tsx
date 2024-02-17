import React from "react";
import categoryImagesData from "../util/categories";
import { Link, useNavigate } from "react-router-dom";
 // Use the correct path to your file

interface CategoryImage {
  category: string;
  imagePath: string;
}

interface CategoryProps {
  category: CategoryImage;
  additionalText?: string;
  displayAltOnly?: boolean;
}

const Category: React.FC<CategoryProps> = ({
  category,
  additionalText,
  displayAltOnly = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categoryPage?category=${category.category}`);
  };

  if (displayAltOnly) {
    return (
      <>
      <div
      className="relative cursor-pointer overflow-hidden group"
      onClick={handleClick}
    >
      <div className="text-center pt-4">
        {additionalText && (
          <p className=" text-Udemygray-550 font-[700] text-[1.25rem] text-left pb-6 pt-5 mx-6">
            {additionalText}
          </p>
        )}
        <p className="text-Udemyblue-300 text-[1rem] font-bold underline text-left mx-6" >
          {category.category }
        </p>
        <p className="text-Udemygray-300 text-[0.8rem] text-left mx-6">36,354,994 learners
 </p>
      </div>
      
     <div/>
      </div>
      
      </>


    );
    
  }

  return (
    <div
      className="relative cursor-pointer overflow-hidden group"
      onClick={handleClick}
    >
      <img
        src={category.imagePath}
        alt={category.category}
        className="w-full h-[35vh] object-contain transition-transform duration-300 transform group-hover:scale-110"
      />
    </div>
  );
};

const FeaturedCategory: React.FC = () => {
  const navigate = useNavigate();

  // Define additional text for each category
  const additionalTexts = [
    " Development",
    "Business",
    "Design",
    "IT and Software",
  ];

  return (
    <div className="bg-Udemygray-100  pb-24 mt-12">
      <h1 className="mx-auto h-fit text-[1.5rem] pl-28 pt-14 font-[700] text-Udemygray-550">
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
