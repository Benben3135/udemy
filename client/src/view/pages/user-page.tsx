import React, { useEffect, useState } from "react";
import UserNavBar from "../../Components/userPage/UserNavBar";
import UserProfileTab from "../../Components/userPage/UserProfileTab"
import UserPhotoTab from "../../Components/userPage/UserPhotoTab"
import UserAccountSecurityTab from "../../Components/userPage/UserAccountSecurityTab"
import UserCloseTab from "../../Components/userPage/UserClose"
import { useNavigate } from "react-router-dom";


const UserPage = () => {
    const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if(activeIndex === 0){
        navigate("/")
    }
    if(activeIndex === 4){
        navigate("/")
    }
  },[activeIndex])

  return (
    <div className=" h-[72rem]  p-10 flex flex-row justify-center items-center">
      <UserNavBar activeIndex={activeIndex} setActiveIndex={handleSetActiveIndex} />
      {activeIndex === 1 && <UserProfileTab/>}
      {activeIndex ===2 && <UserPhotoTab/>}
      {activeIndex===3 && <UserAccountSecurityTab/>}
      {activeIndex===5 && <UserCloseTab/>}
    </div>
  );
};

export default UserPage;

// 0/4