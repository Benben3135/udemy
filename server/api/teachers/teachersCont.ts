import { Course } from "../../../db/dbStart";
import mongoose from "mongoose";
import express from "express";
import { Request, Response } from "express";
import userModel from "../users/usersModel";

export async function getTeachersNames(req: Request, res: Response) {
  try {
    const teachersName = req.params.teachersName;
    const teacher = await userModel.findOne({ displayName: teachersName });
    res.status(200).send({ teacher });
  } catch (error) {
    console.error("Error occurred during getTeachersNames:", error); // Log the error for debugging
    res
      .status(500)
      .json({ error: "An error occurred during getTeachersNames" }); // Respond with an error status
  }
}
export async function getNumberOfStudents(req: Request, res: Response) {
  try {
    const teachersName = req.params.teachersName;
    const teacher = await Course.find({ teacherName: teachersName });
    let teacherNumberOfStudents = 0;
    teacher.forEach((teacher) => {
      if (teacher.numberOfStudents) {
        // Check if numberOfStudents is not null or undefined
        teacherNumberOfStudents += teacher.numberOfStudents;
      }
    });
    res.status(200).send({ teacherNumberOfStudents });
  } catch (error) {
    console.error("Error occurred during getNumberOfStudents:", error); // Log the error for debugging
    res
      .status(500)
      .json({ error: "An error occurred during getNumberOfStudents" }); // Respond with an error status
  }
}
export async function getNumberOfCourses(req: Request, res: Response) {
  try {
    const teachersName = req.params.teachersName;
    const teacher = await Course.find({ teacherName: teachersName });
    const teacherNumberOfCourses = teacher.length;
    res.status(200).send({ teacherNumberOfCourses });
  } catch (error) {
    console.error("Error occurred during getTeachersNames:", error);
    res
      .status(500)
      .json({ error: "An error occurred during getNumberOfCourses" });
  }
}
export async function getNumberOfReviews(req: Request, res: Response) {
  try {
    const teachersName = req.params.teachersName;
    const teacher = await Course.find({ teacherName: teachersName });
    let teacherNumberOfReviews = 0;
    teacher.forEach((teacher) => {
      if (teacher.numberOfRatings) {
        teacherNumberOfReviews += teacher.numberOfRatings;
      }
    });
    res.status(200).send({ teacherNumberOfReviews });
  } catch (error) {
    console.error("Error occurred during getNumberOfReviews:", error);
    res
      .status(500)
      .json({ error: "An error occurred during getNumberOfReviews" });
  }
}
