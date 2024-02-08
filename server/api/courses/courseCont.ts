import mongoose from "mongoose";
import { Course } from "../../../db/dbStart";
import express from "express";
import { Request, Response } from "express";

//GET REQUESTS

export async function getAllCourses(req: Request, res: Response) {
  try {
    const courses = await Course.find({});
    console.log(courses);
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getAllCourses in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}

export async function getOneCourseById(req: Request, res: Response) {
  try {
    const new_id = req.params.id;
    console.log(new_id);
    const course = await Course.findOne({ courseId: new_id });
    console.log(course);
    res.status(200).send({ ok: true, course });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getAllCourses in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}

export async function getOneCourseByName(req: Request, res: Response) {
  try {
    const new_name = req.params.name;
    console.log(new_name);
    //case sensitive query
    const course = await Course.findOne({
      courseName: { $regex: new RegExp(new_name, "i") },
    });
    console.log(course);
    if (course === null) throw new Error("course not excist!");
    res.status(200).send({ ok: true, course });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getAllCourses in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}

export async function getCoursesByRecentlySearched(
  req: Request,
  res: Response
) {
  try {
    const recentlySearched = req.params.recentlySearched;
    console.log(recentlySearched);

    const courses = await Course.find({
      courseContent: { $regex: new RegExp(recentlySearched, "i") },
    }).limit(5);
    console.log(courses);
    if (courses.length === 0)
      throw new Error("there is no courses with this expression!");
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getCourseByMostViewing in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}
export async function get5CoursesByMostViewing(req: Request, res: Response) {
  try {
    const courses = await Course.aggregate([
      { $sort: { numberOfStudents: -1 } }, // Sort documents by numberOfStudents in descending order
      { $limit: 5 }, // Limit the results to 5 documents
    ]);
    console.log(courses);
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getCourseByMostViewing in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}
//POST REQUESTS
