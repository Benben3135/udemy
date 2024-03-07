import mongoose from "mongoose";
import { Course } from "../../../db/dbStart";

export interface Course {
    courseId: number,
    teacherId: string,
    courseName: string,
    teacherName: string,
    mainDescription: string,
    rating: number,
    numberOfRatings: number,
    numberOfStudents: number,
    lastUpdated: Date,
    language: string,
    subtitlesLanguage: string,
    fullPrice: number,
    discountPrice: number,
    secondDescriptions: [string],
    courseDuration: number,
    articlesNumber: number,
    downloadableResourcesNumber: number,
    courseContent: string,
    requirements: [string],
    fullDescription: string,
    course_img: string,
    category: string,
}
