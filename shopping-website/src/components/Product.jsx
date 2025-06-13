import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Category Label */}
        <div className="absolute left-[-5px] top-6 bg-orange-500 text-white text-xs capitalize px-4 py-1 shadow-md z-10">
          {product?.category}
          <div className="absolute left-0 top-full -translate-y-1 w-0 h-0 border-y-[5px] border-y-transparent border-r-[5px] border-r-orange-500" />
        </div>

        {/* Product Image */}
        <div className="mb-3 pb-1 h-[250px] overflow-hidden rounded-t-lg">
          <img
            src={product?.images[0]}
            alt={product?.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="px-3 pb-5 text-center font-manrope opacity-80 text-sm">
          <div className="border-b border-gray-100 pb-2 mb-2">
            <span className="mr-1">Brand:</span>
            <span className="font-bold">{product?.brand}</span>
          </div>
          <div className="font-medium text-[14.5px] tracking-wide mb-2">
            {product?.title}
          </div>

          {/* Price Display */}
          <div className="flex items-center justify-center relative">
            <span className="line-through text-xs text-gray-500">
              {formatPrice(product?.price)}
            </span>
            <span className="mx-4 font-bold text-base text-black">
              {formatPrice(product?.discountedPrice)}
            </span>
            <span className="text-sm font-semibold text-orange-600 font-poppins">
              ({product?.discountedPercentage}% Off)
            </span>

            <div className="absolute top-[calc(100%+6px)] w-[60px] h-px bg-orange-100" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
