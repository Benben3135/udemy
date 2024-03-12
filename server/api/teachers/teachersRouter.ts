import express from "express";
const router = express.Router();
import { getTeachersNames } from "../users/usersCont";
import {
  getNumberOfCourses,
  getNumberOfReviews,
  getNumberOfStudents,
} from "./teachersCont";

router
  .get("/get-teachers-names/:teachersName", getTeachersNames)
  .get("/get-number-of-students/:teachersName", getNumberOfStudents)
  .get("/get-number-of-courses/:teachersName", getNumberOfCourses)
  .get("/get-number-of-reviews/:teachersName", getNumberOfReviews);

export default router;
