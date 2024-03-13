import axios from "axios";

export const addCourseToCart = async (courseId: number, uid: string) => {
  try {
    const { data } = await axios.post("/API/cart", { courseId, uid });
    return data
  } catch (error) {
    console.error("Error occurred while adding course to cart:", error);
  }
};

export const getCartCourses = async (uid: string) => {
  try {
    const {data} = await axios.get(`/API/cart/${uid}`)
    return(data)
  } catch (error) {
    console.error("Error occurred while getCartCourses:", error)
  }
}


export const removeCourseFromCart = async (courseId: number, uid: string) => {
  try {
    const { data } = await axios.post("/API/cart/remove", { courseId, uid });
    return data

  } catch (error) {
    console.error("Error occurred while adding course to cart:", error);
  }
};

export const addPurchasedCourse = async (courseId: number, uid: string) => {
  try {
    const { data } = await axios.post("/API/purchased", { uid , courseId });
    return data

  } catch (error) {
    console.error("Error occurred while adding course to purchased:", error);

  }
}

export const getAllPurchasedCourses = async (uid: string) => {
  try {
    const { data } = await axios.get(`/API/purchased/${uid}`);
    return data
  } catch (error) {
    console.error("Error occurred while adding course to purchased:", error);

  }
}