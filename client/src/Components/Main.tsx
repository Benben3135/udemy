import { useEffect, useState } from "react";
import { isUserSelector } from "../features/user/isUserSlice";
import { useSelector } from "react-redux";

const MainPage = () => {
  const isUserRedux = useSelector(isUserSelector);
  const [isUser, setIsUser] = useState<boolean>();

  useEffect(() => {
    setIsUser(isUserRedux);
  }, [isUserRedux]);

  return (
    <>
      {isUser ? (
        <div className=" min-h-screen z-0 ">
          <div className="max-w-[82rem] mx-auto h-fit ">
            <div className="w-full h-fit  ">
              <img
                src="../../public/images/87ab2850-d0a8-4ea7-a36c-6f2e4c6a6a2e.jpg"
                alt=""
              />
              <div className="h-[11.5rem] w-[26rem] bg-white absolute bottom-[22rem] left-[12rem] shadow-md">
                <h1 className=""> </h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" min-h-screen">
          {/* //homepage of NOT registered user */}
        </div>
      )}
    </>
  );
};

export default MainPage;
