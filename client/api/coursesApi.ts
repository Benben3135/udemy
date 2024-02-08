import axios from "axios";
export const getCoursesByMostViewing = async () => {};
export const getCoursesByRecentlySearched = async () => {
  try {
    debugger;
    const recentlySearched = localStorage.getItem("recentlySearched");
    if (!recentlySearched)
      throw new Error("No recently searched in local storeage");
    const response = await axios.get(
      "http://localhost:4000/api/courses/getCoursesByRecentlySearched",
      {
        params: {
          recentlySearched: recentlySearched,
        },
      }
    );
    console.log(response);
    debugger;
  } catch (error) {
    console.error(error);
  }
};
