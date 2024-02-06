import React from "react";
import { FooterLogos } from "../../../public/images/footerLogos/FooterLogos";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className=" h-fit bg-Udemygray-500 overflow-hidden shadow-md">
      <div className=" flex flex-col h-fit min-h-12 justify-start md:flex-row md:justify-between md:items-center px-8 mb-2">
        <div className=" flex-grow h-fit p-2">
          <h1 className="py-3 pr-6 text-white font-bold text-xl">
            Top companies choose{" "}
            <span className=" text-Udemyblue-600 hover:underline cursor-pointer">
              Udemy Business
            </span>{" "}
            to build in-demand career skills.
          </h1>
        </div>
        <div className=" flex flex-row items-center justify-between max-w-[560px]">
          {FooterLogos.map((logo,index) => (
            <img key={index} className="w-[115px] h-[44px] my-3 mr-6" src={logo} alt="" />
          ))}
        </div>
      </div>
      <Divider className=" bg-gray-500 w-screen absolute"/>
      <div className=" flex flex-col h-fit w-full mb-4 border-spacing-1 px-8 mt-4">
        <div className=" w-full h-fit flex flex-row justify-start items-center">
          <div className=" h-[10rem] flex flex-col items-start justify-start flex-grow gap-2 p-4">
            <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
              Teach on Udemy
            </a>
            <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
              About us
            </a>
            <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
              Contact us
            </a>
          </div>
          <div className=" h-[10rem] flex flex-col items-start justify-start flex-grow gap-2 p-4">
            <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
              Careers
            </a>
            <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
              Blog
            </a>
            <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
              Help & Support
            </a>
          </div>
          <div className=" h-[10rem] flex flex-col items-start justify-start flex-grow gap-2 p-4">
          <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
              Terms
            </a>
            <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
              Privacy Policy
            </a>
            <a className=" hover:underline text-white tracking-tight text-sm font-normal" href="">
            Accessibility statement
            </a>
          </div>
          <div className=" h-[10rem] flex flex-col items-start justify-start flex-grow-[5] gap-2 p-4 min-w-[20rem]"></div>
        </div>
        <div className=" flex flex-row justify-between items-start w-full h-fit mt-16 mb-8">
            <div onClick={() => navigate("/")} className=" w-[5.7rem] h-[2.13rem]">
              <img className=" h-full w-full cursor-pointer" src="https://www.udemy.com//staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" />
            </div>
            <div>
              <p className=" text-xs text-white">© 2024 Udemy, Inc.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
