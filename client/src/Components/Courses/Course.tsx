import { useEffect } from "react";

export interface CourseProps {
    courseId: number,
    teacherId: number,
    courseName: string,
    teacherName: string,
    mainDescription: string,
    rating: number,
    numberOfRatings: number,
    numberOfStudents: number,
    lastUpdated: Date,
    language: { type: string, default: 'English' },
    subtitlesLanguage: { type: string, default: 'English' },
    fullPrice: number,
    discountPrice: number,
    secondDescriptions: [string],
    courseDuration: number,
    articlesNumber: number,
    downloadableResourcesNumber: number,
    courseContent: string,
    requirements: [string],
    fullDescription: string,
    course_img: string
}
const Course = ({ img, title, teacher, rating, price, tag, numberOfRatings }: { img: string, title: string, teacher: string, rating: number, price: number, tag: string, numberOfRatings: number }) => {
    useEffect(() => {
        const starColor = () => {
            const stars = document.querySelectorAll('.star');
            if (stars.length > 0) {
                stars.forEach((star, index) => {
                    debugger
                    if (index > 5) index = 0;
                    if (index + 1 <= rating) star.style.color = '#B4690E';
                })
            }
        };
        starColor();

        // Cleanup function to revoke the effects of starColor function
        return () => {
            const stars = document.querySelectorAll('.star');
            if (stars.length > 0) {
                stars.forEach((star) => {
                    star.style.color = ''; // Reset the color
                })
            }
        };
    }, [rating]); // Run the effect whenever the rating changes
    return (
        <div>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{teacher}</p>
            <p>{rating.toFixed(2)}&nbsp;
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>&nbsp;({numberOfRatings})</p>
            <p>${Math.round(Number(price))}</p>
            <p>{tag}</p>
        </div>

    )


}


export default Course