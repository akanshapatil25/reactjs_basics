import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../store/sidebarSlice';
import { fetchAsyncCategories, getAllCategories } from '../store/categorySlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-md p-8 z-[1000] transform transition-transform duration-300 ease-in-out ${
        isSidebarOn ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button */}
      <button
        type="button"
        className="absolute top-4 right-6 text-xl text-gray-700 hover:text-orange-500 transition"
        onClick={() => dispatch(setSidebarOff())}
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Sidebar Content */}
      <div className="mt-8">
        <h2 className="pb-4 text-[17px] uppercase font-semibold tracking-wide">
          All Categories
        </h2>
        <ul className="h-[calc(100vh-60px)] overflow-y-auto pr-2 space-y-2">
          {categories.map((category, idx) => (
            <li
              key={idx}
              onClick={() => dispatch(setSidebarOff())}
              className="pb-2 border-b border-black/10"
            >
              <Link
                to={`category/${category}`}
                className="block text-sm font-manrope tracking-wide capitalize transition hover:text-orange-500 hover:ml-2"
              >
                {String(category).replace("-", " ")}

              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
