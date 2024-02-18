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
      `/API/courses/getAllCoursesByCategory/${selectedCategory}`
      //                                       ^ Add a forward slash here
    );
    console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};

export const getAllCoursesByInstructor = async (instructorName: string) => {
  try {
    const response = await axios.get(
      `/API/courses/getAllCoursesByInstructor/${instructorName}`
    );
    // console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};
export const getBestSellerCourses = async () => {
  try {
    const {data} = await axios.get(
      `/API/courses/getBestSellerCourses`
    );
      return data;
  } catch (error) {
    console.error(error);
  }
};

export const addCourseWishlist = async (courseID:number, uid:string) => {
    const {data} = await axios.post("/API/wishlist", {courseID,uid});
    return(data)
}

