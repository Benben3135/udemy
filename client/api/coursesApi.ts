import axios from "axios";
export const getCoursesByMostViewing = async () => {};
export const getCoursesByRecentlySearched = async () => {
  try {
    const recentlySearched = localStorage.getItem("recentlySearched");
    if (!recentlySearched)
      throw new Error("No recently searched in local storeage");
    const response = await axios.get(
      `/API/courses/get5CoursesByRecentlySearched/${recentlySearched}`
      //   {
      //     params: {
      //       recentlySearched: recentlySearched,
      //     },
      //   }
    );
    console.log(response.data.courses);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};
