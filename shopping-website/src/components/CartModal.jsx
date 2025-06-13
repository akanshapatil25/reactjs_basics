import React from 'react';
import { shopping_cart } from '../utils/images';
import { formatPrice } from '../utils/helpers';

const CartModal = ({ carts }) => {
  return (
    <div className="absolute right-[-10px] top-[calc(100%+10px)] bg-white w-[360px] h-[460px] p-7 border border-black/10 shadow-[0_7px_29px_rgba(100,100,111,0.25)] overflow-y-scroll z-[99] opacity-0 invisible transition-all duration-300">
      <h5 className="text-center text-[15px] font-semibold font-manrope text-black/60 mb-3">
        Recently Added Products
      </h5>

      {carts?.length > 0 ? (
        <div className="grid">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="grid grid-cols-[64px_auto_65px] gap-x-3 items-center border-b border-black/5 font-manrope py-2"
            >
              <div className="w-[60px] h-[60px]">
                <img
                  src={cart?.thumbnail}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-[13px] text-black/85 capitalize">
                {cart?.title}
              </div>
              <div className="text-orange-500 text-[14px] font-semibold">
                {formatPrice(cart?.discountedPrice)}
              </div>
            </div>
          ))}

          <div className="text-center bg-orange-500 text-white text-[15px] font-manrope w-[200px] py-1 px-4 mt-7 ml-auto rounded">
            view my shopping cart
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={shopping_cart} alt="" className="w-[120px] mt-8" />
          <h6 className="text-gray-700 font-normal mt-6">No products yet</h6>
        </div>
      )}
    </div>
  );
};

export default CartModal;
