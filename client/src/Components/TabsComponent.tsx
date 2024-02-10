import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

interface TabsComponentProps {
  categories: string[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showLearnMoreButton, setShowLearnMoreButton] =
    useState<boolean>(false);

  // הגדרה של הקטגוריה שתוצג באופן דיפולטי
  useEffect(() => {
    setSelectedCategory("Development");
    setShowLearnMoreButton(true); // הצגת כפתור "גלו עוד" בתחילה
  }, []);

  const handleTabClick = (category: string) => {
    setSelectedCategory(category);
    setShowLearnMoreButton(true); // הצגת כפתור "גלו עוד" בעת בחירת קטגוריה חדשה
  };

  return (
    <div className="font-custom max-w-[82rem] mx-auto h-fit  ">
      <h1 className=" font-bold text-4xl leading-[1.7rem] tracking-normal text-Udemygray-500 font-custom mt-16 mb-5">
        A broad selection of courses
      </h1>
      <p className="text-lg font-600 mb-5">
        Choose from over 210,000 online video courses with new additions
        published every month
      </p>
      <div>
        {/* יצירת טאבים */}
        <div className="flex">
          {categories.map((category) => (
            <div
              key={category}
              className={`cursor-pointer px-4 ${
                selectedCategory === category
                  ? "text-Udemygray-500  font-bold"
                  : "text-Udemygray-300 font-bold"
              }`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* הצגת התוכן הנבחר */}
        {selectedCategory && (
          <div>
            {/* כאן תוכל להציג את התוכן הנבחר עבור הקטגוריה selectedCategory */}
            {/* לדוגמה, תוכל להשתמש ב-switch או if פשוט */}
            {(() => {
              switch (selectedCategory) {
                case "Development":
                  return (
                    <div className=" border  border-Udemygray-200  pl-10 pr-10 mr-11 mt-2 mb-5">
                      <h1 className=" font-bold text-2xl   text-Udemygray-500 font-custom mt-6 mb-5">
                        Expand your career opportunities with Python
                      </h1>
                      <p className="mr-72 mb-6">
                        Take one of Udemy’s range of Python courses and learn
                        how to code using this incredibly useful language. Its
                        simple syntax and readability makes Python perfect for
                        Flask, Django, data science, and machine learning.
                        You’ll learn how to build everything from games to sites
                        to apps. Choose from a range of courses that will appeal
                        to both beginners and advanced developers alike.
                      </p>

                      <button className="border p-2 border-gray-500 font-bold text-Udemygray-500 text-sm mb-12 ">
                        Explore {selectedCategory}{" "}
                      </button>
                    </div>
                  );
                case "Business":
                  return <div>תוכן עבור Business</div>;
                case "Design":
                  return <div>תוכן עבור Design</div>;
                case "Marketing":
                  return <div>תוכן עבור Marketing</div>;
                case "Lifestyle":
                  return <div>תוכן עבור Lifestyle</div>;
                case "Finance & Accounting":
                  return <div>תוכן עבור Finance & Accounting</div>;
                case "Music":
                  return <div>תוכן עבור Music</div>;
                default:
                  return (
                    <div className="h-25vh ">תוכן עבור {selectedCategory}</div>
                  );
              }
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;
