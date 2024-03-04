import express from "express";
const cartRouter = express.Router();
import {
    addCourseToCart
} from "./cartCont";

cartRouter
 
  .post("", addCourseToCart)
  
  
  

export default cartRouter;
