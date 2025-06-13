import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shopping_cart } from '../utils/images';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
  getCartTotal,
} from '../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className="container my-10">
        <div className="min-h-[60vh] flex flex-col items-center justify-center font-manrope">
          <img src={shopping_cart} alt="Empty cart" className="w-[120px] mb-4" />
          <span className="font-semibold text-sm text-gray-500">
            Your shopping cart is empty.
          </span>
          <Link
            to="/"
            className="mt-6 px-10 py-3 border border-orange-500 text-white bg-orange-500 font-medium transition hover:bg-transparent hover:text-orange-500"
          >
            Go Shopping Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 overflow-x-auto pt-8 min-h-[85vh]">
      <div className="min-w-[1000px] mx-auto px-4">
        {/* Table Header */}
        <div className="bg-white rounded shadow-sm mb-6 px-6 py-3">
          <div className="grid grid-cols-[1fr_4fr_2fr_2fr_2fr_2fr] items-center text-sm font-semibold text-gray-600">
            <div>S.N.</div>
            <div>Product</div>
            <div>Unit Price</div>
            <div>Quantity</div>
            <div>Total Price</div>
            <div>Actions</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="bg-white rounded shadow-sm text-sm text-gray-600 px-6">
          {carts.map((cart, idx) => (
            <div
              key={cart?.id}
              className="grid grid-cols-[1fr_4fr_2fr_2fr_2fr_2fr] items-center py-4 border-b border-gray-100"
            >
              <div>{idx + 1}</div>
              <div>{cart?.title}</div>
              <div>{formatPrice(cart?.discountedPrice)}</div>
              <div>
                <div className="flex items-center space-x-1">
                  <button
                    className="w-7 h-7 flex items-center justify-center border text-xs"
                    onClick={() =>
                      dispatch(toggleCartQty({ id: cart?.id, type: 'DEC' }))
                    }
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="w-9 h-7 flex items-center justify-center border-t border-b">
                    {cart?.quantity}
                  </div>
                  <button
                    className="w-7 h-7 flex items-center justify-center border text-xs"
                    onClick={() =>
                      dispatch(toggleCartQty({ id: cart?.id, type: 'INC' }))
                    }
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="text-orange-500 font-medium">
                {formatPrice(cart?.totalPrice)}
              </div>
              <div>
                <button
                  onClick={() => dispatch(removeFromCart(cart?.id))}
                  className="text-sm text-gray-700 hover:text-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table Footer */}
        <div className="bg-white rounded shadow-sm mt-8 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <button
            className="text-red-600 border border-red-600 px-4 py-2 text-sm uppercase font-medium hover:bg-red-600 hover:text-white transition"
            onClick={() => dispatch(clearCart())}
          >
            <i className="fas fa-trash mr-2"></i> Clear Cart
          </button>

          <div className="flex flex-col md:items-end">
            <div className="flex items-center space-x-2 font-semibold">
              <span>Total ({itemsCount}) items:</span>
              <span className="text-orange-500 text-xl">
                {formatPrice(totalAmount)}
              </span>
            </div>
            <button className="mt-2 bg-orange-500 text-white px-6 py-2 text-base font-medium hover:bg-orange-600 transition">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
