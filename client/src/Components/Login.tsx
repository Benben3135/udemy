import { Divider } from "@mui/material";
import { AlertOctagon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUserWithEmail,
  loginUserWithPopUp,
} from "../../api/userApi/logInApi";
import { loginLogos } from "../../public/images/loginLogos/loginLogos";
import { thereUser } from "../features/user/isUserSlice";
import { userSelector } from "../features/user/userSlice";

const Login = () => {
  const [token, setToken] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const tokenRedux = useSelector(userSelector);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (tokenRedux.logIn) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, [tokenRedux]);



  const loginUserWithEmailAndPassword = async () => {
    const result = await loginUserWithEmail(email, password);
    if (result!.ok) {
      dispatch(thereUser());
      navigate("/");
    }
    else{
      setError(true)
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userName") !== null) {
      const nameFromLocalStorage = localStorage.getItem("userName");
      const firstName = nameFromLocalStorage!.split(" ")[0]; // Split by space and take the first part
      setUserName(firstName);
    }
  }, []);

  const loginWithPopUpGoogle = async () => {
    try {
      const result = await loginUserWithPopUp();
      if (result && result.ok) {
        dispatch(thereUser())
        navigate("/");
      }
    } catch (error) {
      // Handle errors here
      setError(true)
      console.error("Error logging in with popup:", (error as Error).message);
    }
  };

  return (
    <>
      {token ? (
        <div className=" h-[38.16rem] bg-white py-12 flex flex-row justify-center items-center">
          <div className=" w-[22rem] h-[32.063rem] flex flex-col items-start justify-start gap-2">
            <h1 className=" w-fit h-fit mb-4 font-[700]">
              Log in to your Udemy account
            </h1>
            <div className=" w-full flex flex-col items-center justify-center">
              <img
                className=" w-16 h-16"
                src="https://img-b.udemycdn.com/user/50x50/anonymous_3.png"
                alt=""
              />
              <h2 className="mt-2">Welcome back {userName}</h2>
            </div>
            <div
              onClick={() => loginWithPopUpGoogle()}
              className=" w-full h-12 hover:bg-gray-300 cursor-pointer flex flex-row p-2 gap-2 justify-start items-center border-[1.2px] border-black"
            >
              <img className="w-14 h-14" src={loginLogos[0].logoSrc} alt="" />
              <h1 className=" font-bold">continue with Google</h1>
            </div>
            <div className=" w-full"></div>
            <div className=" w-full h-8 flex flex-row items-center justify-center mt-2">
              <h1 className="text-sm">
                or{" "}
                <span className=" text-Udemyblue-300 cursor-pointer text-[1.08rem] underline underline-offset-4 font-bold">
                  Forgot Password
                </span>
              </h1>
            </div>
            <Divider className="pt-3 w-full text-black" />
            <div className=" w-full h-8 flex flex-row items-center justify-center">
              <h1 className="text-sm">
                Don't have an account?{" "}
                <span className=" text-Udemyblue-300 underline underline-offset-4 cursor-pointer font-bold">
                  Sign up
                </span>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className=" h-[38.16rem] bg-white py-12 flex flex-row justify-center items-center">
          <div className=" w-[22rem] h-[32.063rem] flex flex-col items-start justify-start gap-2">
            <h1 className=" w-fit h-fit mb-4 font-[600]">
              Log in to your Udemy account
            </h1>
            <div
              onClick={() => loginWithPopUpGoogle()}
              className=" w-full h-12 hover:bg-gray-300 cursor-pointer flex flex-row p-2 gap-2 justify-start items-center border-[1.2px] border-black"
            >
              <img className="w-14 h-14" src={loginLogos[0].logoSrc} alt="" />
              <h1 className=" font-bold">continue with Google</h1>
            </div>
            {error && <div className=" w-full h-[22rem] bg-Udemyred-200 p-4 flex flex-row gap-4 items-start justify-start">
              <AlertOctagon className=" w-24 h-24 p-0 m-0" color="black"/>
              <h2 className=" font-bold">We don’t recognize that password. Try again or reset your password. For more help, visit our <span className=" text-Udemyblue-300 underline">support page.</span></h2>
              </div>}
            <div className=" w-full">
              <div className=" w-full h-16 border border-black mb-2">
                <input
                  onInput={(ev) =>
                    setEmail((ev.target as HTMLInputElement).value)
                  }
                  type="text"
                  className=" w-3/4 placeholder:text-Udemygray-500 placeholder:font-bold mt-5 ml-5 focus:font-extralight focus:text-xs focus:mt-2 focus:ml-2 transition-all outline-none"
                  placeholder="Email"
                />
              </div>
              <div className=" w-full h-16 border border-black mb-2">
                <input
                  onInput={(ev) =>
                    setPassword((ev.target as HTMLInputElement).value)
                  }
                  type="password"
                  className=" w-3/4 placeholder:text-Udemygray-500 placeholder:font-bold mt-5 ml-5 focus:font-extralight focus:text-xs focus:mt-2 focus:ml-2 transition-all outline-none"
                  placeholder="Password"
                />
              </div>
              <div
                onClick={() => loginUserWithEmailAndPassword()}
                className="flex flex-row justify-center items-center w-full h-12 bg-Udemypurple-300 hover:bg-Udemypurple-600 cursor-pointer"
              >
                <h1 className=" text-center text-white font-bold text-[1rem]">
                  Log in
                </h1>
              </div>
            </div>
            <div className=" w-full h-8 flex flex-row items-center justify-center mt-2">
              <h1 className="text-sm">
                or{" "}
                <span className=" text-Udemyblue-300 cursor-pointer text-[1.08rem] underline underline-offset-4 font-bold">
                  Forgot Password
                </span>
              </h1>
            </div>
            <Divider className="pt-3 w-full text-black" />
            <div className=" w-full h-8 flex flex-row items-center justify-center">
              <h1 className="text-sm">
                Don't have an account?{" "}
                <span className=" text-Udemyblue-300 underline underline-offset-4 cursor-pointer font-bold">
                  Sign up
                </span>
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
