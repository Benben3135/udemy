import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import userModel, { User } from "../server/api/users/usersModel"

export const categories = [
  "Development",
  "Business",
  "Finance & Accounting",
  "IT and Software",
  "Office productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Lifestyle",
  "Photography & Video",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
];

const pricesRange = [
  119.90,
  269.90,
  469.90
]

const discountRange = [
  49.90,
  69.90,
  99.90
]


mongoose.connect(
  "mongodb+srv://bennyvolo28:EjO9PTKNvr8Exr8Z@udemy.shffm2f.mongodb.net/"
);

export const courseSchema = new mongoose.Schema({
  courseId: Number,
  teacherId: String,
  courseName: String,
  teacherName: String,
  mainDescription: String,
  rating: Number,
  numberOfRatings: Number,
  numberOfStudents: Number,
  lastUpdated: Date,
  language: { type: String, default: "English" },
  subtitlesLanguage: { type: String, default: "English" },
  fullPrice: Number,
  discountPrice: Number,
  secondDescriptions: [String],
  courseDuration: Number,
  articlesNumber: Number,
  downloadableResourcesNumber: Number,
  courseContent: String,
  requirements: [String],
  fullDescription: String,
  course_img: String,
  category: String,
});

export const Course = mongoose.model("Course", courseSchema);

const generatePersonImageURL = () => {
  const randomNumber = Math.floor(Math.random() * 1000); // Picsum Photos has images up to 1000
  return `https://picsum.photos/200/300?random=${randomNumber}`;
};

const generateRandomCourses = async (count: number, teacherId: string, teacherName: string, category: string,teacherNumber:number) => {
  const courses = [];

  for (let i = 1; i <= count; i++) {
    const index = Math.round(Math.random() * 2);
    const course = {
      courseId: teacherNumber*10 + i,
      teacherId: teacherId,
      courseName: faker.lorem.words(3),
      teacherName: teacherName,
      mainDescription: faker.lorem.paragraph(),
      rating: Math.random() * 5,
      numberOfRatings: Math.floor(Math.random() * 100),
      numberOfStudents: Math.floor(Math.random() * 500),
      lastUpdated: faker.date.past(),
      language: "English",
      subtitlesLanguage: "English",
      fullPrice: pricesRange[index],
      discountPrice: discountRange[index],
      secondDescriptions: Array.from(
        { length: Math.floor(Math.random() * 3) + 7 },
        () => faker.lorem.sentence()
      ),
      courseDuration: Math.floor(Math.random() * 20) + 1,
      articlesNumber: Math.floor(Math.random() * 10),
      downloadableResourcesNumber: Math.floor(Math.random() * 5),
      courseContent: faker.lorem.paragraphs(3),
      requirements: Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () => faker.lorem.sentence()
      ),
      fullDescription: faker.lorem.paragraphs(5),
      course_img: faker.image.urlPicsumPhotos(),
      category: category,
    };
    //@ts-ignore
    courses.push(course);
  }

  try {
    // Save each course to MongoDB
    for (const course of courses) {
      await Course.create(course);
    }

    console.log(`${count} courses saved to MongoDB`);
  } catch (error) {
    console.error("Error saving courses to MongoDB:", error);
  }
};

export const generateAndCreateTeachers = async (count: number) => {
  try {
    for (let i = 1; i <= count; i++) {
      const name = faker.person.fullName();
      const displayNameWithoutSpaces = name.replace(/\s/g, '');
      const category = categories[Math.floor(Math.random() * 8)];
      const numberOfCourses = Math.floor(Math.random() * 8) + 1;

      const teacher: User = {
        uid: "teacher" + i,
        displayName: name,
        email: displayNameWithoutSpaces + "@gmail.com",
        isTeacher: true,
        photoURL: generatePersonImageURL(),
        headline: faker.person.jobTitle() + "instructor",
        bio: faker.lorem.paragraphs(5),
        website: faker.internet.url(),
        twitter: "https://twitter.com/" + displayNameWithoutSpaces,
        facebook: "https://www.facebook.com/" + displayNameWithoutSpaces,
        linkedin: "https://www.linkedin.com/in/" + displayNameWithoutSpaces,
        youtube: "https://www.youtube.com/user/" + displayNameWithoutSpaces
      };

      const newTeacher = await userModel.create(teacher)
      if (newTeacher) {
        const teacherNumber = i;
        const courses = await generateRandomCourses(numberOfCourses, teacher.uid, name, category,teacherNumber);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", async () => {
//   console.log("Connected to MongoDB 📝");
//   await generateAndCreateTeachers(50);
// });