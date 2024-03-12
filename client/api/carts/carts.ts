import axios from "axios";

export const addCourseToCart = async (courseId: number, uid: string) => {
  try {
    console.log(uid)
    const { data } = await axios.post("/API/cart", { courseId, uid });
    console.log(data);
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
    console.log(uid)
    const { data } = await axios.post("/API/cart/remove", { courseId, uid });
    console.log(data);
  } catch (error) {
    console.error("Error occurred while adding course to cart:", error);
  }
};

export const addPurchasedCourse = async (courseId: number, uid: string) => {
  try {
    const { data } = await axios.post("/API/purchased", { uid , courseId });
    console.log(data);
  } catch (error) {
    console.error("Error occurred while adding course to purchased:", error);

  }
}

export const getAllPurchasedCourses = async (uid: string) => {
  try {
    const { data } = await axios.get(`/API/purchased/${uid}`);
    console.log("data from getAllPurchasedCourses")
    return data
  } catch (error) {
    console.error("Error occurred while adding course to purchased:", error);

  }
}