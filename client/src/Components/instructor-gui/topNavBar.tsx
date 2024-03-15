import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../api/userApi/logInApi";
import { userSelector } from "../../features/user/userSlice";

const topNavBar = () => {
  const navigate = useNavigate();
  const userRedux = useSelector(userSelector);

  const logoutUser = async () => {
    const response = await logOut();

    if (response.ok) {
      window.location.reload();
      navigate("/");
    }
  };

  return (
    <>
      {userRedux && (
        <div className=" w-fit gap-6 h-16 absolute right-4 top-2 flex flex-row items-center justify-center">
          <div onClick={() => navigate("/")} className=" w-fit h-full flex flex-row justify-center items-center group cursor-pointer">
            <h1 className="text-gray-800 group-hover:text-Udemypurple-250">Student</h1>
            <div className=" absolute h-[4.2rem] w-[15rem] bg-white scale-0 group-hover:scale-100 transition-all ease-in-out p-2 top-20 right-14 border border-gray-300 shadow-lg">
                <h2 className=" text-[0.85rem] text-gray-700 text-center">Switch to the student view here - get <br /> back to the courses you’re taking.</h2>
            </div>
          </div>
          <div className="w-12 group h-[70px] mt-10">
            <Badge variant="dot" badgeContent="" color="secondary">
              {userRedux?.photoURL ? (
                <div className="rounded-full w-8 h-8 flex flex-col items-center justify-center cursor-pointer ">
                  <img
                    className="rounded-full w-8 h-8 flex"
                    src={userRedux.photoURL}
                    alt=""
                  />
                </div>
              ) : (
                <div className=" bg-Udemygray-500 rounded-full w-8 h-8 flex flex-col items-center justify-center cursor-pointer ">
                  <h1 className="font-[700] text-Udemywhite font-sans text-sm text-center">
                    {userRedux!.acronyms}
                  </h1>
                </div>
              )}
              <div className="absolute right-0 z-50 top-12 h-fit w-[14rem] bg-white border-Udemygray-200 border-[1.4px] shadow-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in hover:scale-100">
                <div className="h-5/6 w-full flex flex-col items-center justify-start">
                  <div
                    onClick={() => navigate("/user/edit-profile")}
                    className="flex flex-row items-start justify-center h-24 w-full gap-2 p-3 border-b cursor-pointer"
                  >
                    {userRedux?.photoURL ? (
                      <div className="rounded-full w-16 h-16 flex flex-col items-center justify-center">
                        <img
                          className="rounded-full w-16 h-16"
                          src={userRedux.photoURL}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className=" bg-Udemygray-500 rounded-full w-16 h-16 flex flex-col items-center justify-center ">
                        <h1 className="font-[700] text-2xl text-Udemywhite font-sans text-center">
                          {userRedux!.acronyms}
                        </h1>
                      </div>
                    )}
                    <div
                      className=" flex flex-col items-strat justify-start"
                      onClick={() => navigate("/user/edit-profile")}
                    >
                      {" "}
                      <h1 className=" font-bold text-slate-800 leading-[1.3rem] hover:text-Udemyblue-300">
                        {userRedux?.displayName.split(" ")[0]} <br />{" "}
                        {userRedux?.displayName.split(" ")[1]}
                      </h1>
                      <h2 className=" font-extralight text-xs">
                        {userRedux?.email}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center h-fit w-full gap-2 p-2 border-b">
                    <div
                      onClick={() => navigate("/my-courses/learning")}
                      className=" h-8 text-sm w-full flex flex-row justify-start items-start group cursor-pointer"
                    >
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        My learning
                      </h3>
                    </div>
                    <div
                      onClick={() => navigate("/my-courses/learning")}
                      className=" h-8 text-sm w-full flex flex-row justify-start items-between group"
                    >
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        My Cart
                      </h3>
                      <div className=" w-6 h-6 rounded-full bg-purple-700 text-center text-white">
                        8
                      </div>
                    </div>
                    <div
                      onClick={() => navigate("/my-courses/wishlist")}
                      className=" h-8 text-sm w-full flex flex-row justify-start items-start group"
                    >
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        Wishlist
                      </h3>
                    </div>
                    {/* TODO: instructor dashboard if redux tell that it is an instructor */}
                    {/* {<div className=" h-8 text-sm w-full flex flex-row justify-start items-start group">
                          <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">Instructor Dashboard</h3>
                        </div>} */}
                  </div>
                  <div className="flex flex-col items-start justify-center h-fit w-full gap-2 p-2 border-b">
                    <div className=" h-8 text-sm w-full flex flex-row justify-start items-start group">
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        Account settings
                      </h3>
                    </div>
                    <div className=" h-8 text-sm w-full flex flex-row justify-start items-between group">
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        Payment methods
                      </h3>
                      <div className=" w-6 h-6 rounded-full bg-purple-700 text-center text-white">
                        8
                      </div>
                    </div>
                    <div className=" h-8 text-sm w-full flex flex-row justify-start items-center group">
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        Purchase history
                      </h3>
                    </div>
                    <div className="flex flex-col items-start justify-center h-fit w-full border-b"></div>
                    <a
                      href="/user/public-profile"
                      className=" h-8 text-sm w-full flex flex-row justify-start items-center group"
                    >
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        Public profile
                      </h3>
                    </a>
                    <a
                      href="/user/edit-profile"
                      className=" h-8 text-sm w-full flex flex-row justify-start items-between group"
                    >
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        Edit profile
                      </h3>
                    </a>
                    <div className="flex flex-col items-start justify-center h-fit w-full gap-2 border-b"></div>
                    <a
                      href="https://support.udemy.com/hc/en-us"
                      className=" h-8 text-sm w-full flex flex-row justify-start items-center group"
                    >
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        Help
                      </h3>
                    </a>
                    <div
                      onClick={() => logoutUser()}
                      className=" h-8 text-sm w-full flex flex-row justify-start items-start group"
                    >
                      <h3 className=" text-slate-900 cursor-pointer w-full hover:text-Udemyblue-300">
                        Log out
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Badge>
          </div>
        </div>
      )}
    </>
  );
};

export default topNavBar;
