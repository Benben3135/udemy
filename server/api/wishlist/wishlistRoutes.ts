import express from "express";
const router = express.Router();
import { addToWishlist , getUserWishlist } from "./wishlistCont";

router
  .post("", addToWishlist)
  .get("/:uid", getUserWishlist)

export default router;
