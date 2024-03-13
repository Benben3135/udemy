import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { deleteUser, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPurchasedCourses } from "../../../api/carts/carts";
import { userSelector } from "../../features/user/userSlice";
import { CourseProps } from "../Courses/Course";



const UserCloseTab = () => {
  const navigate = useNavigate();
  const [warning, setWarning] = useState<Boolean>(false);
  const [purchased, setpurchased] = useState<CourseProps[]>([]);
  const userRedux = useSelector(userSelector);

  const closeAccount = async () => {
    const auth = getAuth();
    const userFirebase = auth.currentUser;
    deleteUser(userFirebase!).then(() => {
        navigate("/")
      }).catch((error:Error) => {
        console.error(error)
       setWarning(true)
      });
  };


  useEffect(() => {
    if (userRedux && userRedux.uid) {
      getPurchasedCourses();
    }
  }, [userRedux]);

  const getPurchasedCourses = async () => {
    const courses = await getAllPurchasedCourses(userRedux!.uid);
    if (courses.ok) {
      const purchasedCourses: CourseProps[] = courses.courses;
      setpurchased(purchasedCourses);
    }
  };
  



  return (
    <div className=" border h-full w-[56.2rem]">
      <div className=" w-full h-24 border-b flex flex-col items-center justify-center">
        <h1 className=" text-2xl font-bold">Close Account</h1>
        <h2 className="text-slate-800">Close your account permanently.</h2>
      </div>
      <div className=" h-[61rem] w-full flex flex-col justify-start items-center">
        <div className=" h-fit w-full p-6 flex flex-col justify-start items-center">
          <div className="h-fit w-full flex flex-col items-start justify-start max-w-[40rem] gap-4 p-4">
            <h1 className="font-semiboldbold text-slate-900 text-[1rem]">
              <span className=" text-Udemyred-400 font-bold">Warning:</span> If
              you close your account, you will be unsubscribed from all your <span className=" font-bold">{purchased.length}</span> courses, and will lose access forever.
            </h1>
            <div
              onClick={() => closeAccount()}
              className=" bg-Udemygray-500 w-[10rem] h-12 flex flex-row justify-center items-center font-bold text-white mt-6 cursor-pointer"
            >
              Close account
            </div>
            <Stack sx={{ width: "100%" }} spacing={2} className=" mt-4">
            {warning && (
              <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="error"
                className=" mt-8"
              >
                Please re-Login.
              </Alert>
            )}
          </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCloseTab;
