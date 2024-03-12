import mongoose from "mongoose";
import purchasedModel from './purchasedModel'
import { Request, Response } from "express";
import { Course } from "../../../db/dbStart";


export async function getAllPurchasedCourses(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    console.log("getAllPurchasedCourses", uid);

    // Find all purchased courses for the user
    let purchased = await purchasedModel.findOne({ uid: uid });
    // Extract courseIds from purchased courses
    if (!purchased) {
      res.status(200).send({
      ok: false,
      message: "no purchased courses!",
    });
    }
    if(purchased){
      const courseIds = purchased.coursesId

      // Find all courses with matching courseIds
      const courses = await Course.find({ courseId: { $in: courseIds } });
  
      res.status(200).send({ ok: true, courses });
    }
    
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getAllCourses in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}


export async function addAllPurchsedCourses(req: Request, res: Response) {
  try {
    const { uid, courseId } = req.body;
    console.log("purchased got your info!", uid, courseId)
    let purchased = await purchasedModel.findOne({ uid: uid });

    // אם אין סל קיים, ניצור אחד
    if (!purchased) {
      purchased = await purchasedModel.create({ uid: uid, coursesId: [] });
    }

    // בודק אם הקורס כבר נמצא בסל
    const isCourseInCart = purchased.coursesId.includes(courseId);

    // אם הקורס כבר נמצא בסל, נשלח שוב את אותו המידע כתשובה
    if (isCourseInCart) {
      res.status(200).json({
        ok: true,
        message: "Course is already in the purchased",
        purchased: purchased,
      });
      return;
    }

    // אחרת, נוסיף את הקורס למערך הקורסים בסל
    purchased.coursesId.push(courseId);

    // שמירה של השינויים במסמך הסל
    await purchased.save();

    // שליחת תשובה עם המידע המעודכן
    res.status(200).json({
      ok: true,
      message: "Course added to the purchased successfully",
      purchased: purchased,
    });
  } catch (error) {
    console.error("Error adding course to purchased:", error);
    res.status(500).json({
      ok: false,
      message: "Internal server error",
    });
  }
}