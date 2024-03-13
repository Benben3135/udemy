import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyCoursesCategories } from "../My-Courses/MyCoursesCategories";

interface MyCoursesNavBarProps{
  index: number
}

const MyCoursesNavBar = ({index}:MyCoursesNavBarProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(index);
  const navigate = useNavigate(); // Get the history object
  useEffect(() => {
    if (activeIndex === 0) {
      navigate("/my-courses/learning");
    }
    if (activeIndex === 1) {
      navigate("/my-courses/myLists");
    }
    if (activeIndex === 2) {
      navigate("/my-courses/wishlist");
    }
    if (activeIndex === 3) {
      navigate("/my-courses/tools");
    }
  }, [activeIndex]);


  return (
    <div className=" w-full h-[10.5rem] bg-Udemygray-500 flex flex-row items-end justify-center">
      <div className="  h-[7.8rem] w-[45%] flex flex-col items-start justify-between">
        <h1 className=" text-[2.8rem] font-bold text-white">My learning</h1>
        <div className=" flex flex-row w-fit h-fit gap-4">
          {" "}
          {MyCoursesCategories.map((category, index) => (
            <div
              onClick={() => setActiveIndex(index)}
              key={index}
              className=" flex flex-col h-full w-fit gap-2 cursor-pointer"
            >
              <h2 className=" text-Udemygray-200 font-bold">{category}</h2>
              <div
                className={
                  index === activeIndex
                    ? " w-full h-[0.35rem] bg-Udemygray-100"
                    : "w-full h-[0.35rem]"
                }
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCoursesNavBar;
