import express from "express";
const router = express.Router();
import {
  register,
  getUser,
  setNewImg,
  addNewInfo,
  getTeachersNames,
} from "./usersCont";

router
  .get("/:uid", getUser)
  .post("", register)
  .post("/changeIMG", setNewImg)
  .post("/add-info", addNewInfo);

export default router;
