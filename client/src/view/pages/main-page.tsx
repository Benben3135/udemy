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
        <div>{/* //homepage of registered user */}</div>
      ) : (
        <div>{/* //homepage of NOT registered user */}</div>
      )}
    </>
  );
};

export default MainPage;
