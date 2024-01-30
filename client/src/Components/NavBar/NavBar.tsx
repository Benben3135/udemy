import { useEffect, useState } from "react";

//UI
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Divider } from "@mui/material";
import { categories } from "../../util/categories";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const NavBar = () => {
  const [glassColor, setGlassColor] = useState<Boolean>(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search?.length > 0) {
      setGlassColor(true);
    } else {
      setGlassColor(false);
    }
  }, [search]);
  const handleSearch = () => {
    // TODO: write regex/search function
  };

  return (
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
            <div className="absolute z-50 w-72 top-20 h-[38rem] border-Udemygray-200 border-[1.4px] shadow-lg hidden scale-75 group-hover:flex group-hover:scale-100 transition-all ease-in-out delay-500 hover:flex">
              <div className="h-5/6 w-full flex flex-col items-center justify-senter">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex flex-row items-center justify-between w-full p-2 text-gray-700 hover:text-Udemyblue-300"
                    onClick={() => console.log(category)}
                    // TODO: category page navigation
                  >
                    <div>
                      {category}
                    </div>
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
              onInput={(ev) => setSearch((ev.target as HTMLInputElement).value)}
              placeholder="Search for anything"
              className="w-full h-full placeholder:text-Udemygray-300 bg-Udemygray-100 border-0 active:border-none outline-none text-Udemygray-500 tracking-tight"
              type="text"
            />
          </form>
        </div>
        <div className=" h-full w-32 flex flex-col justify-center items-center">
          <a
            className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight"
            href=""
          >
            Teach on Udemy
          </a>
        </div>
        <div className=" h-full w-32 flex flex-col justify-center items-center">
          <a
            className=" text-Udemygray-500 hover:text-Udemyblue-300  text-[0.9rem] tracking-tight"
            href=""
          >
            My learning
          </a>
        </div>
        <div className="w-12">
          <FavoriteBorderIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
        </div>
        <div className="w-12">
          <ShoppingCartOutlinedIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
        </div>
        <div className="w-12">
          <NotificationsOutlinedIcon className=" text-Udemygray-500 hover:text-Udemyblue-300 hover:cursor-pointer" />
        </div>
        <div className="w-12">
          <div className=" bg-Udemygray-500 rounded-full w-8 h-8 flex flex-col items-center justify-center ">
            <h1 className="font-[700] text-Udemywhite font-sans text-sm text-center">
              BV
            </h1>
          </div>
        </div>
      </div>
      <Divider className=" mt-0 pt-0" />
    </div>
  );
};

export default NavBar;
