import { useNavigate } from "react-router-dom";
import { } from "../../../public/images/teachOnUdemy/video-creation.jpg";

const Courses = () => {
  const navigate = useNavigate()
  return (
    <div className=" w-screen h-fit min-h-screen pt-[8rem] px-[14rem]">
      <div className=" w-full h-fit">
        <div className=" w-full h-[10rem] border border-gray-300 shadow-lg flex flex-row justify-center items-center p-10">
          <div className=" h-fit w-full flex flex-row items-center justify-between">
            <h2>Jump Into Course Creation</h2>
            <button onClick={() => navigate("/create-course")} className=" w-[20rem] h-12 bg-Udemypurple-300 text-[1rem] hover:bg-Udemypurple-400 font-bold text-white">
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
              <h2 className=" text-Udemyblue-300 underline underline-offset-4 cursor-pointer">
                Get Started
              </h2>
            </div>
          </div>
        </div>

        <div className=" w-full h-fit gap-6 flex flex-row items-center justify-center mt-6">
          <div className=" w-1/2 h-[15rem] border border-gray-300 shadow-lg flex flex-row justify-center  items-center px-[2rem] py-4">
            <div className=" h-full w-full flex flex-row gap-8 ">
              <img
                className=" h-full"
                src="../../../public/images/teachOnUdemy/video-creation.jpg"
                alt=""
              />
              <div className=" flex flex-col items-start justify-between">
                <h1 className=" text-[1.2rem]">Get Started with Video</h1>
                <h2 className=" w-[40ch]">
                  Quality video lectures can set your course apart. Use our
                  resources to learn the basics.
                </h2>
                <h2 className=" text-Udemyblue-300 underline underline-offset-4 cursor-pointer">
                  Get Started
                </h2>
              </div>
            </div>
          </div>

          <div className=" w-1/2 h-[15rem] border border-gray-300 shadow-lg flex flex-row justify-center  items-center px-[2rem] py-4">
            <div className=" h-full w-full flex flex-row gap-8 ">
              <img
                className=" h-full"
                src="../../../public/images/teachOnUdemy/build-audience.jpg"
                alt=""
              />
              <div className=" flex flex-col items-start justify-between">
                <h1 className=" font-normal text-[1.2rem]">
                  Build Your Audience
                </h1>
                <h2 className=" w-[40ch]">
                  Set your course up for success by building your audience.
                </h2>
                <h2 className=" text-Udemyblue-300 underline underline-offset-4 cursor-pointer">
                  Get Started
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-[15rem] border border-gray-300 shadow-lg flex flex-row justify-center  items-center px-[20rem] py-6 mt-6">
          <div className=" h-full w-full flex flex-row gap-44">
            <img
              className=" h-full"
              src="../../../public/images/teachOnUdemy/newcomer-challenge.jpg"
              alt=""
            />
            <div className=" flex flex-col items-start justify-between">
              <h1 className=" font-normal text-[1.5rem] text-slate-700">
                Join the New Instructor Challenge!
              </h1>
              <h2 className=" w-[70ch]">
                Get exclusive tips and resources designed to help you launch
                your first course faster! Eligible instructors who publish their
                first course on time will receive a special bonus to celebrate.
                Start today!
              </h2>
              <h2 className=" text-Udemyblue-300 underline underline-offset-4 cursor-pointer">
                Get Started
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full h-36 mt-8 flex flex-col justify-center gap-4 items-center mb-24">
          <h2>Are You Ready to Begin?</h2>
          <button onClick={() => navigate("/create-course")} className=" w-[20rem] h-12 bg-Udemypurple-300 text-[1rem] hover:bg-Udemypurple-400 font-bold text-white">
            Create your course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
