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
import { sendNewImg } from "../../../api/userApi/usersAPI";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";

const UserPhotoTab = () => {
  const navigate = useNavigate();
  const userRedux = useSelector(userSelector);
  const [user, setUser] = useState<User>();
  const [img, setImg] = useState<string>("");
  const [sucsess, setSucsess] = useState<Boolean>(false);
  const [warning, setWarning] = useState<Boolean>(false);

  const [checkImg, setCheckImg] = useState<string>(
    "../../../public/images/anonymous_3.png"
  );

  const sendImgToDB = async () => {
    const result = await sendNewImg(img, user!.uid);
    if (result.ok) {
      imgChanged();
    } else {
      imgChangedError();
    }
  };

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);


  const imgChanged = () => {
    setWarning(false);
    setSucsess(true);
    window.location.reload();
  };

  const imgChangedError = () => {
    setWarning(true);
  };

  return (
    <div className=" border h-full w-[56.2rem]">
      <div className=" w-full h-24 border-b flex flex-col items-center justify-center">
        <h1 className=" text-2xl font-bold">Photo</h1>
        <h2 className="text-slate-800">
          Add a nice photo of yourself for your profile.
        </h2>
      </div>
      <div className=" h-[61rem] max-w-[40rem] mx-auto p-6 flex flex-col justify-start items-start">
        <div className=" w-full h-fit justify-start items-start">
          <p className=" text-sm font-bold mb-4">Image preview</p>
        </div>
        <div className=" w-full min-h-[14rem] h-fit flex flex-row justify-center items-center mb-4 p-4 border border-black">
          <div className=" w-full min-h-[12rem] h-fit bg-Udemygray-100 flex flex-row items-center justify-center">
            <img src={checkImg} alt="" />
          </div>
        </div>
        <div className=" w-full h-fit justify-start items-start">
          <p className=" text-sm font-bold mb-4">Add / Change Image</p>
        </div>
        <div className=" w-full h-12 border border-black bg-Udemygray-100 pl-4 flex flex-row justify-between items-center">
          <input
            onInput={(ev) => setImg((ev.target as HTMLInputElement).value)}
            type="text"
            placeholder="No Img selected"
            className=" placeholder:text-black h-full outline-none bg-Udemygray-100 w-3/4"
          />
          <div
            onClick={() => setCheckImg(img)}
            className=" h-full w-32 border-l border-black font-bold text-[1.1rem] text-slate-700 bg-white flex flex-row justify-center items-center hover:bg-Udemygray-200 cursor-pointer"
          >
            Set Image
          </div>
        </div>
        <div
          onClick={() => sendImgToDB()}
          className=" bg-Udemygray-500 w-[5.4rem] h-12 flex flex-row justify-center items-center font-bold text-white mt-8 cursor-pointer"
        >
          Save
        </div>
        <Stack sx={{ width: "100%" }} spacing={2} className=" mt-4">
          {sucsess && (
            <Alert
              severity="success"
              className=" mt-8"
            >
              Your image uploaded successfully!
            </Alert>
          )}
          {warning && (
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              severity="error"
              className=" mt-8"
            >
              Your image uploading failed!
            </Alert>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default UserPhotoTab;
