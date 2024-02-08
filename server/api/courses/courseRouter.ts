import express from "express";
const router = express.Router();
import {
  get5CoursesByMostViewing,
  getAllCourses,
  getCoursesByRecentlySearched,
  getOneCourseById,
  getOneCourseByName,
} from "./courseCont";

router
  .get("", getAllCourses)
  .get("/getCourseById/:id", getOneCourseById)
  .get("/getCourseByName/:name", getOneCourseByName)
  .get("/get5CoursesByMostViewing", get5CoursesByMostViewing)
  .get(
    "/getCoursesByRecentlySearched/:recentlySearched",
    getCoursesByRecentlySearched
  );

export default router;
