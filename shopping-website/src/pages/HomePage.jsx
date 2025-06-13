import React, { useEffect } from 'react';
import HeaderSlider from '../components/HeaderSlider';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../store/categorySlice';
import ProductList from '../components/ProductList';
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from '../store/productSlice';
import Loader from '../components/Loader';
import { STATUS } from '../utils/status';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, [dispatch]);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  // Shuffle products randomly
  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);
      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  const catProductsOne = products.filter((p) => p.category === categories[0]);
  const catProductsTwo = products.filter((p) => p.category === categories[1]);
  const catProductsThree = products.filter((p) => p.category === categories[2]);
  const catProductsFour = products.filter((p) => p.category === categories[3]);

  return (
    <main>
      {/* Header Slider */}
      <div className="my-8">
        <HeaderSlider />
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {/* All Products (Random) */}
            <div>
              <div className="mb-10">
                <h3 className="text-2xl font-semibold">See our products</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={tempProducts} />
              )}
            </div>

            {/* Category 1 */}
<div>
  <div className="mb-10">
    <h3 className="text-2xl font-semibold capitalize">{categories[0]?.name || "Category 1"}</h3>
  </div>
  {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsOne} />}
</div>

{/* Category 2 */}
<div>
  <div className="mb-10">
    <h3 className="text-2xl font-semibold capitalize">{categories[1]?.name || "Category 2"}</h3>
  </div>
  {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsTwo} />}
</div>

{/* Category 3 */}
<div>
  <div className="mb-10">
    <h3 className="text-2xl font-semibold capitalize">{categories[2]?.name || "Category 3"}</h3>
  </div>
  {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsThree} />}
</div>

{/* Category 4 */}
<div>
  <div className="mb-10">
    <h3 className="text-2xl font-semibold capitalize">{categories[3]?.name || "Category 4"}</h3>
  </div>
  {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsFour} />}
</div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
