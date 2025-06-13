import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { STATUS } from '../utils/status';
import Loader from '../components/Loader';
import ProductList from '../components/ProductList';
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
  getSearchProductsStatus,
  clearSearch,
} from '../store/searchSlice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [dispatch, searchTerm]);

  if (searchProducts.length === 0 && searchProductsStatus !== STATUS.LOADING) {
    return (
      <div className="container mx-auto px-4 min-h-[70vh] flex items-center justify-center">
        <div className="text-red-600 font-semibold text-lg py-8">
          <h3>No products found for: <span className="italic">"{searchTerm}"</span></h3>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Search results for: <span className="italic">"{searchTerm}"</span></h3>
        </div>
        {
          searchProductsStatus === STATUS.LOADING
            ? <Loader />
            : <ProductList products={searchProducts} />
        }
      </div>
    </main>
  );
};

export default SearchPage;
