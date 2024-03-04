import mongoose from "mongoose";
import express, { Request, Response } from "express";
import CartModel from "./cartsModel";

export async function addCourseToCart(req: Request, res: Response) {
  try {
    const { userId, courseId } = req.body;

    // בודק אם יש כבר סל קיים עבור המשתמש
    let cart = await CartModel.findOne({ uid: userId });

    // אם אין סל קיים, ניצור אחד
    if (!cart) {
      cart = await CartModel.create({ uid: userId, coursesId: [] });
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
