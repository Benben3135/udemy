import { faker } from '@faker-js/faker';
import mongoose from "mongoose"


mongoose.connect('mongodb+srv://bennyvolo28:EjO9PTKNvr8Exr8Z@udemy.shffm2f.mongodb.net/');

export const courseSchema = new mongoose.Schema({
  courseId: Number,
  teacherId: Number,
  courseName: String,
  teacherName: String,
  mainDescription: String,
  rating: Number,
  numberOfRatings: Number,
  numberOfStudents: Number,
  lastUpdated: Date,
  language: { type: String, default: 'English' },
  subtitlesLanguage: { type: String, default: 'English' },
  fullPrice: Number,
  discountPrice: Number,
  secondDescriptions: [String],
  courseDuration: Number,
  articlesNumber: Number,
  downloadableResourcesNumber: Number,
  courseContent: String,
  requirements: [String],
  fullDescription: String,
  course_img: String
});

export const Course = mongoose.model('Course', courseSchema);

// Function to generate and save random courses
const generateAndSaveRandomCourses = async (count:number) => {
  const courses = generateRandomCourses(count);

  try {
    // Save each course to MongoDB
    for (const course of courses) {
      await Course.create(course);
    }

    console.log(`${count} courses saved to MongoDB`);
  } catch (error) {
    console.error('Error saving courses to MongoDB:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};





const generateRandomCourses = (count:number) => {
  const courses = [];

  for (let i = 1; i <= count; i++) {
    const course = {
      courseId: i,
      teacherId: i,
      courseName: faker.lorem.words(3),
      teacherName: faker.person.fullName(),
      mainDescription: faker.lorem.paragraph(),
      rating: Math.random() * 5,
      numberOfRatings: Math.floor(Math.random() * 100),
      numberOfStudents: Math.floor(Math.random() * 500),
      lastUpdated: faker.date.past(),
      language: 'English',
      subtitlesLanguage: 'English',
      fullPrice: Math.random() * 100,
      discountPrice: Math.random() * 80,
      secondDescriptions: Array.from({ length: Math.floor(Math.random() * 3) + 7 }, () =>
        faker.lorem.sentence()
      ),
      courseDuration: Math.floor(Math.random() * 20) + 1,
      articlesNumber: Math.floor(Math.random() * 10),
      downloadableResourcesNumber: Math.floor(Math.random() * 5),
      courseContent: faker.lorem.paragraphs(3),
      requirements: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () =>
        faker.lorem.sentence()
      ),
      fullDescription: faker.lorem.paragraphs(5),
      course_img: faker.image.urlPicsumPhotos()
    };
//@ts-ignore
    courses.push(course);
  }

  return courses;
};

// generateAndSaveRandomCourses(20);