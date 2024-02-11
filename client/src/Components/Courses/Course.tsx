
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
    language: string,
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
const Course = ({ img, title, teacher, rating, price, tag, numberOfRatings, id }: { img: string, title: string, teacher: string, rating: number, price: number, tag: string, numberOfRatings: number, id: number }) => {
    const starColor = () => {
        const stars = document.querySelectorAll('.star') as NodeListOf<HTMLElement>;;
        if (stars.length > 0) {
            stars.forEach((star, index) => {

                if (index >= 5) index = 0;
                if (index + 1 <= rating) star.style.color = '#B4690E';
            })
        }
    };
    starColor();
    return (
        <div>
            <a href={`/course/${id}`}>
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
            </a>
        </div>

    )


}


export default Course