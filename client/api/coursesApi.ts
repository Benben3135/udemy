import axios from "axios";
export const getCoursesByMostViewing = async () => {
  try {
    const response = await axios.get(`/API/courses/get5CoursesByMostViewing`);
    console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};

export const getCoursesByMostRated = async () => {
  try {
    const response = await axios.get(`/API/courses/get5CoursesByMostRated`);
    console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};

export const getCoursesByRecentlySearched = async () => {
  try {
    const recentlySearched = localStorage.getItem("recentlySearched");
    if (!recentlySearched) return null;
    //   throw new Error("No recently searched in local storeage");
    const response = await axios.get(
      `/API/courses/get5CoursesByRecentlySearched/${recentlySearched}`
    );
    console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};
export const get5CoursesByCategory = async (selectedCategory: string) => {
  try {
    const response = await axios.get(
      `/API/courses/get5CoursesByCategory/${selectedCategory}`
    );
    console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};
export const getAllCoursesByCategory = async (selectedCategory: string) => {
  try {
    const response = await axios.get(
      `/API/courses/getAllCoursesByCategory${selectedCategory}`
    );
    console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};
