import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCourse } from "../../../api/coursesApi";
import { } from "../../../public/images/Udemy-Logo.png";
import { noFooter } from "../../features/user/footerSlice";
import { noNavbar } from "../../features/user/navbarSlice";
import { userSelector } from "../../features/user/userSlice";
import { categories } from "../../util/categories";
import { User } from "../../util/interfaces";

const CreateCoursePage = () => {
  const [user, setUser] = useState<User>();
  const userRedux: User = useSelector(userSelector);
  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [charNum, setCharNum] = useState<number>(60);
  const [countinue, setContinue] = useState<boolean>(false);
  const [mainDes, setMainDes] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [secondDescription, setSecondDescription] = useState<string>("");
  const [secondDescriptions, setSecondDescriptions] = useState<string[]>([]);
  const [disableDes, setDisableDes] = useState<boolean>(false);
  const [price, setPrice] = useState<number>();
  const [disPrice, setDisPrice] = useState<number>();
  const [alert, setAlert] = useState<boolean>(false);
  const [img, setImg] = useState<string>("");
  const [showCourse, setShowCourse] = useState<boolean>(false);
  const [courseId,setCourseId] = useState<number>()

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const hanleSetDes = () => {
    if (secondDescriptions.length <= 7) {
      setSecondDescriptions([...secondDescriptions, secondDescription]);
    }
  };

  const publishCourse = async () => {
    if (
      name.length === 0 ||
      mainDes.length === 0 ||
      bio.length === 0 ||
      !price ||
      !disPrice ||
      selectedCategory === ""
    ) {
      setAlert(true);
    } else {
      setAlert(false);
      setIndex(4);
      const data = await addCourse(
        user!.uid,
        user!.name,
        name,
        mainDes,
        secondDescriptions,
        price,
        disPrice,
        img,
        bio,
        selectedCategory
      );
      if (data.ok) {
        setShowCourse(true);
        setCourseId(data.course.courseId)
      }
    }
  };

  useEffect(() => {
    if (secondDescriptions.length <= 7) {
      setDisableDes(false);
    } else {
      setDisableDes(true);
    }
  }, [secondDescriptions]);



  useEffect(() => {
    if (name.length > 4) {
      setContinue(true);
    } else {
      setContinue(false);
    }
  }, [name]);

  useEffect(() => {
    setCharNum(60 - name.length);
  }, [name]);

  useEffect(() => {
    dispatch(noNavbar());
    dispatch(noFooter());
  }, []);
  return (
    <div className=" w-screen h-screen flex flex-col overflow-hidden">
      <div className=" w-full h-fit">
        {index != 4 && (
          <div className=" h-[4.6rem] w-full flex flex-row">
            <div className=" w-[10rem] p-8 h-full flex flex-row justify-center items-center border-r-[1.4px] border-gray-300">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt=""
              />
            </div>
            <div className=" flex-1 h-full flex items-center justify-between px-4">
              <h1 className=" text-[1.3rem] w-fit tracking-tighter text-gray-700">
                Step {index + 1} of 4
              </h1>
              <button
                onClick={() => navigate("/instructor-page")}
                className=" text-Udemyblue-300 font-bold mr-4 hover:text-Udemyblue-400"
              >
                Exit
              </button>
            </div>
          </div>
        )}
        <div className=" h-1 w-full bg-Udemygray-200 "></div>
        <div
          style={{ width: `${index * 25}%` }}
          className={
            index != 4
              ? " absolute top-[4.6rem] h-1 bg-Udemyblue-300 transition-all ease-in-out duration-300"
              : "absolute h-screen bg-Udemyblue-300 transition-all ease-in-out duration-200 flex flex-row justify-center items-center"
          }
        >
          {showCourse && (
            <div onClick={() => navigate(`/course-page/${courseId}`)} className=" w-[26rem] h-[36rem] bg-white flex flex-col items-center justify-start gap-4 cursor-pointer z-10 hover:scale-105 hover:border hover:border-Udemyblue-250 transition-all ease-in-out">
              <div className=" w-full h-[10rem]">
                <img className=" h-full w-full" src={img} alt="" />
              </div>
              <div className=" text-[1.6rem] text-gray-700 font-bold">
                {name}
              </div>
              <div className=" text-[1rem] font-bold">{mainDes}</div>
              <div className=" text-center text-[0.8rem]">{bio}</div>
              <div className=" w-full flex flex-row justify-center items-center gap-4">
                <h1 className=" text-[1.6rem] font-bold">${disPrice}</h1>
                <h1 className=" text-[1.6rem]  line-through font-bold text-gray-600">${price}</h1>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" flex-1 w-full z-0 flex flex-row justify-center items-start">
        {index === 0 && (
          <div className=" w-[38rem] h-[20rem] mt-10 flex flex-col justify-start items-center">
            <h1 className=" font-bold text-[2rem] font-sans text-gray-800">
              How about a working title?
            </h1>
            <h2 className=" mt-6">
              It's ok if you can't think of a good title now. You can change it
              later.
            </h2>
            <div className=" w-full h-12 border mt-12 shadow-sm border-black flex flex-row">
              <input
                onInput={(ev) => setName((ev.target as HTMLInputElement).value)}
                className=" outline-none h-full flex-1 px-4 placeholder:text-gray-500"
                placeholder="e.g. Learn Photoshop CS6 from Scratch"
                type="text"
              />
              <div className=" w-12 h-full flex flex-row justify-center items-center">
                <h1 className=" text-gray-500">{charNum}</h1>
              </div>
            </div>
          </div>
        )}
        {index === 1 && (
          <div className=" w-[38rem] h-[20rem] mt-10 flex flex-col justify-start items-center">
            <h1 className=" font-bold text-[1.5rem] font-sans text-gray-800">
              What category best fits the knowledge you'll share?
            </h1>
            <h2 className=" mt-6">
              If you're not sure about the right category, you can change it
              later.
            </h2>
            <select
              className="w-full h-12 border mt-12 shadow-sm border-black flex flex-row outline-none"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Choose a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}
        {index === 2 && (
          <div className=" w-[38rem] h-[20rem] mt-10 flex flex-col justify-start items-center">
            <h1 className=" font-bold text-[2rem] font-sans text-gray-800">
              Lets charactirize your course!
            </h1>
            <h2 className=" mt-6">
              It's ok if you can't think of a good titles now. You can change it
              later.
            </h2>
            <div className=" w-full h-12 border mt-12 shadow-sm border-black flex flex-row">
              <input
                onInput={(ev) =>
                  setMainDes((ev.target as HTMLInputElement).value)
                }
                className=" outline-none h-full flex-1 px-4 placeholder:text-gray-500 py-2"
                placeholder="Main Description"
                type="text"
              />
            </div>
            <div className=" w-full h-24 border mt-4 shadow-sm border-black flex flex-row">
              <textarea
                onInput={(ev) => setBio((ev.target as HTMLInputElement).value)}
                className=" outline-none h-full flex-1 px-4 placeholder:text-gray-500 pt-2"
                placeholder="Full Description"
              />
            </div>
            <div className=" w-full h-12 border mt-12 shadow-sm border-black flex flex-row items-center p-4">
              <Check size="15px" />
              {disableDes === false && (
                <input
                  onInput={(ev) =>
                    setSecondDescription((ev.target as HTMLInputElement).value)
                  }
                  className={
                    "outline-none h-full flex-1 px-4 placeholder:text-gray-500"
                  }
                  placeholder="Add mini-description"
                  type="text"
                />
              )}
              {disableDes && (
                <input
                  className={
                    "outline-none cursor-not-allowed h-full flex-1 px-4 placeholder:text-gray-500"
                  }
                  disabled
                  placeholder="Max 7 Mini Descriptions"
                  type="text"
                />
              )}
              <button onClick={() => hanleSetDes()}>ADD</button>
            </div>
            <div className=" flex flex-col h-fit w-full mt-4 gap-4">
              {secondDescriptions.map((des, index) => (
                <div
                  key={index}
                  className=" flex flex-row justify-start items-center gap-2"
                >
                  <Check />
                  <h1>{des}</h1>
                </div>
              ))}
            </div>
          </div>
        )}
        {index === 3 && (
          <div className=" w-[38rem] h-[20rem] mt-10 flex flex-col justify-start items-center">
            <h1 className=" font-bold text-[2rem] font-sans text-gray-800">
              Let's determine the pricing!
            </h1>
            <h2 className=" mt-6">
              It's ok if you can't think of price now. You can change it later.
            </h2>
            <div className=" w-full h-12 border mt-12 shadow-sm border-black flex flex-row">
              <input
                onInput={(ev) =>
                  setPrice(parseFloat((ev.target as HTMLInputElement).value))
                }
                className=" outline-none h-full flex-1 px-4 placeholder:text-gray-500"
                placeholder="Full Price"
                type="text"
              />
              <div className=" w-12 h-full flex flex-row justify-center items-center">
                <h1 className=" text-gray-500">$</h1>
              </div>
            </div>
            <div className=" w-full h-12 border mt-4 shadow-sm border-black flex flex-row">
              <input
                onInput={(ev) =>
                  setDisPrice(parseFloat((ev.target as HTMLInputElement).value))
                }
                className=" outline-none h-full flex-1 px-4 placeholder:text-gray-500"
                placeholder="Discount Price"
                type="text"
              />
              <div className=" w-12 h-full flex flex-row justify-center items-center">
                <h1 className=" text-gray-500">$</h1>
              </div>
            </div>
            <div className=" w-full h-12 border mt-4 shadow-sm border-black flex flex-row">
              <input
                onInput={(ev) => setImg((ev.target as HTMLInputElement).value)}
                className=" outline-none h-full flex-1 px-4 placeholder:text-gray-500"
                placeholder="Course Image"
                type="text"
              />
              <div className=" w-12 h-full flex flex-row justify-center items-center">
                <h1 className=" text-gray-500">url</h1>
              </div>
            </div>
            {alert && (
              <div className=" border border-gray-300 shadow-sm p-4 mt-8 shadow-red-700">
                Please complete all the course data.
              </div>
            )}
          </div>
        )}
      </div>

      {index != 4 && (
        <div className=" h-[4.6rem] flex flex-row items-center justify-between p-10 shadow-xl border-t z-10">
          {index > 0 && (
            <button
              onClick={() => setIndex(index - 1)}
              className=" font-bold text-slate-600 hover:bg-Udemygray-100 border border-black px-4 py-3"
            >
              Previous
            </button>
          )}
          {index !== 3 && (
            <button
              onClick={() => setIndex(index + 1)}
              className={
                countinue
                  ? " font-bold text-white bg-Udemygray-500 px-4 py-3"
                  : "font-bold text-white bg-Udemygray-250 cursor-not-allowed px-4 py-3"
              }
            >
              Continue
            </button>
          )}
          {index === 3 && (
            <button
              onClick={() => publishCourse()}
              className=" font-bold text-white cursor-pointer bg-Udemyblue-300 hover:bg-Udemyblue-400 transition-all ease-in-out border border-black px-4 py-3"
            >
              Publish Course!
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateCoursePage;
