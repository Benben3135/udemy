import express from "express";
const router = express.Router();
import { addToWishlist , getUserWishlist , getUserWishlistCourses } from "./wishlistCont";

router
  .post("", addToWishlist)
  .get("/:uid", getUserWishlist)
  .get("/getCourses/:uid", getUserWishlistCourses)


export default router;
