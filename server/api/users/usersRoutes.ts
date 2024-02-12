import express from "express";
const router = express.Router();
import {register,getUser,setNewImg} from "./usersCont";

router
.get("/:uid", getUser)
.post("" , register)
.post("/changeIMG", setNewImg)

export default router;
