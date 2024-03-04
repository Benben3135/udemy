import axios from "axios";

export const addCourseToCart = async (courseId: number, userId: string) => {
  try {
    const { data } = await axios.post("/cart", { courseId, userId });
    console.log(data);
  } catch (error) {
    console.error("Error occurred while adding course to cart:", error);
  }
};
