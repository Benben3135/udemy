import express from "express";
const router = express.Router();
import {
  getAllPurchasedCourses,
  addAllPurchsedCourses
} from "./purchasedCont";



router
  .get("/:uid", getAllPurchasedCourses)
  .post("",addAllPurchsedCourses)

export default router;
