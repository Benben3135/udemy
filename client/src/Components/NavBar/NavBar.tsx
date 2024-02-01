import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserSelector } from "../../features/user/isUserSlice";

//UI
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Divider } from "@mui/material";
import { categories } from "../../util/categories";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Badge from "@mui/material/Badge";

const NavBar = () => {
  //initials
  const navigate = useNavigate();

  //useStates
  const [glassColor, setGlassColor] = useState<Boolean>(false);
  const [search, setSearch] = useState<string>("");
  // TODO: write regex/search function

  const [isUser, setIsUser] = useState<boolean>(true);
  const [isInstructor, setIsInstructor] = useState<boolean>(true);

  //useEffects

  //by redux, we check if there is a user and save it to state:
  // useEffect(() => {
  //   const isUserValue = useSelector(isUserSelector);
  //   setIsUser(isUserValue);
  // }, [])

  useEffect(() => {
    if (search?.length > 0) {
      setGlassColor(true);
    } else {
      setGlassColor(false);
    }
  }, [search]);
  const handleSearch = () => {
    //navigate to search page
  };

  return (
    <div>
      {isUser ? (
        <div>
          <div className=" w-screen h-[72px] flex flex-row justify-between items-center bg-white px-[1.8rem]">
            <div className=" mr-4">
              <img
                className=" w-[91px] h-[34px]"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt=""
              />
            </div>
            <div className="group h-[70px] mt-10">
              <button className="text-[0.9rem] leading-normal font-normal text-gray-700 font-sans hover:text-Udemyblue-300 pr-3 flex-shrink-0 group-hover:text-Udemyblue-300">
                Categories
                <div className="absolute z-50 w-72 top-20 h-[38rem] border-Udemygray-200 border-[1.4px] shadow-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in hover:scale-100">
                  <div className="h-5/6 w-full flex flex-col items-center justify-senter">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex flex-row items-center justify-between w-full p-2 text-gray-700 hover:text-Udemyblue-300"
                        onClick={() =>
                          navigate(`/categoryPage?category=${category}`)
                        }
                        // TODO: category page navigation
                      >
                        <div>{category}</div>
                        <div>
                          <KeyboardArrowRightIcon />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            </div>
            <div className=" h-[3rem] border-[1px] border-solid bg-Udemygray-100 border-Udemygray-500 rounded-[9999px] mx-4 flex-grow-[1] flex flex-row items-center justify-start p-2">
              <div onClick={() => handleSearch()}>
                <SearchIcon
                  className={
                    glassColor
                      ? "ml-2 text-gray-900 cursor-pointer"
                      : "ml-2 text-gray-500 cursor-not-allowed"
                  }
                />
              </div>
              <form className="w-[80%] ml-4 h-full flex items-center flex-row-reverse pr-9 bg-none border-0 font-[400] text-[0.9rem]">
                <input
                  onInput={(ev) =>
                    setSearch((ev.target as HTMLInputElement).value)
                  }
                  placeholder="Search for anything"
                  className="w-full h-full placeholder:text-Udemygray-300 bg-Udemygray-100 border-0 active:border-none outline-none text-Udemygray-500 tracking-tight"
                  type="text"
                />
              </form>
            </div>
            <div className=" h-full w-32 flex flex-col justify-center items-center">
              {
                isInstructor ? (
                  <a
                    className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight ml-12"
                    href="instructor page"
                  >
                    Instructor
                  </a>
                ) : (
                  <a
                    className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight"
                    href="teach on udemy page"
                  >
                    Teach on Udemy
                  </a>
                )
                // TODO: add the right navigations
              }
            </div>
            <div className=" h-full w-32 flex flex-col justify-center items-center">
              <a
                className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight"
                href="My learning page"
              >
                My learning
              </a>
            </div>
            <div className="w-12">
              <Badge variant="dot" badgeContent="" color="secondary">
                <FavoriteBorderIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
              </Badge>
            </div>
            <div className="w-12">
              <Badge variant="dot" badgeContent="" color="secondary">
                <ShoppingCartOutlinedIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
              </Badge>
            </div>
            <div className="w-12">
              <Badge variant="dot" badgeContent="" color="secondary">
                <NotificationsOutlinedIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
              </Badge>
            </div>
            <div className="w-12">
              <Badge variant="dot" badgeContent="" color="secondary">
                <div className=" bg-Udemygray-500 rounded-full w-8 h-8 flex flex-col items-center justify-center ">
                  <h1 className="font-[700] text-Udemywhite font-sans text-sm text-center">
                    BV
                  </h1>
                </div>
              </Badge>
            </div>
          </div>
          <Divider className=" mt-0 pt-0" />
        </div>
      ) : (
        <div>
          <div className=" w-screen h-[72px] flex flex-row justify-between items-center bg-white px-[1.8rem]">
            <div className=" mr-4">
              <img
                className=" w-[91px] h-[34px]"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt=""
              />
            </div>
            <div className="group h-[70px] mt-10">
              <button className="text-[0.9rem] leading-normal font-normal text-gray-700 font-sans hover:text-Udemyblue-300 pr-3 flex-shrink-0 group-hover:text-Udemyblue-300">
                Categories
                <div className="absolute z-50 w-72 top-20 h-[38rem] border-Udemygray-200 border-[1.4px] shadow-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in hover:scale-100">
                  <div className="h-5/6 w-full flex flex-col items-center justify-senter">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex flex-row items-center justify-between w-full p-2 text-gray-700 hover:text-Udemyblue-300"
                        onClick={() =>
                          navigate(`/categoryPage?category=${category}`)
                        }
                        // TODO: category page navigation
                      >
                        <div>{category}</div>
                        <div>
                          <KeyboardArrowRightIcon />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            </div>
            <div className=" h-[3rem] border-[1px] border-solid bg-Udemygray-100 border-Udemygray-500 rounded-[9999px] mx-4 flex-grow-[1] flex flex-row items-center justify-start p-2">
              <div onClick={() => handleSearch()}>
                <SearchIcon
                  className={
                    glassColor
                      ? "ml-2 text-gray-900 cursor-pointer"
                      : "ml-2 text-gray-500 cursor-not-allowed"
                  }
                />
              </div>
              <form className="w-[80%] ml-4 h-full flex items-center flex-row-reverse pr-9 bg-none border-0 font-[400] text-[0.9rem]">
                <input
                  onInput={(ev) =>
                    setSearch((ev.target as HTMLInputElement).value)
                  }
                  placeholder="Search for anything"
                  className="w-full h-full placeholder:text-Udemygray-300 bg-Udemygray-100 border-0 active:border-none outline-none text-Udemygray-500 tracking-tight"
                  type="text"
                />
              </form>
            </div>
            <div className=" h-full w-32 flex flex-col justify-center items-center">
              <a
                className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight"
                href="teach on udemy page"
              >
                Teach on Udemy
              </a>
            </div>
            <div className="w-12">
              <Badge variant="dot" badgeContent="" color="secondary">
                <ShoppingCartOutlinedIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
              </Badge>
            </div>
            <div className=" h-10 min-w-20 mx-1">
              <button className=" w-full h-full p-4 border-[1px] border-solid border-black flex flex-row items-center justify-center font-bold font-sans hover:bg-Udemygray-200">
                Log in
              </button>
            </div>
            <div className=" h-10 min-w-20 mx-1">
              <button className=" w-full h-full p-4 border-[1px] border-solid text-Udemywhite bg-Udemygray-600 border-black flex flex-row items-center justify-center font-bold font-sans hover:bg-Udemygray-400">
                Sign up
              </button>
            </div>
          </div>
          <Divider className=" mt-0 pt-0" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
