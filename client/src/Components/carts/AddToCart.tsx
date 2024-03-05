// AddToCart.tsx
import React from 'react';

interface AddToCartProps {
  handleAddToCart: () => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ handleAddToCart }) => {
  return (
    <div>
      <button className='text-white font-bold' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
