import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Learning from "../../Components/My-Courses/Learning";
import MyCoursesNavBar from "../../Components/My-Courses/MyCoursesNavBar";
import Wishlist from "../../Components/My-Courses/Wishlist";

interface CoursesPageProps {
  page: string;
}

const MyCoursesPage = () => {
  const [page, setPage] = useState<string>();
  const [index, setIndex] = useState<number>(0);

  const { page: currentPage } = useParams(); // Renamed currentPage to page to match state variable



  useEffect(() => {
    if (currentPage) {
   
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
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage) {
   
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
