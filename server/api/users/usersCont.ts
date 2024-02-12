import userModel from "./usersModel"
import mongoose from "mongoose"
import express from "express";
import { Request, Response } from "express";


export async function register(req: Request, res: Response) {
    try {
        const { uid, isTeacher } = req.body;
        const newUser = await userModel.create({ uid, isTeacher });

        res.status(201).json(newUser);

    } catch (error) {
        console.error("Error occurred during registration:", error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred during registration" }); // Respond with an error status
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const uid = req.params.uid;
        console.log(uid)
        const user = await userModel.findOne({ uid })
        res.status(200).send({ user })

    } catch (error) {
        console.error("Error occurred during registration:", error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred during registration" }); // Respond with an error status
    }
}

export async function setNewImg(req: Request, res: Response) {
    try {
        const uid = req.body.uid;
        const img = req.body.img;
        const result = await userModel.updateOne({ uid: uid },
            { $set: { img: img } })
        res.status(200).send({ok: true})

    } catch (error) {
        console.error("Error occurred during registration:", error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred during registration" }); // Respond with an error status
    }
}