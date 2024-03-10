import React from 'react'
import { useLocation } from 'react-router-dom';

const CompletionPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Example: Accessing payment status query parameter
  const paymentStatus = searchParams.get("payment_status");
  return (
    <div>
      completed!
    </div>
  )
}

export default CompletionPage
