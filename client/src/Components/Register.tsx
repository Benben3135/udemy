import { Divider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/userApi/registerApi";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [passStrong, setPassStrong] = useState<number>(0);
  const [passStrongTXT, setPassStrongTXT] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (password.length > 3) {
      setPassStrong(1);
      setPassStrongTXT("Too weak");
    }
    if (password.length > 7) {
      setPassStrong(2);
      setPassStrongTXT("Could be stronger");
    }
    if (password.length > 9) {
      setPassStrong(3);
      setPassStrongTXT("Strong password");
    }
    if (password.length > 11) {
      setPassStrong(4);
      setPassStrongTXT("Very strong password");
    }
  }, [password]);




  const handleSubmit = async () => {
    const user = await registerUser(email, password, name);

    if (user) {
      navigate("/login-page");
    } else {
      console.error("Registration failed.");
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className=" w-screen h-[35rem] flex flex-col justify-center items-center">
      <div className=" w-[28rem] mx-20 py-20 px-10 flex flex-col items-start justify-start">
        <h2 className=" mb-[1.6rem] leading-[1.2rem] tracking-normal font-bold text-Udemygray-500 text-lg font-sans">
          Sign up and start learning
        </h2>
        <div className=" w-full h-16 border border-black mb-2">
          <input
            onInput={(ev) => setName((ev.target as HTMLInputElement).value)}
            type="text"
            className=" w-3/4 placeholder:text-Udemygray-500 placeholder:font-bold mt-5 ml-5 focus:font-extralight focus:text-xs focus:mt-2 focus:ml-2 transition-all outline-none"
            placeholder="Full name"
          />
        </div>
        <div className=" w-full h-16 border border-black mb-2">
          <input
            onInput={(ev) => setEmail((ev.target as HTMLInputElement).value)}
            type="text"
            className=" w-3/4 placeholder:text-Udemygray-500 placeholder:font-bold mt-5 ml-5 focus:font-extralight focus:text-xs focus:mt-2 focus:ml-2 transition-all outline-none"
            placeholder="Email"
          />
        </div>
        <div className=" w-full h-16 border border-black mb-2 group">
          <label className=" text-Udemygray-500 font-bold mt-5 ml-5 group-focus:text-sm" htmlFor="password">Password</label>
          <input
            onInput={(ev) => setPassword((ev.target as HTMLInputElement).value)}
            type="password"
            className=" w-3/4 placeholder:text-Udemygray-500 placeholder:font-bold h-full transition-all outline-none"
          />
        </div>
        <div className=" flex flex-row h-fit w-fit justify-center items-center gap-[0.18rem] mt-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={
                index + 1 > passStrong
                  ? " bg-Udemygray-200 h-[0.26rem] w-[2.7rem] rounded-full"
                  : " bg-Udemygray-500 h-[0.26rem] w-[2.7rem] rounded-full"
              }
            ></div>
          ))}
          <div className=" h-fit text-sm ml-2">{passStrongTXT}</div>
        </div>
        <div className=" w-full h-16 mt-4 flex flex-row items-start justify-start">
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            className=" pt-0"
            color="default"
          />
          <p className=" mt-2 text-sm">
            Send me special offers, personalized recommendations, and learning
            tips.
          </p>
        </div>
        <div
          onClick={() => handleSubmit()}
          className="flex flex-row justify-center items-center w-full h-12 bg-Udemypurple-300 hover:bg-Udemypurple-600 cursor-pointer"
        >
          <h1 className=" text-center text-white font-bold text-lg">Sign up</h1>
        </div>
        <h1 className=" text-xs mt-5">
          By signing up, you agree to our{" "}
          <span
            style={{ textDecorationColor: "blue" }}
            className=" underline underline-offset-4 cursor-pointer "
          >
            Terms of Use
          </span>{" "}
          and{" "}
          <span
            style={{ textDecorationColor: "blue" }}
            className=" underline underline-offset-4 cursor-pointer "
          >
            Privacy Policy
          </span>
          .
        </h1>
        <Divider className="pt-3 w-full text-black" />
        <div className=" w-full h-8 flex flex-row items-center justify-center">
          <h1 className="text-sm">
            Already have an account?{" "}
            <span className=" text-Udemyblue-300 underline underline-offset-4 font-bold">
              Log in
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
