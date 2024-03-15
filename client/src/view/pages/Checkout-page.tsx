import LanguageIcon from "@mui/icons-material/Language";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartCourses } from "../../../api/carts/carts";
import { CourseProps } from "../../Components/Courses/Course";
import Loader from "../../Components/animations/Loader";
import { noFooter } from "../../features/user/footerSlice";
import { noNavbar } from "../../features/user/navbarSlice";
import { userSelector } from "../../features/user/userSlice";


const stripePromise = loadStripe(
  "pk_test_51Ob07vGPw5IknvcVtIUwKmD9eGipq3c6RvsO5jjDuWkUWVtBeTCEfYosk42VsZka5bZpvNZ0O9FKJ63CO8R5qTh900nqsKvmNq"
);

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRedux = useSelector(userSelector);
  const [cart, setCart] = useState<[CourseProps] | []>([]);
  const [dis, setDis] = useState<number>();
  const [full, setFull] = useState<number>();



  

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [cart]);




  useEffect(() => {
    dispatch(noNavbar());
    dispatch(noFooter());
  }, []);

  useEffect(() => {
    calculateFull();
  }, [cart]);

  useEffect(() => {
    cart
  },[cart])

  const calculateFull = () => {
    let price = 0;
    let fullPrice = 0;
    cart.forEach((item) => {
      price += item.discountPrice;
      fullPrice += item.fullPrice;
    });
    setDis(price);
    setFull(fullPrice);
  };

  useEffect(() => {
    getCoursesFromDB();
  }, [userRedux,cart]);


  const getCoursesFromDB = async () => {
    try {
      const courses = await getCartCourses(userRedux!.uid); // Use optional chaining to prevent errors if user is null
      setCart(courses.courses);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {

    const stripe = await stripePromise;

    try {

      const response = await fetch('http://localhost:4000/create-checkout-session', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json'

        },

        body: JSON.stringify({ items: cart })

      });

 

      const session = await response.json();

 

      // When the customer clicks on the button, redirect them to Checkout.

      const result = await stripe!.redirectToCheckout({

        sessionId: session.id,

      });
      console.log(result)

    } catch (error) {

      console.error(error)

    }

  };

  return (
    <div>
      <div className=" h-[4.6rem] w-full flex flex-row justify-between shadow-md z-10 relative">
        <div className=" w-[10rem] p-8 h-full flex flex-row justify-center items-center border-gray-300">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
          />
        </div>
        <div className=" w-fit h-full flex items-center justify-between px-4">
          <button
            onClick={() => navigate("/cart")}
            className=" text-Udemyblue-300 font-bold mr-4 hover:text-Udemyblue-400"
          >
            cancel
          </button>
        </div>
      </div>
      <div className=" h-screen w-screen flex flex-row z-0 relative">
        <div className="flex flex-row items-start justify-end min-h-screen h-fit w-1/2 bg-white">
          <div className="min-h-screen h-fit w-1/2 py-6 flex flex-col gap-4 items-start justify-start pr-6">
            <h1 className=" text-[2.2rem] text-gray-900 font-sans font-bold">
              Checkout
            </h1>
            <h2 className=" text-[1.6rem] font-bold">Billing address</h2>
            <div className=" h-fit w-1/2 flex flex-col items-center justify-center ">
              <div className="w-full flex flex-row justify-between items-center">
                <h1 className=" font-bold text-[0.8rem]">Country</h1>
                <h2 className="text-gray-500 text-[0.8rem]">Required</h2>
              </div>
              <div className=" w-full h-12 flex flex-row items-center justify-start mt-2 border border-black px-4">
                <LanguageIcon />
                <div className=" ml-4">Israel</div>
              </div>
            </div>
            <h3 className=" text-[0.7rem] text-gray-600">
              Udemy is required by law to collect applicable transaction taxes
              for purchases made in certain tax jurisdictions.
            </h3>

            <div className=" flex flex-col w-full h-fit justify-start items-start mt-4">
              <h1 className=" text-[1.6rem] font-bold text-slate-800">
                Order details
              </h1>
              <div className=" flex flex-col items-start justify-start gap-4 w-full h-fit">
                {cart.map((course) => (
                  <div
                    key={course.courseId}
                    className=" flex flex-row items-center justify-start gap-2 w-full h-fit pr-4"
                  >
                    <img
                      className=" w-8 h-8"
                      src={course.course_img}
                      alt={course.courseName}
                    />
                    <h2 className=" font-bold text-slate-800">
                      {course.courseName}
                    </h2>
                    <div className=" flex flex-1 flex-row items-center justify-end">
                      <h2 className=" text-gray-800 self-end text-[1rem]">
                        ${course.discountPrice}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {cart.length > 0 ?  (<div className=" h-full w-1/2 bg-Udemygray-100">
          <div className=" w-[18rem] h-[20rem] mt-[6rem] ml-14">
            <h1 className=" text-[1.6rem] font-bold text-slate-700">Summary</h1>
            <div className=" w-full flex flex-row justify-between items-center mt-4">
              <h3 className=" text-[0.9rem] text-gray-700">Original Price</h3>
              <h3 className=" text-[0.9rem] text-gray-700">
                ${full!.toFixed(2)}
              </h3>
            </div>
            <div className=" w-full h-[0.01rem] bg-gray-300 my-4"></div>
            <div className=" w-full flex flex-row justify-between items-center mt-4">
              <h3 className=" text-[1rem] font-bold">Total</h3>
              <h3 className=" text-[1rem] font-bold">${dis!.toFixed(2)}</h3>
            </div>
            <h2 className=" mt-6 text-[0.8rem] text-gray-500">
              By completing your purchase you agree to these <span className=" text-Udemyblue-300">Terms of Service</span>.
            </h2>
            <button  onClick={handleClick} className=" w-full h-16 bg-Udemypurple-300 hover:bg-Udemypurple-400 mt-2 text-white font-bold">Complete Checkout</button>
            <h2 className=" mt-2 text-[0.8rem] text-gray-500 w-full text-center">30-Day Money-Back Guarantee</h2>
          </div>
        </div>) : (
          <div className="ml-14 mt-20">
           <Loader height={10} width={10} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
