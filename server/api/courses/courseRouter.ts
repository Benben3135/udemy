import express from "express";
const router = express.Router();
import {
  get5CoursesByMostViewing,
  getAllCourses,
  get5CoursesByRecentlySearched,
  getOneCourseById,
  getOneCourseByName,
  get5CoursesByMostRated,
} from "./courseCont";

router
  .get("", getAllCourses)
  .get("/getCourseById/:id", getOneCourseById)
  .get("/getCourseByName/:name", getOneCourseByName)
  .get("/get5CoursesByMostViewing", get5CoursesByMostViewing)
  .get(
    "/get5CoursesByRecentlySearched/:recentlySearched",
    get5CoursesByRecentlySearched
  )
  .get("/get5CoursesByMostRated", get5CoursesByMostRated);

export default router;
