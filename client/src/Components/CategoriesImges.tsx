import React from "react";
import { useNavigate } from "react-router-dom";
import categoryImagesData from "../util/categories"; // השתמש בנתיב הנכון לקובץ שלך

interface CategoryImage {
  category: string;
  imagePath: string;
}

const CategoryImages: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="mx-auto h-fit text-[1.5rem] pl-28 pt-10 font-[700]">
        Top categories
      </h1>
      <div className="grid grid-cols-4 gap-8 mt-8 max-w-[82rem] mx-auto h-fit ">
        {categoryImagesData.map(
          ({ category, imagePath }: CategoryImage, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden group"
              onClick={() => navigate(`/categoryPage?category=${category}`)}
            >
              <img
                src={imagePath}
                alt={category}
                className="w-full h-[35vh] object-contain  transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="">
                <p className="text-black text-lg font-bold pl-6 pt-4 ">{category}</p>
              </div>
            </div>
            
          )
        )}
      </div>
    </>
  );
};

export default CategoryImages;
