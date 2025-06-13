import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarOn } from '../store/sidebarSlice';
import { getAllCategories } from '../store/categorySlice';
import { getAllCarts, getCartItemsCount, getCartTotal } from '../store/cartSlice';
import CartModal from './CartModal';

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <nav className="py-3 bg-white shadow">
      <div className="container mx-auto px-4 flex items-center justify-between flex-wrap">
        {/* Brand and Sidebar Toggler */}
        <div className="flex items-center">
          <button
            type="button"
            className="text-orange-500 mr-3 mt-1 hover:opacity-90 transition"
            onClick={() => dispatch(setSidebarOn())}
          >
            <i className="fas fa-bars text-lg"></i>
          </button>
          <Link to="/" className="flex items-center text-2xl font-bold text-orange-500">
            <i className="fa-solid fa-bag-shopping mr-2"></i>
            <span>
              <span className="font-extrabold">Snap</span>Up.
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center ml-8 bg-white p-1 rounded shadow-md w-full sm:w-auto max-w-md">
          <input
            type="text"
            className="w-full px-4 py-2 text-sm text-gray-800 placeholder:text-gray-400 placeholder:text-sm focus:outline-none"
            placeholder="Search your preferred items here"
            onChange={handleSearchTerm}
          />
          <Link
            to={`search/${searchTerm}`}
            className="bg-orange-500 w-14 h-8 flex items-center justify-center text-white"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>

        {/* Category Links */}
      {categories.slice(0, 8).map((category, idx) => (
  <li className="mr-4 whitespace-nowrap text-gray-500" key={idx}>
    <Link
      to={`category/${category.slug}`}
      className="capitalize text-gray-500 hover:opacity-95 transition"
    >
      {category.name.replace("-", " ")}
    </Link>
  </li>
))}


        {/* Cart */}
        <div className="relative ml-8 text-2xl">
          <Link to="/cart" className="relative group">
            <i className="fa-solid fa-cart-shopping text-orange-500"></i>
            <div className="absolute top-[-10px] right-[-8px] bg-white text-orange-500 text-sm font-semibold w-5 h-5 rounded-full flex items-center justify-center">
             <h4 className='mr-1'>Cart</h4> {itemsCount}
            </div>
            <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <CartModal carts={carts} />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
