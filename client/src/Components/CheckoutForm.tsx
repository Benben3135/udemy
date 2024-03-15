import {
  PaymentElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/styles/stripeStyle.css";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }


    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

   
  }, [stripe, navigate]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:5173/completion",
        },  
    })
    console.log(error)
  };


  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={{layout:"tabs"}}/>
     <button id="submit">
      <span id="button-text">Pay please!</span>
     </button>
    </form>
  );
}
