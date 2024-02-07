import { useEffect, useState } from "react";
import { isUserSelector } from "../../features/user/isUserSlice";
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
        <div className=" min-h-screen">{/* //homepage of registered user */}</div>
      ) : (
        <div className=" min-h-screen">{/* //homepage of NOT registered user */}</div>
      )}
    </>
  );
};

export default MainPage;
