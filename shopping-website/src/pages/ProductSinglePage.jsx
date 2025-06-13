import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from '../store/productSlice';
import { STATUS } from '../utils/status';
import Loader from '../components/Loader';
import { formatPrice } from '../utils/helpers';
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from '../store/cartSlice';
import CartMessage from '../components/CartMessage';

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const cartMessageStatus = useSelector(getCartMessageStatus);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (cartMessageStatus) {
      const timer = setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [cartMessageStatus, dispatch]);

  if (productSingleStatus === STATUS.LOADING) return <Loader />;

  const discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);

  const increaseQty = () => {
    setQuantity((prev) => (prev + 1 > product?.stock ? product?.stock : prev + 1));
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  const addToCartHandler = (product) => {
    const totalPrice = quantity * discountedPrice;
    dispatch(addToCart({ ...product, quantity, totalPrice, discountedPrice }));
    dispatch(setCartMessageOn(true));
  };

  return (
    <main className="bg-gray-100 py-10 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded shadow">
          {/* Left - Product Images */}
          <div>
            <div className="h-[380px] overflow-hidden mb-4">
              <img
                src={product?.images?.[0]}
                alt={product?.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex space-x-3 overflow-x-auto scrollbar-thin">
              {product?.images?.slice(1, 5).map((img, i) => (
                <div
                  key={i}
                  className="w-[100px] h-[100px] border-2 border-white hover:border-orange-500 transition rounded"
                >
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-90 transition" />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6 font-manrope">
            <h2 className="text-xl font-semibold pb-2 border-b border-gray-200">{product?.title}</h2>
            <p className="text-gray-600">{product?.description}</p>

            <div className="flex items-center space-x-4 text-sm">
              <span className="text-orange-500 font-semibold">Rating:</span>
              <span>{product?.rating}</span>
              <span className="h-4 w-px bg-gray-300"></span>
              <span className="text-orange-500 font-semibold">Brand:</span>
              <span>{product?.brand}</span>
              <span className="h-4 w-px bg-gray-300"></span>
              <span className="text-orange-500 font-semibold">Category:</span>
              <span className="capitalize">{product?.category?.replace('-', ' ')}</span>
            </div>

            {/* Price Section */}
            <div className="bg-gray-50 p-5 rounded space-y-2">
              <div className="flex items-center space-x-3">
                <span className="line-through text-gray-500">
                  {formatPrice(product?.price)}
                </span>
                <span className="text-sm text-gray-600">Inclusive of all taxes</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-orange-500">
                  {formatPrice(discountedPrice)}
                </span>
                <span className="text-sm bg-orange-500 text-white font-semibold px-2 py-1 rounded">
                  {product?.discountPercentage}% OFF
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-3">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded">
                <button
                  className="w-7 h-7 text-sm border-r"
                  onClick={decreaseQty}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <div className="w-10 h-7 flex items-center justify-center border-x">{quantity}</div>
                <button
                  className="w-7 h-7 text-sm border-l"
                  onClick={increaseQty}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              {product?.stock === 0 && (
                <span className="text-xs uppercase bg-red-600 text-white px-2 py-1 rounded">
                  Out of stock
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => addToCartHandler(product)}
                className="flex items-center border border-orange-500 bg-orange-100 text-orange-600 px-5 py-2 rounded hover:opacity-90"
              >
                <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
              </button>
              <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {cartMessageStatus && <CartMessage />}
    </main>
  );
};

export default ProductSinglePage;
