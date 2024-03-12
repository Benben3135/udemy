import axios from "axios";

export const getUser = async (uid: string) => {
  const isTeacher = false;
  const { data } = await axios.get(`/API/users/${uid}`);
  return data;
};

export const sendNewImg = async (img: string, uid: string) => {
  const { data } = await axios.post("/API/users/changeIMG", { img, uid });
  return data;
};

export const checkImgDB = async (uid: string) => {
  const { data } = await axios.get(`API/users/${uid}`);
  if (data.user.photoURL) {
    const image = data.user.photoURL;
    return { ok: true, image };
  } else {
    return { ok: false };
  }
};

export const addUserInfo = async (
  uid: string,
  headline?: string,
  bio?: string,
  website?: string,
  twitter?: string,
  facebook?: string,
  linkedin?: string,
  youtube?: string
) => {
  const { data } = await axios.post("/API/users/add-info", {
    uid,
    headline,
    bio,
    website,
    twitter,
    facebook,
    linkedin,
    youtube,
  });
  return data;
};

export const getUserWishlist = async (uid: string) => {
  const { data } = await axios.get(`/API/wishlist/${uid}`);
  return data;
};

export const getUserWishlistCourses = async (uid: string) => {
  const { data } = await axios.get(`/API/wishlist/getCourses/${uid}`);
  return data;
};
