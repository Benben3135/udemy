import express from "express";
const router = express.Router();
import {
  get5CoursesByMostViewing,
  getAllCourses,
  get5CoursesByRecentlySearched,
  getOneCourseById,
  getOneCourseByName,
  get5CoursesByMostRated,
  get5CoursesByCategory,
  getAllCoursesByCategory,
  getAllCoursesByInstructorName,
  getBestSellerCourses,
  getMostPopularCourse,
  addNewCourse,
  getSearchedCoursesByName
} from "./courseCont";

// הוסף את השורה הבאה
import { getMostRecentCourses } from "./courseCont"; 

router
  .get("", getAllCourses)
  .get("/getCourseById/:id", getOneCourseById)
  .get("/getCourseByName/:name", getOneCourseByName)
  .get("/get5CoursesByMostViewing", get5CoursesByMostViewing)
  .get(
    "/get5CoursesByRecentlySearched/:recentlySearched",
    get5CoursesByRecentlySearched
  )
  .get("/get5CoursesByMostRated", get5CoursesByMostRated)
  .get("/get5CoursesByCategory/:category", get5CoursesByCategory)
  .get("/getAllCoursesByCategory/:category", getAllCoursesByCategory)
  .get(
    "/getAllCoursesByInstructor/:instructorName",
    getAllCoursesByInstructorName
  )
  .get("/getBestSellerCourses", getBestSellerCourses)
  .get("/getMostPopularCourse", getMostPopularCourse)
  .post("/addNewCourse", addNewCourse)
  // הוסף את השורה הבאה
  .get("/getMostRecentCourses/:category", getMostRecentCourses)
  .get("/getSearchedCoursesByName/:name" , getSearchedCoursesByName)

export default router;
