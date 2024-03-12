import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import mongoose from "mongoose";
import { generateAndCreateTeachers } from "../db/dbStart"
import Stripe from "stripe";

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;
import cors from "cors";

app.use(express.json());
//when/if we will use CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
}));
app.use(cookieParser());
//////////////////////
//Stripe initialization

const stripe = require("stripe")('sk_test_51Ob07vGPw5IknvcV3zRoCrdupzCxj3rPGsq7QbnHlKKdlIiYdoU5EQ8fLccxbiasCkOGtILWoJbRybA1690xNWQ4001aTP3ppP')

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});



const calculateOrderAmount = (items: any[]): number => {
  let amount = 0;
  
  for (let item of items) {
    amount += item.discountPrice;
  }
    
  const finalAmount: number = Math.round(amount * 100); // Round to the nearest integer before multiplying by 100
  
 return finalAmount
};

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
const {items} = req.body;
  const session = await stripe.checkout.sessions.create({

    payment_method_types: ['card'],

    line_items: [

      {

        price_data: {

          currency: 'usd',

          product_data: {

            name: 'Your Product Name',

          },

          unit_amount: calculateOrderAmount(items),

        },

        quantity: 1,

      },

    ],

    mode: 'payment',

    success_url: 'http://localhost:5173/completion',

    cancel_url: 'http://localhost:5173/cancel',

  });
  res.send({id: session.id})
});



//////////////////////
//API ROUTES


import CoursesRouter from "./api/courses/courseRouter";
app.use("/API/courses", CoursesRouter);

import UsersRouter from "./api/users/usersRoutes";
app.use("/API/users", UsersRouter);

import PurchasedRouter from "./api/purchased/purchasedRouter";
app.use("/API/purchased", PurchasedRouter)

import WishlistRouter from "./api/wishlist/wishlistRoutes";
app.use("/API/wishlist", WishlistRouter);
import TeachersRouter from "./api/teachers/teachersRouter";
app.use("/API/teachers", TeachersRouter);
import cartRouter from "./api/cart/cartRouter";
import { Course } from "./api/courses/coursesModel";
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
