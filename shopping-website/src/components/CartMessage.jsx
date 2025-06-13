import React from 'react';
import { correct } from "../utils/images";

const CartMessage = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 p-8 rounded-md text-center">
      <div className="mb-7">
        <img
          src={correct}
          alt="Correct icon"
          className="w-11 h-11 mx-auto"
        />
      </div>
      <h6 className="text-white text-sm font-medium">
        An item has been added to your shopping cart
      </h6>
    </div>
  );
};

export default CartMessage;
