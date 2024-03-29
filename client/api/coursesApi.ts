import axios from "axios";
export const getCoursesByMostViewing = async () => {
  try {
    const response = await axios.get(`/API/courses/get5CoursesByMostViewing`);
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};

export const getCoursesByMostRated = async () => {
  try {
    const response = await axios.get(`/API/courses/get5CoursesByMostRated`);
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
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};
export const getMostRecentCoursesByCategory = async (selectedCategory: string) => {
  try {
    const response = await axios.get(`/API/courses/getMostRecentCourses/${selectedCategory}`);
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
    return response.data.courses;
  } catch (error) {
    console.error(error);
  }
};
export const getBestSellerCourses = async () => {
  try {
    const { data } = await axios.get(
      `/API/courses/getBestSellerCourses`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addCourseWishlist = async (courseID: number, uid: string) => {
  const { data } = await axios.post("/API/wishlist", { courseID, uid });
  return (data)
}

export const getMostPopularCourse = async () => {
    try {
      const { data } = await axios.get(
        `/API/courses/getMostPopularCourse`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  export async function getCourseById(courseId: number) {
    try {
      const response = await fetch(`/API/courses/getCourseById/${courseId}`); 
      const data = await response.json();
  
      if (response.ok) {
        return data.course;
      } else {
        throw new Error(data.message || 'Failed to fetch course details');
      }
    } catch (error) {
      console.error('Error fetching course details:', error);
      throw error;
    }
  }
  
  export const addCourse = async (userUid:string, userName:string,name:string,mainDes:string,secondDescriptions:string[],price:number,disPrice:number,img:string,bio:string,category:string) => {
    try {
      const { data } = await axios.post(
        `/API/courses/addNewCourse` , {userUid,userName,name,mainDes,secondDescriptions,price,disPrice,img,bio,category}
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  export const getSearchedCoursesByName = async (search: string) => {
    try {
      const { data } = await axios.get(
        `/API/courses/getSearchedCoursesByName/${search}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  