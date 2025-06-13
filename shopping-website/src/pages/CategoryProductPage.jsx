import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
  getCategoryProductsStatus,
} from '../store/categorySlice';
import { STATUS } from '../utils/status';

const CategoryProductPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">
            See our{' '}
            <span className="capitalize text-orange-600">{category.replace('-', ' ')}</span>
          </h3>
        </div>

        {categoryProductsStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <ProductList products={categoryProducts} />
        )}
      </div>
    </div>
  );
};

export default CategoryProductPage;
