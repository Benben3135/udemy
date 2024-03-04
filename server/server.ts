import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import mongoose from "mongoose";
import {generateAndCreateTeachers} from "../db/dbStart"

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
//when/if we will use CORS
// app.use(cors({
//     origin: 'http://localhost:5173',
// }));
app.use(cookieParser());

//////////////////////
//API ROUTES
import CoursesRouter from "./api/courses/courseRouter";
app.use("/API/courses", CoursesRouter);

import UsersRouter from "./api/users/usersRoutes";
app.use("/API/users", UsersRouter);

import WishlistRouter from "./api/wishlist/wishlistRoutes";
app.use("/API/wishlist", WishlistRouter);
import TeachersRouter from "./api/teachers/teachersRouter";
app.use("/API/teachers", TeachersRouter);
import cartRouter from "./api/cart/cartRouter";
app.use("/API/cart", cartRouter);
// Connect to MongoDB
mongoose.connect(MONGO_URI!);

// Check MongoDB connection status
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("connected to MongoDB 📝");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
