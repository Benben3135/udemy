import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewTeacher } from "../../../api/teachersAPI";
import { userSelector } from "../../features/user/userSlice";
import { User } from "../../util/interfaces";


const LandingPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const navigate = useNavigate();
  const userRedux: User = useSelector(userSelector);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  const joinTeach = async () => {
    if(user){
      const result = await addNewTeacher(user.uid)
      if (result){
        navigate("/instructor-page")
      }
    }
  }

  return (
    <div className=" w-full h-fit flex flex-col justify-center items-start">
      <div className=" w-full h-[34rem] px-14">
        <div
          className=" w-full h-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url("https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className=" w-full h-[15rem] flex flex-row items-start px-[18rem]">
            <div className=" w-[19rem] h-full">
              <h1 className=" text-[3rem] leading-[3rem] font-bold mb-4">
                Come teach <br /> with us
              </h1>
              <h2 className=" text-[1.24rem] text-slate-800">
                Become an instructor and change <br /> lives — including your
                own
              </h2>
              <button onClick={() => joinTeach()} className=" w-full h-[2.8rem] mt-4 bg-Udemygray-500 hover:bg-Udemygray-400 text-white font-bold">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-[30rem] flex flex-row justify-center items-center py-10 mt-14">
        <div className=" w-3/5 h-full mx-auto flex flex-col justify-start items-center">
          <h1 className=" font-bold text-[2.6rem] font-sans tracking-tighter mb-4">
            So many reasons to start
          </h1>
          <div className=" w-full flex flex-row justify-center items-center gap-12 p-4">
            <div className=" flex-1 flex flex-col justify-center items-center">
              <img
                src="../../../public/images/teachOnUdemy/value-prop-teach-v3.jpg"
                alt=""
              />
              <h1 className=" font-bold text-[1.2rem] mt-6">Teach your way</h1>
              <h2 className=" text-center text-gray-900">
                Publish the course you want, in the way you want, and always
                have control of your own content.
              </h2>
            </div>
            <div className=" flex-1 flex flex-col justify-center items-center">
              <img
                src="../../../public/images/teachOnUdemy/value-prop-inspire-v3.jpg"
                alt=""
              />
              <h1 className=" font-bold text-[1.2rem]">Teach your way</h1>
              <h2 className=" text-center text-gray-900">
                Publish the course you want, in the way you want, and always
                have control of your own content.
              </h2>
            </div>
            <div className=" flex-1 flex flex-col justify-center items-center">
              <img
                src="../../../public/images/teachOnUdemy/value-prop-get-rewarded-v3.jpg"
                alt=""
              />
              <h1 className=" font-bold text-[1.2rem]">Teach your way</h1>
              <h2 className=" text-center text-gray-900">
                Publish the course you want, in the way you want, and always
                have control of your own content.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-[12rem] bg-Udemyblue-300">
        <div className=" w-1/2 mx-auto h-full flex flex-row items-center justify-between">
          <div className=" flex flex-col items-center justify-center h-fit gap-2">
            <h1 className=" text-white font-bold text-[2.7rem] leading-9">
              62M
            </h1>
            <h2 className=" text-white text-[1.1rem]">students</h2>
          </div>
          <div className=" flex flex-col items-center justify-center h-fit gap-2">
            <h1 className=" text-white font-bold text-[2.7rem] leading-9">
              75+
            </h1>
            <h2 className=" text-white text-[1.1rem]">languages</h2>
          </div>
          <div className=" flex flex-col items-center justify-center h-fit gap-2">
            <h1 className=" text-white font-bold text-[2.7rem] leading-9">
              830M
            </h1>
            <h2 className=" text-white text-[1.1rem]">Enrollments</h2>
          </div>
          <div className=" flex flex-col items-center justify-center h-fit gap-2">
            <h1 className=" text-white font-bold text-[2.7rem] leading-9">
              180+
            </h1>
            <h2 className=" text-white text-[1.1rem]">Countries</h2>
          </div>
          <div className=" flex flex-col items-center justify-center h-fit gap-2">
            <h1 className=" text-white font-bold text-[2.7rem] leading-9">
              15,000+
            </h1>
            <h2 className=" text-white text-[1.1rem]">Enterprise customers</h2>
          </div>
        </div>
      </div>
      <div className=" h-[50rem] bg-white w-full">
        <div className=" h-[40rem] w-3/5 m-auto mt-20 flex flex-col justify-start items-center">
          <h1 className=" text-[2.6rem] font-bold font-sans">How to begin</h1>
          <div className=" flex flex-row justify-between items-center mt-8">
            <div
              onClick={() => setActiveTab(0)}
              className={
                activeTab === 0
                  ? "border-b-2 text-gray-900 border-gray-900 font-bold text-[1.5rem] px-8 pb-3 cursor-pointer"
                  : " border-b text-gray-500 border-gray-700 font-bold text-[1.5rem] px-8 pb-3 cursor-pointer"
              }
            >
              Plan your curriculum
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className={
                activeTab === 1
                  ? "border-b-2 text-gray-900 border-gray-900 font-bold text-[1.5rem] px-8 pb-3 cursor-pointer"
                  : " border-b text-gray-500 border-gray-700 font-bold text-[1.5rem] px-8 pb-3 cursor-pointer"
              }
            >
              Record your video
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className={
                activeTab === 2
                  ? "border-b-2 text-gray-900 border-gray-900 font-bold text-[1.5rem] px-8 pb-3 cursor-pointer"
                  : " border-b text-gray-500 border-gray-700 font-bold text-[1.5rem] px-8 pb-3 cursor-pointer"
              }
            >
              Lunch your course
            </div>
          </div>
          <div className=" flex flex-row items-center justify-center">
            {activeTab === 0 && (
              <>
                <p className=" text-lg w-[38ch]">
                  You start with your passion and knowledge. Then choose a
                  promising topic with the help of our Marketplace Insights
                  tool. <br /> The way that you teach — what you bring to it —
                  is up to you. <br />
                  <span className=" font-bold">How we help you</span> <br />
                  We offer plenty of resources on how to create your first
                  course. And, our instructor dashboard and curriculum pages
                  help keep you organized.
                </p>
                <img
                  src="../../../public/images/teachOnUdemy/plan-your-curriculum-v3.jpg"
                  alt=""
                />
              </>
            )}
            {activeTab === 1 && (
              <>
                <p className=" text-lg w-[38ch]">
                  Use basic tools like a smartphone or a DSLR camera. Add a good
                  microphone and you’re ready to start. <br />
                  If you don’t like being on camera, just capture your screen.
                  Either way, we recommend two hours or more of video for a paid
                  course. <br />
                  <span className=" font-bold">How we help you</span> <br />
                  Our support team is available to help you throughout the
                  process and provide feedback on test videos.
                </p>
                <img
                  src="../../../public/images/teachOnUdemy/record-your-video-v3.jpg"
                  alt=""
                />
              </>
            )}
            {activeTab === 2 && (
              <>
                <p className=" text-lg w-[38ch]">
                  Gather your first ratings and reviews by promoting your course
                  through social media and your professional networks. <br />
                  Your course will be discoverable in our marketplace where you
                  earn revenue from each paid enrollment. <br />
                  <span className=" font-bold">How we help you</span> <br />
                  Our custom coupon tool lets you offer enrollment incentives
                  while our global promotions drive traffic to courses. There’s
                  even more opportunity for courses chosen for Udemy Business.
                </p>
                <img
                  src="../../../public/images/teachOnUdemy/launch-your-course-v3.jpg"
                  alt=""
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div className=" w-full h-[25rem] bg-Udemygray-100">
        <div className=" max-w-[45%] mx-auto h-full flex flex-row justify-start items-start">
          <img
            src="../../../public/images/teachOnUdemy/frank-1x-v2.jpg"
            alt=""
          />
          <div className=" flex-grow flex flex-row justify-center items-center h-full">
            <div className=" flex flex-col items-start justify-start">
              <h1 className=" w-[33ch] text-[1.4rem] font-sans">
                “I’m proud to wake up knowing my work is helping people around
                the world improve their careers and build great things. While
                being a full-time instructor is hard work, it lets you work
                when, where, and how you want.”
              </h1>
              <h2 className=" font-bold mt-4">Frank Kane</h2>
              <h2 className=" text-gray-500">
                Data Science & IT Certifications
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[45rem] w-full p-32">
        <div className=" w-full h-full flex items-center justify-center">
          <img
            className="flex-[1]"
            src="../../../public/images/teachOnUdemy/support-1-v3.jpg"
            alt=""
          />
          <div className="flex-[2] h-full flex flex-col justify-center items-center p-16 gap-4">
            <h1 className=" text-[2.5rem] font-bold text-Udemygray-550 font-sans">
              You won’t have to do it alone
            </h1>
            <p className=" text-[1.2rem]">
              Our <span className=" font-bold">Instructor Support Team</span> is here to answer your questions and
              review your test video, while our <span className=" font-bold">Teaching Center</span> gives you plenty
              of resources to help you through the process. Plus, get the
              support of experienced instructors in our <span className=" font-bold">online community</span>.
            </p>
            <a href="https://teach.udemy.com/teaching-on-udemy/" className=" text-Udemyblue-300 underline font-bold underline-offset-4 mt-2">Need more details before you start? Learn more.</a>
          </div>
          <img
            className="flex-[1]"
            src="../../../public/images/teachOnUdemy/support-2-v3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" h-[24rem] w-full bg-Udemygray-100">
        <div className=" w-[40%] mx-auto h-full flex flex-col justify-center items-center gap-4">
          <h1 className=" text-[2.6rem] font-bold font-sans text-Udemygray-550">Become an instructor today</h1>
          <h2 className=" text-[1.4rem] text-Udemygray-400 font-semibold text-center">Join one of the world’s largest online learning <br /> marketplaces.</h2>
          <button onClick={() => joinTeach()} className=" bg-Udemygray-500 text-white font-bold h-12 w-[20rem]">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
