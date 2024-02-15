import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../api/userApi/usersAPI';
import { setIsTeacherFalse, setIsTeacherTrue } from '../features/user/userSlice';
import { auth } from '../firebase';
import { User } from '../util/interfaces';
import { getAllCoursesByInstructor } from '../../api/coursesApi';
import { CourseProps } from '../Components/Courses/Course';
import Courses from '../Components/Courses/Courses';

const TeacherPage = () => {
    const [user, setUser] = useState<User>();
    const [courses, setCourses] = useState<CourseProps[]>();
    const dispatch = useDispatch();
    useEffect(() => {
        const user = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatchUser(user.uid)
            }
        });

    }, []);
    useEffect(() => {
        const fetchCourses = dispathCourses();
        // setCourses(fetchCourses);
        console.log(courses)

    }, [user]);
    const dispathCourses = async () => {
        const result = await getAllCoursesByInstructor(user!.displayName)
        setCourses(result);
    }

    const dispatchUser = async (uid: string) => {
        const result = await getUser(uid);
        setUser(result.user);

        const teacher = result.user.isTeacher

        if (teacher) {
            dispatch(setIsTeacherTrue());
        }
        else {
            dispatch(setIsTeacherFalse());
        }
    }


    // const getaddNameSRT = (name: string) => {
    //     const words = name.split(" ");
    //     const initials = words.map((word) => word.charAt(0)).join("");
    //     const initialsUpper = initials.toUpperCase();
    //     return initialsUpper;
    // };

    //     const checkSignInTime = (time: string) => {
    //         const givenDate = new Date(time);
    //         const currentTime = new Date();
    //         // Calculate the difference between the two timestamps in milliseconds
    //         const differenceInMilliseconds =
    //             currentTime.getTime() - givenDate.getTime();
    //         const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
    //         console.log("Difference in minutes:", differenceInMinutes);
    //         const recentThreshold = 480;
    //         // Return true if the sign-in occurred within the threshold, false otherwise
    //         console.log(
    //             "are the difference good?",
    //             differenceInMinutes <= recentThreshold
    //         );
    //         return differenceInMinutes <= recentThreshold;
    //     };
    return (
        <div style={{ display: "flex", gap: "25px", maxWidth: "91.2rem", margin: "0 auto", width: "912px", marginTop: "4.8rem" }}>
            <div className='instructor-data' style={{ maxWidth: "70%" }} >
                <title>INSTRUCTOR</title>
                <h2>{user?.displayName}</h2>
                <p>{user?.headline}</p>
                <div>
                    <div>
                        <p>Total students</p>
                        <p>number of students</p>
                    </div>
                    <div>
                        <p>Reviews</p>
                        <p>number of Reviews</p>
                    </div>
                </div>
                <h2>About me</h2>
                <p>{user?.bio}</p>
                <div>
                    {/* <h3>My courses (NUMBER OF COURSES)</h3>
                    <p>courses!</p> */}
                    {courses && courses.length > 0 ? <Courses type={courses} componentsTitle='My courses (7)'></Courses> : ""}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }} >
                <img src={user?.photoURL} alt="" style={{ borderRadius: "100%", width: "200px", height: "200px" }} />
                <div className='instructor-profile--social-links' style={{ display: "flex", gap: "0.8rem", alignItems: "center", justifyContent: "center", padding: "15px", flexDirection: "column" }} >
                    <a href={user?.facebook} style={{ minWidth: "200px", height: "48px", display: "flex", gap: "5px", justifyContent: "center", alignItems: "center", border: "1px solid black", padding: "0 1.2rem" }}>

                        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 310 310" xmlSpace="preserve">
                            <g id="XMLID_834_">
                                <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
		c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                            </g>
                        </svg>
                        facebook</a>
                    <a href={user?.linkedin} style={{ minWidth: "200px", height: "48px", display: "flex", gap: "5px", justifyContent: "center", alignItems: "center", border: "1px solid black", padding: "0 1.2rem" }}>

                        <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px"
                            height="20px" viewBox="0 0 512 512" xmlSpace="preserve">
                            <g id="7935ec95c421cee6d86eb22ecd125aef">
                                <path style={{ display: "inline", fillRule: "evenodd", clipRule: "evenodd" }} d="M116.504,500.219V170.654H6.975v329.564H116.504
		L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941
		C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219
		c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533
		c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531
		c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z">
                                </path>
                            </g>
                        </svg>
                        linkedin</a>
                    <a href={user?.twitter} style={{ minWidth: "200px", height: "48px", display: "flex", gap: "5px", justifyContent: "center", alignItems: "center", border: "1px solid black", padding: "0 1.2rem" }}>
                        <svg width="20px" height="20px" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>twitter [#154]</title>
                            <desc>Created with Sketch.</desc>
                            <defs>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        twitter</a>
                </div>
            </div>

        </div >
    )
}

export default TeacherPage