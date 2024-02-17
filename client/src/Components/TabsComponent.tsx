import React, { useEffect, useState } from "react";
import { get5CoursesByCategory } from "../../api/coursesApi";
import Course, { CourseProps } from "./Courses/Course";

interface TabsComponentProps {
  categories: string[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [coursesByCategory, setCoursesByCategory] = useState<CourseProps[]>();
  const [showLearnMoreButton, setShowLearnMoreButton] =
    useState<boolean>(false);


  // הגדרה של הקטגוריה שתוצג באופן דיפולטי
  useEffect(() => {
    setSelectedCategory("Development");
    const initialCoursesByCategories = async () => {
      setCoursesByCategory(await get5CoursesByCategory("Development"));
      console.log(coursesByCategory)
    }

    initialCoursesByCategories();
    setShowLearnMoreButton(true); // הצגת כפתור "גלו עוד" בתחילה
  }, []);

  const handleTabClick = async (category: string) => {
    setSelectedCategory(category);
    const courses = await get5CoursesByCategory(category);
    setCoursesByCategory(courses);
    setShowLearnMoreButton(true); // הצגת כפתור "גלו עוד" בעת בחירת קטגוריה חדשה
  };

  return (
    <div className="font-custom max-w-[82rem] mx-auto h-fit  ">
      <h1 className=" font-bold text-4xl leading-[1.7rem] tracking-normal text-Udemygray-500 font-custom mt-16 mb-5">
        A broad selection of courses
      </h1>
      <p className="text-lg font-600 mb-5">
        Choose from over 210,000 online video courses with new additions
        published every month
      </p>
      <div>
        {/* יצירת טאבים */}
        <div className="flex">
          {categories.map((category) => (
            <div
              key={category}
              className={`cursor-pointer px-4 ${selectedCategory === category
                ? "text-Udemygray-500  font-bold"
                : "text-Udemygray-300 font-bold"
                }`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* הצגת התוכן הנבחר */}
        {selectedCategory && (
          <div>
            {/* כאן תוכל להציג את התוכן הנבחר עבור הקטגוריה selectedCategory */}
            {/* לדוגמה, תוכל להשתמש ב-switch או if פשוט */}
            {(() => {
              switch (selectedCategory) {
                case "Development":
                  return (
                    <div className=" border  border-Udemygray-200  pl-10 pr-10 mr-11 mt-2 mb-5">
                      <h1 className=" font-bold text-2xl   text-Udemygray-500 font-700 mt-6 mb-5">
                        Expand your career opportunities with Python
                      </h1>
                      <p className="mr-72 mb-6">
                        Take one of Udemy’s range of Python courses and learn
                        how to code using this incredibly useful language. Its
                        simple syntax and readability makes Python perfect for
                        Flask, Django, data science, and machine learning.
                        You’ll learn how to build everything from games to sites
                        to apps. Choose from a range of courses that will appeal
                        to both beginners and advanced developers alike.
                      </p>

                      <button className="border p-2 border-gray-500 font-bold text-Udemygray-500 text-sm mb-12 ">
                        Explore {selectedCategory}{" "}
                      </button>
                      <div className=" flex flex-row justify-center items-center w-full h-fit mt-6">
                        <div className=" flex flex-col w-fit h-full justify-start items-start">
                          <div className=" flex gap-5 p-5 h-[21rem] ">
                            {coursesByCategory && coursesByCategory.map((course: CourseProps, index: number) => (
                              <Course
                                key={index}
                                img={course.course_img}
                                title={course.courseName}
                                teacher={course.teacherName}
                                rating={course.rating}
                                price={course.fullPrice}
                                tag={course.category}
                                numberOfRatings={course.numberOfRatings}
                                id={course.courseId}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "Business":
                  return (
                    <div className=" border  border-Udemygray-200  pl-10 pr-10 mr-11 mt-2 mb-5">
                      <h1 className=" font-bold text-2xl   text-Udemygray-500 font-700 mt-6 mb-5">
                        Analyze and visualize data with Excel
                      </h1>
                      <p className="mr-72 mb-6">
                        Take a Microsoft Excel course from Udemy, and learn how
                        to use this industry-standard software. Real-world
                        experts will show you the basics like how to organize
                        data into sheets, rows and columns, and advanced
                        techniques like creating complex dynamic formulas. Both
                        small businesses and large companies use Excel to
                      </p>

                      <button className="border p-2 border-gray-500 font-bold text-Udemygray-500 text-sm mb-12 ">
                        Explore {selectedCategory}{" "}
                      </button>
                      <div className=" flex flex-row justify-center items-center w-full h-fit mt-6">
                        <div className=" flex flex-col w-fit h-full justify-start items-start">
                          <div className=" flex gap-5 p-5 h-[21rem] ">
                            {coursesByCategory && coursesByCategory.map((course: CourseProps, index: number) => (
                              <Course
                                key={index}
                                img={course.course_img}
                                title={course.courseName}
                                teacher={course.teacherName}
                                rating={course.rating}
                                price={course.fullPrice}
                                tag={course.category}
                                numberOfRatings={course.numberOfRatings}
                                id={course.courseId}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "Design":
                  return (
                    <div className=" border  border-Udemygray-200  pl-10 pr-10 mr-11 mt-2 mb-5">
                      <h1 className=" font-bold text-2xl   text-Udemygray-500 font-700 mt-6 mb-5">
                        Build websites and applications with Web Development{" "}
                      </h1>
                      <p className="mr-72 mb-6">
                        The world of web development is as wide as the internet
                        itself. Much of our social and vocational lives play out
                        on the internet, which prompts new industries aimed at
                        creating, managing, and debugging the websites and
                        applications that we increasingly rely on.
                      </p>

                      <button className="border p-2 border-gray-500 font-bold text-Udemygray-500 text-sm mb-12 ">
                        Explore {selectedCategory}{" "}
                      </button>
                      <div className=" flex flex-row justify-center items-center w-full h-fit mt-6">
                        <div className=" flex flex-col w-fit h-full justify-start items-start">
                          <div className=" flex gap-5 p-5 h-[21rem] ">
                            {coursesByCategory && coursesByCategory.map((course: CourseProps, index: number) => (
                              <Course
                                key={index}
                                img={course.course_img}
                                title={course.courseName}
                                teacher={course.teacherName}
                                rating={course.rating}
                                price={course.fullPrice}
                                tag={course.category}
                                numberOfRatings={course.numberOfRatings}
                                id={course.courseId}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "Marketing":
                  return (
                    <div className=" border  border-Udemygray-200  pl-10 pr-10 mr-11 mt-2 mb-5">
                      <h1 className=" font-bold text-2xl   text-Udemygray-500 font-700 mt-6 mb-5">
                        Grow your software development skills with JavaScript{" "}
                      </h1>
                      <p className="mr-72 mb-6">
                        JavaScript is a text-based computer programming language
                        used to make dynamic web pages. A must-learn for
                        aspiring web developers or programmers, JavaScript can
                        be used for features like image carousels, displaying
                        countdowns and timers, and playing media on a webpage.
                        With JavaScript online classes, you can learn to build
                      </p>

                      <button className="border p-2 border-gray-500 font-bold text-Udemygray-500 text-sm mb-12 ">
                        Explore {selectedCategory}{" "}
                      </button>
                      <div className=" flex flex-row justify-center items-center w-full h-fit mt-6">
                        <div className=" flex flex-col w-fit h-full justify-start items-start">
                          <div className=" flex gap-5 p-5 h-[21rem] ">
                            {coursesByCategory && coursesByCategory.map((course: CourseProps, index: number) => (
                              <Course
                                key={index}
                                img={course.course_img}
                                title={course.courseName}
                                teacher={course.teacherName}
                                rating={course.rating}
                                price={course.fullPrice}
                                tag={course.category}
                                numberOfRatings={course.numberOfRatings}
                                id={course.courseId}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "Lifestyle":
                  return (
                    <div className=" border  border-Udemygray-200  pl-10 pr-10 mr-11 mt-2 mb-5">
                      <h1 className=" font-bold text-2xl   text-Udemygray-500 font-700 mt-6 mb-5">
                        Lead data-driven decisions with Data Science
                      </h1>
                      <p className="mr-72 mb-6">
                        Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics
                      </p>

                      <button className="border p-2 border-gray-500 font-bold text-Udemygray-500 text-sm mb-12 ">
                        Explore {selectedCategory}{" "}
                      </button>
                      <div className=" flex flex-row justify-center items-center w-full h-fit mt-6">
                        <div className=" flex flex-col w-fit h-full justify-start items-start">
                          <div className=" flex gap-5 p-5 h-[21rem] ">
                            {coursesByCategory && coursesByCategory.map((course: CourseProps, index: number) => (
                              <Course
                                key={index}
                                img={course.course_img}
                                title={course.courseName}
                                teacher={course.teacherName}
                                rating={course.rating}
                                price={course.fullPrice}
                                tag={course.category}
                                numberOfRatings={course.numberOfRatings}
                                id={course.courseId}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "Finance & Accounting":
                  return (
                    <div className=" border  border-Udemygray-200  pl-10 pr-10 mr-11 mt-2 mb-5">
                      <h1 className=" font-bold text-2xl   text-Udemygray-500 font-700 mt-6 mb-5">
                        Become an expert in cloud computing with AWS
                        Certification
                      </h1>
                      <p className="mr-72 mb-6">
                        Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more
                      </p>

                      <button className="border p-2 border-gray-500 font-bold text-Udemygray-500 text-sm mb-12 ">
                        Explore {selectedCategory}{" "}
                      </button>
                      <div className=" flex flex-row justify-center items-center w-full h-fit mt-6">
                        <div className=" flex flex-col w-fit h-full justify-start items-start">
                          <div className=" flex gap-5 p-5 h-[21rem] ">
                            {coursesByCategory && coursesByCategory.map((course: CourseProps, index: number) => (
                              <Course
                                key={index}
                                img={course.course_img}
                                title={course.courseName}
                                teacher={course.teacherName}
                                rating={course.rating}
                                price={course.fullPrice}
                                tag={course.category}
                                numberOfRatings={course.numberOfRatings}
                                id={course.courseId}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "Music":
                  return (
                    <div className=" border  border-Udemygray-200  pl-10 pr-10 mr-11 mt-2 mb-5">
                      <h1 className=" font-bold text-2xl   text-Udemygray-500 font-700 mt-6 mb-5">
                        Expand your creative skillset with Drawing
                      </h1>
                      <p className="mr-72 mb-6">
                        Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going.


                      </p>

                      <button className="border p-2 border-gray-500 font-bold text-Udemygray-500 text-sm mb-12 ">
                        Explore {selectedCategory}{" "}
                      </button>
                      <div className=" flex flex-row justify-center items-center w-full h-fit mt-6">
                        <div className=" flex flex-col w-fit h-full justify-start items-start">
                          <div className=" flex gap-5 p-5 h-[21rem] ">
                            {coursesByCategory && coursesByCategory.map((course: CourseProps, index: number) => (
                              <Course
                                key={index}
                                img={course.course_img}
                                title={course.courseName}
                                teacher={course.teacherName}
                                rating={course.rating}
                                price={course.fullPrice}
                                tag={course.category}
                                numberOfRatings={course.numberOfRatings}
                                id={course.courseId}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                default:
                  return (
                    <div className="h-25vh ">תוכן עבור {selectedCategory}</div>
                  );
              }
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;
