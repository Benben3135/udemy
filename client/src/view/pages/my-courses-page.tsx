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

  const { page: currentPage } = useParams(); // Renamed currentPage to page to match state variable

  useEffect(() => {
    if (currentPage) {
      setPage(currentPage);
      console.log("Your current page:", currentPage);
    }
  }, [currentPage]);

  return (
    <>
      {page &&
        <div className=" h-fit bg-white flex flex-col justify-start items-center">
          <MyCoursesNavBar />
          {page === "learning" && <Learning />}
          {page === "myLists" && <Learning />}
          {page === "wishlist" && <Wishlist />}
          {page === "tools" && <Learning />}
        </div>
      }
    </>
  );
};

export default MyCoursesPage;
