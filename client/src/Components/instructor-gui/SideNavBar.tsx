import { GraduationCap, HelpCircle, MonitorPlay } from "lucide-react";
import { } from "../../../public/images/Untitled_design__24_-removebg-preview.png";

interface SideNavBarProps {
    active: number;
    onTabChange: (index: number) => void;
}

const SideNavBar = ({active,onTabChange}: SideNavBarProps) => {

  return (
    <div className=" absolute h-full w-[3.5rem] left-0 bg-Udemygray-500 group hover:w-[18rem] transition-all ease-in-out duration-[0.4s] pt-4">
      <div className=" w-full h-fit">
        <div className=" h-[2rem] w-[16rem] ml-3">
          <div className=" h-full w-[3.5rem] flex flex-row items-center">
            <img
              className=" h-full"
              src="../../../public/images/Untitled_design__25_-removebg-preview.png"
              alt=""
            />
            <div className="h-full flex flex-row justify-center items-center opacity-0 w-fit group-hover:opacity-100 transition-all ease-in-out duration-[0.4s]">
              <h1 className=" font-bold text-[1.7rem] pt-[0.38rem] font-sans text-gray-50">
                demy
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col h-fit w-full mt-6">
          <div onClick={() => onTabChange(0)} className={active===0 ? " w-fit cursor-pointer border-l-[4px] border-purple-500 h-[3.5rem] flex flex-row justify-centeri items-center":" w-fit cursor-pointer h-[3.5rem] flex flex-row justify-centeri items-center"}>
            <div className=" w-[3.5rem] flex flex-row justify-center items-center pr-2">
              <MonitorPlay color="white"/>
            </div>
            <div className=" w-[6rem] ml-3 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
                <h1 className=" font-bold text-white">Courses</h1>
            </div>
          </div>
          <div onClick={() => onTabChange(1)} className={active===1 ? " w-fit cursor-pointer border-l-[4px] border-purple-500 h-[3.5rem] flex flex-row justify-centeri items-center":" w-fit cursor-pointer h-[3.5rem] flex flex-row justify-centeri items-center"}>
            <div className=" w-[3.5rem] flex flex-row justify-center items-center pr-2">
              <GraduationCap color="white"/>
            </div>
            <div className=" w-[6rem] ml-3 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
                <h1 className=" font-bold text-white">Created</h1>
            </div>
          </div>
          <div onClick={() => onTabChange(2)} className={active===2 ? " w-fit cursor-pointer border-l-[4px] border-purple-500 h-[3.5rem] flex flex-row justify-centeri items-center":" w-fit cursor-pointer h-[3.5rem] flex flex-row justify-centeri items-center"}>
            <div className=" w-[3.5rem] flex flex-row justify-center items-center pr-2">
              <HelpCircle color="white"/>
            </div>
            <div className=" w-[6rem] ml-3 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
                <h1 className=" font-bold text-white">Resources</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
