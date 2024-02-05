import React, { useEffect, useState } from 'react'
import {registerUser} from '../../api/userApi/registerApi'
import { useNavigate } from 'react-router-dom'
import {  motion} from 'framer-motion'
import { Input } from '@mui/material'
import { CircleUser, User,Lock, CheckCheck } from 'lucide-react'

const Register = () => {
    const [name,setName ] = useState<string>("")
    const [email,setEmail ] = useState<string>("")
    const [password,setPassword ] = useState<string>("")
    const [confirmPassword,setConfirmPassword ] = useState<string>("")
    const [match, setMatch] = useState(false)
    const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    if (match) {
      const user = await registerUser( email, password )

      if (user) {
        setLoading(false)
      navigate("/login-page")
      
        console.log("Registration successful!")
      } else {
        console.error("Registration failed.")
      }
    }
  }
  useEffect(() => {
    handleSubmit()
  }, [])



  return (
    <div className=" bg-gradient-to-br from-slate-300 to-slate-900 h-screen w-screen overflow-hidden">
      <div className=" h-fit mt-16 w-full flex flex-col items-center justify-center">
        <div className=" w-fit h-fit mt-20 flex flex-col items-center justify-center">
          <h1 className=" text-6xl antialiased font-bold tracking-tight text-slate-700">
            Welcome to the best movies reviews site{" "}
            <span className=" text-red-600">out there</span>.
          </h1>
          <h2 className="text-2xl max-w-prose antialiased font-normal tracking-tight text-slate-600">
            Login is completely free. We suggest you to try our{" "}
            <span
              onClick={() => navigate("/")}
              className=" underline hover:text-blue-800 cursor-pointer transition-all"
            >
              PRO plan
            </span>{" "}
            for proffesional critics.
          </h2>
        </div>
        <motion.div
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        className=" mt-14 w-96 bg-gradient-to-b from-slate-300 to-red-300 rounded-lg flex flex-col justify-center items-center shadow-md p-4">
          <div className="w-[22rem] bg-gradient-to-b from-slate-600 to-slate-900 rounded-lg shadow-lg flex flex-col items-center justify-start p-2 h-fit">
            <h1 className=" text-3xl font-bold font-sans text-slate-300 antialiased">
              Register
            </h1>
            <div className=" mt-8 w-full">
              <form className=" flex flex-col items-start justify-center gap-2">
                <div className=" flex flex-row items-center justify-start w-full gap-2">
                  <User className=" text-gray-200" />
                  <Input
                    onInput={(ev) =>
                      setName((ev.target as HTMLInputElement).value)
                    }
                    className=" flex-grow"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className=" flex flex-row items-center justify-start w-full gap-2">
                  <CircleUser className=" text-gray-200" />
                  <Input
                    onInput={(ev) =>
                      setEmail((ev.target as HTMLInputElement).value)
                    }
                    className=" flex-grow"
                    type="email"
                    placeholder="email"
                  />
                </div>
                <div
                  onInput={(ev) =>
                    setPassword((ev.target as HTMLInputElement).value)
                  }
                  className=" flex flex-row items-center justify-start w-full gap-2"
                >
                  <Lock className=" text-gray-200" />
                  <Input
                    className=" flex-grow"
                    type="text"
                    placeholder="Create a new password"
                  />
                </div>
                <div
                  onInput={(ev) =>
                    setConfirmPassword((ev.target as HTMLInputElement).value)
                  }
                  className=" flex flex-row items-center justify-start w-full gap-2"
                >
                  <CheckCheck
                    className={match ? " text-green-600" : "text-red-600"}
                  />
                  <Input
                    className=" flex-grow"
                    type="text"
                    placeholder="Confirm password"
                  />
                </div>
                <div className=" w-full h-fit text-center text-red-800 text-lg font-sans antialiased">
                </div>
                <div
                  onClick={() => handleSubmit()}
                  className=" w-full h-10 flex flex-col items-center justify-center mt-2"
                >
                  <div className=" bg-slate-200 rounded-lg h-fit p-2 w-4/5 text-center hover:bg-slate-300 cursor-pointer transition-all">
                    Submit
                  </div>
                </div>
                <div onClick={() => navigate("/login-page")} className=" w-full flex flex-row justify-center items-center h-fit rounded-xl hover:bg-slate-400 transition-all cursor-pointer">
                  <p className=" font-bold text-slate-300">
                    already have an account?
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Register