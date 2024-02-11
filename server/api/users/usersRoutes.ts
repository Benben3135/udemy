import express from "express";
const router = express.Router();
import {register,getUser} from "./usersCont";

router
.get("/:uid", getUser)
.post("" , register)

export default router;
