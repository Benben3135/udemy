import React, { useEffect, useState } from 'react'
import SideNavBar from "../../Components/instructor-gui/SideNavBar"
import {noNavbar} from "../../features/user/navbarSlice"
import { useDispatch } from 'react-redux'
import Courses from "../../Components/instructor-gui/Courses"
import TopNavBar from "../../Components/instructor-gui/topNavBar"
import Help from "../../Components/instructor-gui/help"
import Created from "../../Components/instructor-gui/Created"

const instructorPage = () => {

  const dispatch = useDispatch();
  const [active,setActive] = useState<number>(0)

  const handleTabChange = (index: number) => {
    setActive(index); // Update the active state when a tab is clicked
};

  useEffect(() => {
    dispatch(noNavbar())
  },[])

  useEffect(() => {
    console.log(active)
  },[active])

  return (
    <div className=' h-fit min-h-screen'>
      <SideNavBar active={active} onTabChange={handleTabChange}/>
      <TopNavBar/>
      {active===0 && <Courses/>}
      {active===1 && <Created/>}
      {active === 2 && <Help/>}
    </div>
  )
}

export default instructorPage
