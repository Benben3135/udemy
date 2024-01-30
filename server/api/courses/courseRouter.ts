import express from "express";
const router = express.Router();
import {getAllCourses,getOneCourseById,getOneCourseByName} from "./courseCont"

router
.get("", getAllCourses)
.get("/getCourseById/:id",getOneCourseById)
.get("/getCourseByName/:name", getOneCourseByName)

export default router;