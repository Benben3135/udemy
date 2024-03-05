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
