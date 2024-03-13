import mongoose from "mongoose";
import { Course } from "../../../db/dbStart";
import { Request, Response } from "express";


export async function getAllCourses(req: Request, res: Response) {
  try {
    const courses = await Course.find({});
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getAllCourses in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}
export async function getMostRecentCourses(req: Request, res: Response){
  try {
    const { category } = req.params;
    const courses = await Course.find({ category }).sort({ lastUpdated: -1 }).limit(5);
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getMostRecentCourses in courseCont!",
    });
    console.error("Error fetching most recent courses:", error);
  }
}

export async function getOneCourseById(req: Request, res: Response) {
  try {
    const new_id = req.params.id;
    const course = await Course.findOne({ courseId: new_id });
    res.status(200).send({ ok: true, course });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getAllCourses in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}

export async function getOneCourseByName(req: Request, res: Response) {
  try {
    const new_name = req.params.name;
    console.log(new_name)
    const course = await Course.findOne({
      courseName: { $regex: new RegExp(new_name, "i") },
    });
    if (course === null) throw new Error("course not excist!");
    res.status(200).send({ ok: true, course });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getOneCourseByName in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}

export async function get5CoursesByRecentlySearched(
  req: Request,
  res: Response
) {
  try {
    const recentlySearched = req.params.recentlySearched;

    const courses = await Course.find({
      courseContent: { $regex: new RegExp(recentlySearched, "i") },
    }).limit(5);
    if (courses.length === 0)
      throw new Error("there is no courses with this expression!");
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function get5CoursesByRecentlySearched in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}
export async function get5CoursesByMostViewing(req: Request, res: Response) {
  try {
    const courses = await Course.aggregate([
      { $sort: { numberOfStudents: -1 } },
      { $limit: 5 },
    ]);
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function get5CoursesByMostViewing in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}
//POST REQUESTS
export async function get5CoursesByMostRated(req: Request, res: Response) {
  try {
    const courses = await Course.aggregate([
      { $sort: { rating: -1 } },
      { $limit: 5 },
    ]);
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function get5CoursesByMostRated in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}
export async function get5CoursesByCategory(req: Request, res: Response) {
  try {
    const category = req.params.category;
    const courses = await Course.find({
      category: { $regex: new RegExp(category, "i") },
    }).limit(5);
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function get5CoursesByCategory in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}
export async function getAllCoursesByCategory(req: Request, res: Response) {
  try {
    const category = req.params.category;
    const courses = await Course.find({
      category: { $regex: new RegExp(category, "i") },
    });
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function get5CoursesByCategory in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}
export async function getAllCoursesByInstructorName(
  req: Request,
  res: Response
) {
  try {
    const {instructorName} = req.params;
    console.log(instructorName)
    const courses = await Course.find({
      teacherName: { $regex: new RegExp(instructorName, "i") },
    });
    console.log(courses)
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function get5CoursesByCategory in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}

export async function getBestSellerCourses(req: Request, res: Response) {
  const totalCount = await Course.countDocuments();
  const thirtyPercent = Math.ceil(0.3 * totalCount);
  const courses = await Course.aggregate([
    { $sort: { numberOfStudents: -1 } },
    { $limit: thirtyPercent } // Limit the result to thirtyPercent documents
  ]);
  const coursesID = courses.map((course) => (course.courseId))
  res.send(coursesID)
}

export async function getMostPopularCourse(req: Request, res: Response) {
  try {
    const courses = await Course.aggregate([
      { $sort: { numberOfStudents: -1 } },
      { $limit: 1 },
    ]);
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function get5CoursesByMostViewing in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}


export async function addNewCourse(req: Request, res: Response) {
  try {
    const teacherId = req.body.userUid
    const teacherName = req.body.userName
    const name = req.body.name;
    const mainDescription = req.body.mainDes;
    const secondDescriptions = req.body.secondDescriptions;
    const fullPrice = req.body.price;
    const discountPrice = req.body.disPrice;
    const course_img = req.body.img;
    const category = req.body.category;
    const fullDescription = req.body.bio;
    const courseId = Math.floor(Math.random() * 9000) + 1000;
    const currentDate = new Date().toISOString();

    const newCourseData = {
      courseId: courseId,
      teacherId: teacherId,
      courseName: name,
      teacherName: teacherName,
      mainDescription: mainDescription,
      rating: 0,
      numberOfRatings: 0,
      numberOfStudents: 0,
      lastUpdated: currentDate,
      language: "English",
      subtitlesLanguage: "English",
      fullPrice: fullPrice,
      discountPrice: discountPrice,
      secondDescriptions: secondDescriptions,
      courseDuration: 8,
      articlesNumber: 24,
      downloadableResourcesNumber: 12,
      courseContent: "Synagoga iusto terra. Desidero tripudio illum virtus asperiores casus. Auditor venio angustus. Aetas est nisi vicinus defero tutis amissio volup. Adeo quis ventosus nisi cado. Tergum adflicto caelestis neque tendo territo thymbra.Aestus capio tardus comes distinctio utpote animi vir subito aegrotatio. Testimonium quod agnosco tamquam arbor atrox corporis tergum. Summa statua spes acies suasoria capillus doloribus.",
      requirements: ["Computer","Basic knowledge in design"],
      fullDescription: fullDescription,
      course_img: course_img,
      category: category
    };

    const newCourse = new Course(newCourseData);
    await newCourse.save();

    res.status(201).json({
      ok: true,
      message: "New course added successfully!",
      course: newCourse
    });

  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function addNewCourse in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}

export async function getSearchedCoursesByName(req: Request, res: Response) {
  try {
    console.log("getSearchedCoursesByName started")
    const searchString = req.params.name;
    console.log("your search string baby!" , searchString)
    const courses = await Course.find({
      courseName: { $regex: new RegExp(searchString, "i") },
    });
    if (!courses.length) {
      throw new Error("No courses found matching the search criteria.");
    }
    console.log(courses.length)
    res.status(200).send({ ok: true, courses });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: "Error in function getSearchedCoursesByName in courseCont!",
    });
    console.error("Error fetching courses:", error);
  }
}



