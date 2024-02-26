import React from "react";
import {} from "../../../public/images/teachOnUdemy/engaging-course.jpg";

const Courses = () => {
  return (
    <div className=" w-screen h-fit min-h-screen pt-[8rem] px-[14rem]">
      <div className=" w-full h-fit">
        <div className=" w-full h-[10rem] border border-gray-300 shadow-lg flex flex-row justify-center items-center p-10">
          <div className=" h-fit w-full flex flex-row items-center justify-between">
            <h2>Jump Into Course Creation</h2>
            <button className=" w-[20rem] h-12 bg-Udemypurple-300 text-[1rem] hover:bg-Udemypurple-400 font-bold text-white">
              Create your course
            </button>
          </div>
        </div>
        <div className=" w-full h-36 flex flex-row justify-center items-center">
          <h2>
            Based on your experience, we think these resources will be helpful.
          </h2>
        </div>
        <div className=" w-full h-[15rem] border border-gray-300 shadow-lg flex flex-row justify-center  items-center px-[20rem] py-6">
          <div className=" h-full w-full flex flex-row gap-44">
            <img
              className=" h-full"
              src="../../../public/images/teachOnUdemy/engaging-course.jpg"
              alt=""
            />
            <div className=" flex flex-col items-start justify-between">
              <h1 className=" font-normal text-[1.5rem]">
                Create an Engaging Course
              </h1>
              <h2 className=" w-[70ch]">
                Whether you've been teaching for years or are teaching for the
                first time, you can make an engaging course. We've compiled
                resources and best practices to help you get to the next level,
                no matter where you're starting.
              </h2>
              <h2 className=" text-Udemyblue-300 underline underline-offset-4 cursor-pointer">Get Started</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
