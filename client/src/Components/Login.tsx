import React from 'react'
import { Divider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/userApi/registerApi";
import { UseSelector, useSelector } from 'react-redux';
import { userSelector } from '../features/user/userSlice';
import { loginUser } from "../../api/userApi/logInApi";



const Login = () => {
    const[token, setToken]  = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const tokenRedux = useSelector(userSelector)
  useEffect(()=>
  {if(tokenRedux.logIn)
    {
        setToken(true)
        
    }
    else
    {
        setToken(false)
    }
},[tokenRedux]
  )
  useEffect(()=>{
    console.log(token)

  },[token])
  return (
    <div><button onClick={()=>loginUser()}>click</button></div>
  )
}

export default Login