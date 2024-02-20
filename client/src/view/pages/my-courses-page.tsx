import React, { useEffect, useState } from "react";
import Learning from "../../Components/My-Courses/Learning";
import MyCoursesNavBar from "../../Components/My-Courses/MyCoursesNavBar";
import Wishlist from "../../Components/My-Courses/Wishlist";
import { useParams } from "react-router-dom";

interface CoursesPageProps {
  page: string;
}

const MyCoursesPage = () => {
  const [page, setPage] = useState<string>();
  const [index, setIndex] = useState<number>(0);

  const { page: currentPage } = useParams(); // Renamed currentPage to page to match state variable



  useEffect(() => {
    if (currentPage) {
      debugger;
      setPage(currentPage);
      if (currentPage === "learning") {
        setIndex(0);
      }
      if (currentPage === "myLists") {
        setIndex(1);
      }
      if (currentPage === "wishlist") {
        setIndex(2);
      }
      if (currentPage === "tools") {
        setIndex(3);
      }
      console.log("Your current page:", currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage) {
      debugger;
      setPage(currentPage);
      if (currentPage === "learning") {
        setIndex(0);
      }
      if (currentPage === "myLists") {
        setIndex(1);
      }
      if (currentPage === "wishlist") {
        setIndex(2);
      }
      if (currentPage === "tools") {
        setIndex(3);
      }
      console.log("Your current page:", currentPage);
    }
  }, []);

  return (
    <>
      {page && (
        <div className=" h-fit bg-white flex flex-col justify-start items-center">
          <MyCoursesNavBar index={index} />
          {page === "learning" && <Learning />}
          {page === "myLists" && <Learning />}
          {page === "wishlist" && <Wishlist />}
          {page === "tools" && <Learning />}
        </div>
      )}
    </>
  );
};

export default MyCoursesPage;
