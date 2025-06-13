import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="grid gap-y-8 my-3 bg-gray-100
                    sm:grid-cols-2 sm:gap-x-6
                    md:grid-cols-3
                    xl:grid-cols-4
                    2xl:grid-cols-5">
      {products.map((product) => {
        const discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Product
            key={product.id}
            product={{ ...product, discountedPrice }}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
