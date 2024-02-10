import React, { useState } from "react";

interface TabsComponentProps {
  categories: string[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleTabClick = (category: string) => {
    setSelectedCategory(category);
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
                  ? "text-Udemyblue-400  font-900"
                  : "text-slate-800"
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
                  return <div>תוכן עבור Development</div>;
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
                  return <div> Development</div>;
              }
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;
