import mongoose from "mongoose";
import express, { Request, Response } from "express";
import CartsModel from "./cartsModel";
import { Course } from "../../../db/dbStart";


export async function addCourseToCart(req: Request, res: Response) {
  try {
    const { uid, courseId } = req.body;
    // בודק אם יש כבר סל קיים עבור המשתמש
    let cart = await CartsModel.findOne({ uid: uid });

    // אם אין סל קיים, ניצור אחד
    if (!cart) {
      cart = await CartsModel.create({ uid: uid, coursesId: [] });
    }

    // בודק אם הקורס כבר נמצא בסל
    const isCourseInCart = cart.coursesId.includes(courseId);

    // אם הקורס כבר נמצא בסל, נשלח שוב את אותו המידע כתשובה
    if (isCourseInCart) {
      res.status(200).json({
        ok: true,
        message: "Course is already in the cart",
        cart: cart,
      });
      return;
    }

    // אחרת, נוסיף את הקורס למערך הקורסים בסל
    cart.coursesId.push(courseId);

    // שמירה של השינויים במסמך הסל
    await cart.save();

    // שליחת תשובה עם המידע המעודכן
    res.status(200).json({
      ok: true,
      message: "Course added to the cart successfully",
      cart: cart,
    });
  } catch (error) {
    console.error("Error adding course to cart:", error);
    res.status(500).json({
      ok: false,
      message: "Internal server error",
    });
  }
}

export async function getCartCourses(req: Request, res: Response) {
  try {
    const { uid } = req.params;
    const cartCourses = await CartsModel.findOne({ uid });
    if (cartCourses) {
      const courses = cartCourses.coursesId;
      const fullCourses = [];
      for (const course of courses) {
        const newCourse = await getOneCourseById(course);
        fullCourses.push(newCourse);
      }
      res.status(200).json({
        ok: true,
        courses: fullCourses,
      });
    } else {
      res.status(404).json({
        ok: false,
        message: "Cart not found",
      });
    }
  } catch (error) {
    console.error("Error occurred while getCartCourses:", error);
    res.status(500).json({
      ok: false,
      message: "Internal server error",
    });
  }
}

export async function getOneCourseById(courseId: number) {
  try {
    const course = await Course.findOne({ courseId: courseId });
    return course

  } catch (error) {
    console.error("Error fetching courses:", error);
  }
}

export async function removeCourseFromCart(req: Request, res: Response) {
  try {
    const { uid, courseId } = req.body;
    let cart = await CartsModel.findOne({ uid: uid });

    if (!cart) {
      cart = await CartsModel.create({ uid: uid, coursesId: [] });
    }

    const isCourseInCart = cart.coursesId.includes(courseId);

    if (isCourseInCart) {
      cart.coursesId = cart.coursesId.filter((course) => course !== courseId);
      await cart.save(); // Save the updated cart to the database
      res.status(200).json({
        ok: true,
        message: "Course deleted",
        cart: cart,
      });
      return;
    } else {
      res.status(400).json({
        ok: false,
        message: "Course not found in cart",
      });
      return;
    }
  } catch (error) {
    console.error("Error removing course from cart:", error);
    res.status(500).json({
      ok: false,
      message: "Internal server error",
    });
  }
}
