import express from "express";
const cartRouter = express.Router();
import {
    addCourseToCart,
    getCartCourses,
    removeCourseFromCart
} from "./cartCont";

cartRouter
 
  .post("", addCourseToCart)
  .get("/:uid", getCartCourses)
  .post("/remove",removeCourseFromCart)
  
  
  

export default cartRouter;
