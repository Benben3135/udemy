// src/components/TwoColumnComponent.js
import { useNavigate } from "react-router-dom";
import TestimonialsSlider from "./TestimonialsSlider";


const BannerUdemy = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex max-w-[62rem] mx-auto h-fit py-12">
        {/* עמודה ראשונה - עם תמונה */}

        {/* עמודה שנייה - עם כותרת וכפתורים */}
        <div className="w-1/2 p-4 align-middle">
          <img
            src=" https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
            alt="תיאור התמונה"
            className="w-full h-9 rounded-lg ml-[-8rem] mb-3 "
          />
          <h2 className="text-4xl font-bold mb-4 text-Udemygray-500">
            {" "}
            Upskill your team with<br></br> Udemy Business
          </h2>
          <ul className="list-disc pl-4 mb-8 text-[1.2rem] text-Udemygray-500 font-[400]">
            <li>
              Unlimited access to 25,000+ top Udemy <br></br>courses, anytime,
              anywhere
            </li>
            <li>
              International course collection in 14<br></br> languages
            </li>
            <li>Top certifications in tech and business</li>
          </ul>
          <div className="flex space-x-4">
            <button className=" border p-2 border-gray-500 font-[800] text-white text-sm mb-12 back bg-Udemygray-500 px-6 py-3">
              Get Udemy Buisness
            </button>
            <button className="border p-2 border-gray-500  text-Udemygray-500 text-sm mb-12 px-6 py-3 font-[800] ">
              Learn More{" "}
            </button>
          </div>
        </div>
        <div className="w-[27.1rem] p-4">
          <img
            src=" https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
            alt="תיאור התמונה"
            className="w-[40.1rem] h-[400px]"
          />
        </div>
      </div>
      <TestimonialsSlider />

      <div className="flex max-w-[62rem] mx-auto h-fit">
        {/* עמודה שנייה - עם כותרת וכפתורים */}
        <div className="w-[27.1rem] p-4">
          <img
            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
            alt="תיאור התמונה"
            className="w-[40.1rem] h-[400px]"
          />
        </div>

        {/* עמודה ראשונה - עם תמונה */}
        <div className="w-1/2 p-4 align-middle ml-10">
          <h2 className="text-4xl font-bold mb-4 mt-14 text-Udemygray-500 ">
            {" "}
            Become an instructor{" "}
          </h2>
          <p className="list-disc pl-4 mb-8 text-[1.2rem] text-Udemygray-500 font-[400]">
            Instructors from around the world teach millions of learners on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <div className="flex space-x-4 ml-5">
            <button onClick={() => navigate("/register-page")} className="border p-2 border-gray-500 font-[800] text-white text-sm mb-12 back bg-Udemygray-500 px-6 py-3">
              Start Teaching Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerUdemy;
