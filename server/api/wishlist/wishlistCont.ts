import wishlistModel from "./wishlistModel"
import { Course } from "../../../db/dbStart";
import mongoose from "mongoose";
import express from "express";
import { Request, Response } from "express";

export async function addToWishlist(req: Request, res: Response) {
    try {
        const { uid, courseID } = req.body;

        // Check if wishlist item already exists for this user
        const existingWishlistItem = await wishlistModel.findOne({ uid });

        if (existingWishlistItem) {

            // Check if courseID already exists in the coursesId array
            //@ts-ignore
            const courseIdIndex = existingWishlistItem.coursesId.indexOf(courseID);

            if (courseIdIndex !== -1) {
                // Remove the courseID from the coursesId array
                existingWishlistItem.coursesId.splice(courseIdIndex, 1);

                // Save the updated wishlist item
                await existingWishlistItem.save();

                return res.status(200).json({pk:true, existingWishlistItem}); // Respond with updated wishlist item
            }

            // Add the courseID to the coursesId array
            //@ts-ignore
            existingWishlistItem.coursesId.push(courseID);

            // Save the updated wishlist item
            const updatedWishlistItem = await existingWishlistItem.save();

            return res.status(200).json({ok:true , updatedWishlistItem}); // Respond with updated wishlist item
        } else {
            // Create a new wishlist item
            const newWishlistItem = await wishlistModel.create({
                uid,
                coursesId: [courseID]
            });

            return res.status(201).json({ok:true , newWishlistItem}); // Respond with newly created wishlist item
        }
    } catch (error) {
        console.error("Error occurred while adding to wishlist:", error);
        return res.status(500).json({ error: "An error occurred while adding to wishlist" });
    }
}

export async function getUserWishlist(req: Request, res: Response) {
    try {
        const uid = req.params.uid;
        const userWishlist = await wishlistModel.findOne({uid})
        if(userWishlist){
            const wishlist = userWishlist!.coursesId
            res.send({ok:true , wishlist})
        }
        else{
            res.send({ok:false})
        }
       
    } catch (error) {
        console.error("Error occurred while getting wishlist:", error);
        return res.status(500).json({ error: "An error occurred while getting wishlist" });
    }
}

export async function getUserWishlistCourses(req: Request, res: Response) {
    try {
        const uid = req.params.uid;
        const userWishlist = await wishlistModel.findOne({uid})
        if(userWishlist){
            const wishlist = userWishlist!.coursesId
            const wishlistCourses = await Course.find({ courseId: { $in: wishlist } }); // Using $in operator to find courses
            res.send({wishlistCourses})
        }
        else{
            res.send({ok:false})
        }
       
    } catch (error) {
        console.error("Error occurred while getting wishlist:", error);
        return res.status(500).json({ error: "An error occurred while getting wishlist" });
    }
}
