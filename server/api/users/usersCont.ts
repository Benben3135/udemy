import userModel from "./usersModel";
import mongoose from "mongoose";
import express from "express";
import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  try {
    const { uid, isTeacher, displayName, email } = req.body;
    const newUser = await userModel.create({
      uid,
      isTeacher,
      displayName,
      email,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error occurred during registration:", error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred during registration" }); // Respond with an error status
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const uid = req.params.uid;
    const user = await userModel.findOne({ uid });
    res.status(200).send({ user });
  } catch (error) {
    console.error("Error occurred during registration:", error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred during registration" }); // Respond with an error status
  }
}
export async function getTeachersNames(req: Request, res: Response) {
  try {
    const teachersName = req.params.teachersName;
    console.log("enter to getTeachersNames");
    const teacher = await userModel.findOne({ displayName: teachersName });
    console.log(teacher);
    res.status(200).send({ teacher });
  } catch (error) {
    console.error("Error occurred during getTeachersNames:", error); // Log the error for debugging
    res
      .status(500)
      .json({ error: "An error occurred during getTeachersNames" }); // Respond with an error status
  }
}

export async function setNewImg(req: Request, res: Response) {
  try {
    const uid = req.body.uid;
    const photoURL = req.body.img;
    const result = await userModel.updateOne(
      { uid: uid },
      { $set: { photoURL: photoURL } }
    );
    res.status(200).send({ ok: true });
  } catch (error) {
    console.error("Error occurred during registration:", error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred during registration" }); // Respond with an error status
  }
}
export async function addNewInfo(req: Request, res: Response) {
  try {
    const {
      uid,
      headline,
      bio,
      website,
      twitter,
      facebook,
      linkedin,
      youtube,
    } = req.body;
    const result = await userModel.updateOne(
      { uid: uid },
      { $set: { headline, bio, website, twitter, facebook, linkedin, youtube } }
    );
    res.status(200).send({ ok: true, message: result });
  } catch (error) {
    console.error("Error occurred during registration:", error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred during registration" }); // Respond with an error status
  }
}
