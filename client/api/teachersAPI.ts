import axios from "axios";
export const getTeacher = async (teachersName: string) => {
  const { data } = await axios.get(
    `/API/teachers/get-teachers-names/${teachersName}`
  );
  console.log(data);
  return data.teacher;
};
// number of students
export const getNumberOfStudents = async (teachersName: string) => {
  const { data } = await axios.get(
    `/API/teachers/get-number-of-students/${teachersName}`
  );
  console.log(data);
  return data;
};

// number of Reviews
export const getNumberOfReviews = async (teachersName: string) => {
  const { data } = await axios.get(
    `/API/teachers/get-number-of-reviews/${teachersName}`
  );
  console.log(data);
  return data;
};
// number of Courses
export const getNumberOfCourses = async (teachersName: string) => {
  const { data } = await axios.get(
    `/API/teachers/get-number-of-courses/${teachersName}`
  );
  console.log(data);
  return data;
};
