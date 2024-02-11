import { getCoursesByMostRated, getCoursesByMostViewing, getCoursesByRecentlySearched } from "../../../api/coursesApi";
import { CourseProps } from "../../Components/Courses/Course";
import Courses from "../../Components/Courses/Courses"
import Main from "../../Components/Main"
const coursesByMostViewing: CourseProps[] = await getCoursesByMostViewing();
const coursesByRecentlySearched: CourseProps[] = await getCoursesByRecentlySearched();
const coursesByMostRated: CourseProps[] = await getCoursesByMostRated();
const recentlySearched = localStorage.getItem("recentlySearched");

const MainPage = () => {
  return (
    <div className=" h-fit pb-16">
      <Main />
    </div>
  )
}

export default MainPage;
