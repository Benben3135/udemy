import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <>
      <h1 className=" mx-auto h-fit text-[1.5rem] bg-Udemygray-100 pl-28 pt-10 font-[700]">
        How learners like you are achieving their goals
      </h1>
      <div className="bg-Udemygray-100 ">
        <div className="  pt-4 rounded-md overflow-hidden max-w-[82rem] mx-auto h-fit  ">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 25}vh)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full pr-4 border bg-white ml-3 mr-3 ${
                  index === testimonials.length - 1 ? "" : "mr-1"
                }`}
                style={{ flex: "0 0 23rem", height: "100%" }}
              >
                <div
                  className="mb-4 bg-white pt-5 pr-6 pl-6 pb-5"
                  style={{ height: "25vh" }}
                >
                  <img
                    src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                    alt=""
                    width="17.78"
                    height="16"
                    loading="lazy"
                    className="mb-2 bg-white"
                  />
                  <span style={{ height: "100%" }}>{testimonial.text}</span>
                </div>
                <div
                  className="text-sm font-600 pl-5 pb-5"
                  style={{ height: "100%" }}
                >
                  <p>{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" inset-y-30 bottom-50 flex items-center justify-between py-10 ">
            <button
              onClick={prevTestimonial}
              className={`p-2 text-white rounded-full  ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gray-950 p-3.5 hover:bg-gray-900 shadow-sm focus:outline-none"
              }`}
            >
              {<ChevronLeft />}
            </button>
            {showNext && (
              <button
                onClick={nextTestimonial}
                className="p-3.5 text-white rounded-full bg-gray-950 hover:bg-gray-900 shadow-sm focus:outline-none"
              >
                {<ChevronRight />}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSlider;
