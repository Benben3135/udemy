import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { userSelector } from "../features/user/userSlice";
import { User } from "../util/interfaces";

const PublicProfile = () => {
  const userRedux: User = useSelector(userSelector);

  return (
    <>
      {userRedux && (
        <div className=" flex flex-col justify-start items-center w-full h-fit min-h-screen">
          <div className=" w-full h-[8.5rem] bg-Udemygray-500 flex flex-row justify-start items-center">
            <div className=" mx-auto px-6  max-w-[61.2rem] min-w-[50rem] flex flex-row items-start justify-start">
              <h1 className=" text-white text-[2.2rem] font-bold">
                {userRedux?.displayName}
              </h1>
            </div>
          </div>
          <div className=" w-full h-[12rem] bg-white flex flex-row justify-start items-center">
            <div className=" mx-auto px-6  max-w-[61.2rem] min-w-[50rem] flex flex-row items-start justify-start">
              {userRedux?.photoURL ? (
                <div className="rounded-full w-32 h-32 flex flex-col items-center justify-center">
                  <img
                    className="rounded-full w-32 h-32"
                    src={userRedux.photoURL}
                    alt=""
                  />
                </div>
              ) : (
                <div className="bg-Udemygray-500 rounded-full w-32 h-32 flex flex-col items-center justify-center ">
                  <h1 className="font-[700] text-4xl text-Udemywhite font-sans text-center">
                    {userRedux!.acronyms}
                  </h1>
                </div>
              )}
            </div>
          </div>
          <div className=" w-full h-fit min-h-[40rem] bg-Udemygray-100 flex flex-row justify-start items-center">
            <div className=" mx-auto px-6  max-w-[61.2rem] min-w-[50rem] flex flex-row items-start justify-start"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicProfile;
