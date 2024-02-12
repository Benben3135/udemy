import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isUserSelector } from "../../features/user/isUserSlice";
import { userSelector } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { User } from "../../util/interfaces";
import { userPageCategories } from "./userPageCategories";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillDeltaToHtmlConverter from "quill-delta-to-html";
import Quill from "quill";
import { Divider } from "@mui/material";

const UserProfileTab = () => {
  const navigate = useNavigate();
  const userRedux = useSelector(userSelector);
  const [user, setUser] = useState<User>();
  const [headline, setHeadline] = useState<string>("");
  const [headlineLen, setHeadlineLen] = useState<number>(0);
  const [bio, setBio] = useState<any>("");
  const [bioCon, setBioCon] = useState<any>();

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  useEffect(() => {
    setHeadlineLen(headline.length);
  }, [headline]);

  useEffect(() => {
    // Convert Delta data to HTML
    function quillGetHTML() {
      const tempCont = document.createElement("div");
      new Quill(tempCont).setContents(bio);
      setBioCon(tempCont);
    }

    // Call the conversion function when bio changes
    if (bio && bio.ops) {
      quillGetHTML();
    }
  }, [bio]);

  useEffect(() => {
    console.log("bioCon is:", bioCon);
  }, [bioCon]);

  return (
    <div className=" border h-full w-[56.2rem]">
      <div className=" w-full h-24 border-b flex flex-col items-center justify-center">
        <h1 className=" text-2xl font-bold">Public Profile</h1>
        <h2 className="text-slate-800">Add information about yourself</h2>
      </div>
      <div className=" h-[61rem] w-full p-6 flex flex-row justify-center items-center">
        <div className="h-full w-full flex flex-col items-start justify-start max-w-[40rem] gap-4 ">
          <h1 className=" font-bold text-slate-800">Basics</h1>
          <div className=" w-full h-12 border border-black pl-4 pt-2">
            {user?.name?.split(" ")[0]}
          </div>
          <div className=" w-full h-12 border border-black pl-4 pt-2">
            {user?.name?.split(" ")[1]}
          </div>
          <div className=" w-full h-12 border border-black pl-4 pt-2 flex flex-row items-start justify-start">
            <input
              onInput={(ev) =>
                setHeadline((ev.target as HTMLInputElement).value)
              }
              type="text"
              placeholder="Headline"
              className=" h-full w-5/6 outline-none cursor-help"
            />
            <div className=" h-full w-1/6 flex flex-row justify-end items-start pr-4">
              {60 - headlineLen}
            </div>
          </div>
          <p className=" text-sm text-slate-500">
            Add a professional headline like, "Instructor at Udemy" or
            "Architect."
          </p>
          <div className=" w-full h-fit flex flex-col justify-start items-start mb-14">
            <ReactQuill
              onChange={(content, delta, source, editor) =>
                setBio(editor.getContents())
              }
              className="w-full h-20"
              theme="snow"
            />
          </div>
          <Divider className=" w-full mb-4" />
          <div>
            <h2 className=" font-bold text-slate-800 text-[0.95rem]">Links:</h2>
          </div>
          <div className=" w-full h-12 border border-black pl-4 pt-2 flex flex-row items-start justify-start">
            <input
              onInput={(ev) =>
                setHeadline((ev.target as HTMLInputElement).value)
              }
              type="text"
              placeholder="Website (http(s)://..)"
              className=" h-full w-5/6 outline-none cursor-pointer"
            />
          </div>
          <div className=" w-full h-[2.8rem] border border-black flex flex-row items-start justify-start">
            <div className=" w-fit h-full min-w-32 px-8 bg-Udemygray-100 border-r border-black flex flex-row justify-center items-center">
              http://twitter.com/
            </div>
            <input
              onInput={(ev) =>
                setHeadline((ev.target as HTMLInputElement).value)
              }
              type="text"
              placeholder="Twitter Profile"
              className=" h-full outline-none cursor-pointer pl-4"
            />
          </div>
          <p className=" text-xs text-slate-700">
            Add your Twitter username (e.g. johnsmith).
          </p>
          <div className=" w-full h-[2.8rem] border border-black flex flex-row items-start justify-start">
            <div className=" w-fit h-full min-w-32 px-8 bg-Udemygray-100 border-r border-black flex flex-row justify-center items-center">
              http://www.facebook.com/
            </div>
            <input
              onInput={(ev) =>
                setHeadline((ev.target as HTMLInputElement).value)
              }
              type="text"
              placeholder="Facebook Profile"
              className=" h-full outline-none cursor-pointer pl-4"
            />
          </div>
          <p className=" text-xs text-slate-700">
            Input your Facebook username (e.g. johnsmith).
          </p>
          <div className=" w-full h-[2.8rem] border border-black flex flex-row items-start justify-start">
            <div className=" w-fit h-full min-w-32 px-8 bg-Udemygray-100 border-r border-black flex flex-row justify-center items-center">
              http://www.linkedin.com/
            </div>
            <input
              onInput={(ev) =>
                setHeadline((ev.target as HTMLInputElement).value)
              }
              type="text"
              placeholder="Linkedin Profile"
              className=" h-full outline-none cursor-pointer pl-4"
            />
          </div>
          <p className=" text-xs text-slate-700">
            Input your LinkedIn resource id (e.g. in/johnsmith).
          </p>
          <div className=" w-full h-[2.8rem] border border-black flex flex-row items-start justify-start">
            <div className=" w-fit h-full min-w-32 px-8 bg-Udemygray-100 border-r border-black flex flex-row justify-center items-center">
              http://www.youtube.com/
            </div>
            <input
              onInput={(ev) =>
                setHeadline((ev.target as HTMLInputElement).value)
              }
              type="text"
              placeholder="Youtube Profile"
              className=" h-full outline-none cursor-pointer pl-4"
            />
          </div>
          <p className=" text-xs text-slate-700">
            Input your Youtube username (e.g. johnsmith).
          </p>
          <div className=" bg-Udemygray-500 w-[5.4rem] h-12 flex flex-row justify-center items-center font-bold text-white">Save</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileTab;
