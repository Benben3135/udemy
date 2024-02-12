import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isUserSelector } from '../../features/user/isUserSlice';
import { userSelector } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { User } from '../../util/interfaces';
import { userPageCategories } from './userPageCategories';

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const UserNavBar = ({ activeIndex, setActiveIndex }: Props) => {
  const navigate = useNavigate();
  const userRedux = useSelector(userSelector);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  useEffect(() => {
    console.log(user);
  }, [user]);


  return (
    <>
      {user && (
        <div className='h-full w-[13.6rem] flex flex-col items-start justify-start border'>
          <div className='w-full h-fit flex flex-col items-center justify-center mt-4'>
            <div className='bg-Udemygray-500 rounded-full w-32 h-32 flex flex-col items-center justify-center '>
              <h1 className='font-[700] text-4xl text-Udemywhite font-sans text-center'>{user.acronyms}</h1>
            </div>
            <div className='h-fit w-fit mt-3'>
              <h1 className='font-bold'>{user.name}</h1>
            </div>
          </div>
          <div className='h-fit w-full mt-6'>
            {userPageCategories.map((category, index) => (
              <div
                onClick={() => setActiveIndex(index)}
                key={index}
                className={
                  activeIndex === index
                    ? 'h-8 bg-Udemygray-300 pl-4 text-white cursor-pointer'
                    : 'h-8 pl-4 text-black hover:bg-Udemygray-300 hover:text-white cursor-pointer'
                }>
                {category}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserNavBar;
