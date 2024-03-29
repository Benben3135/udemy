import axios from "axios";
export const getTeacher = async (teachersName: string) => {
  const { data } = await axios.get(
    `/API/teachers/get-teachers-names/${teachersName}`
  );
  return data.teacher;
};
// number of students
export const getNumberOfStudents = async (teachersName: string) => {
  const { data } = await axios.get(
    `/API/teachers/get-number-of-students/${teachersName}`
  );
  return data;
};

// number of Reviews
export const getNumberOfReviews = async (teachersName: string) => {
  const { data } = await axios.get(
    `/API/teachers/get-number-of-reviews/${teachersName}`
  );
  return data;
};
// number of Courses
export const getNumberOfCourses = async (teachersName: string) => {
  const { data } = await axios.get(
    `/API/teachers/get-number-of-courses/${teachersName}`
  );
  return data;
};

export const addNewTeacher = async (uid: string) => {
  const {data} = await axios.post(`/API/users/newTeacher/${uid}`)
  if(data){
    return true
  }
}
