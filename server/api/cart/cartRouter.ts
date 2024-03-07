import express from "express";
const cartRouter = express.Router();
import {
    addCourseToCart,
    getCartCourses
} from "./cartCont";

cartRouter
 
  .post("", addCourseToCart)
  .get("/:uid", getCartCourses)
  
  
  

export default cartRouter;
