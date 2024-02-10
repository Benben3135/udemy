import React, { useState } from "react";

interface Testimonial {
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    text: "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    author: "Will A",
  },
  {
    text: "This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys :)",
    author: "Ron F",
  },
  {
    text: "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.",
    author: "Phillip W",
  },
  {
    text: "I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course.",
    author: "Surya M",
  },
];

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showNext, setShowNext] = useState<boolean>(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < testimonials.length - 1) {
        setShowNext(true);
        return prevIndex + 1;
      } else {
        setShowNext(false);
        return prevIndex;
      }
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    setShowNext(true);
  };

  return (
    <div className="bg-Udemygray-100 ">
      <div className="relative  p-4 rounded-md overflow-hidden max-w-[82rem] mx-auto h-fit ">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full pr-4 border bg-white ml-3 mr-3 ${
                index === testimonials.length - 1 ? "" : "mr-4"
              }h-[100px]`}
              style={{ flex: "0 0 23rem" }}
            >
              <div className="mb-4 bg-white pt-5 pr-3 pl-3 pb-5">
                <img
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  alt=""
                  width="17.78"
                  height="16"
                  loading="lazy"
                  className="mb-2 bg-white"
                />
                <span>{testimonial.text}</span>
              </div>
              <div className=" relative text-left">
                <span>{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
        <div className=" inset-y-50 bottom-20 flex items-center justify-between px-2 ">
          <button
            onClick={prevTestimonial}
            className={`p-2 text-white rounded-full ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "bg-gray-500 hover:bg-gray-600 focus:outline-none"
            }`}
          >
            {"<"}
          </button>
          {showNext && (
            <button
              onClick={nextTestimonial}
              className="p-2 text-white rounded-full bg-gray-500 hover:bg-gray-600 focus:outline-none"
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
