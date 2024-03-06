import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

const CheckoutPage = () => {
 
  const [cart, setCart] = useState();

  return (
    <div>
      Checkout Page
    </div>
  );
};

export default CheckoutPage;
