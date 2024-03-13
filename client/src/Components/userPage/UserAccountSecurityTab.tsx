import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/user/userSlice";

const UserAccountSecurityTab = () => {
  const userRedux = useSelector(userSelector);
  const [sucsess, setSucsess] = useState<Boolean>(false);
  const [warning, setWarning] = useState<Boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");


  const changePassword = async () => {
    if (newPassword === reNewPassword) {
      const auth = getAuth();
      const userFirebase = auth.currentUser;

      updatePassword(userFirebase!, newPassword)
        .then(() => {
            setWarning(false)
            setSucsess(true)
        })
        .catch((error) => {
            setWarning(true)
        console.error(error)
        });

    } else {
      setWarning(true);
    }
  };

  return (
    <div className=" border h-full w-[56.2rem]">
      <div className=" w-full h-24 border-b flex flex-col items-center justify-center">
        <h1 className=" text-2xl font-bold">Account</h1>
        <h2 className="text-slate-800">
          Edit your account settings and change your password here.
        </h2>
      </div>
      <div className=" h-[61rem] w-full flex flex-col justify-start items-center">
        <div className=" h-fit w-full border-b p-6 flex flex-col justify-start items-center">
          <div className="h-fit w-full flex flex-col items-start justify-start max-w-[40rem] gap-4 p-4">
            <h1 className=" font-bold text-slate-800">Email:</h1>
            <div className=" w-full h-12 border border-black pl-4 pt-2">
              Your email address is{" "}
              <span className=" font-bold text-slate-800">{userRedux?.email}</span>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-start justify-start max-w-[40rem] gap-4 p-4">
          <h1 className=" font-bold text-slate-800">Password:</h1>

          <input
            className=" w-full h-12 border border-black pl-4 pt-2 outline-none placeholder:text-slate-600"
            placeholder="Enter new password"
            onInput={(ev) =>
              setNewPassword((ev.target as HTMLInputElement).value)
            }
          />
          <input
            className=" w-full h-12 border border-black pl-4 pt-2 outline-none placeholder:text-slate-600"
            placeholder="Re-type new password"
            onInput={(ev) =>
              setReNewPassword((ev.target as HTMLInputElement).value)
            }
          />
          <div
            onClick={() => changePassword()}
            className=" bg-Udemygray-500 w-[10rem] h-12 flex flex-row justify-center items-center font-bold text-white mt-6 cursor-pointer"
          >
            Change password
          </div>
          <Stack sx={{ width: "100%" }} spacing={2} className=" mt-4">
            {sucsess && (
              <Alert severity="success" className=" mt-8">
                Password updated successfully!
              </Alert>
            )}
            {warning && (
              <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="error"
                className=" mt-8"
              >
                Your passords not valid!
              </Alert>
            )}
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default UserAccountSecurityTab;
