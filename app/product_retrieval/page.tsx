'use client';

import SearchForm from '../../components/product_retrieval/SearchForm';
import { useState } from 'react';
import { Item } from '../../types/Product';

const ProductRetrievalPage = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const noProducts = products?.length === 0;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <SearchForm setProducts={setProducts} />
        <h2 className="sr-only">Search Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* If no products show a skeleton */}
          {noProducts &&
            Array.from({ length: 8 }, (_, i) => (
              <div className="group" key={i}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    {/* replace the img with div */}
                    <div className="animate-pulse bg-gray-200 w-full h-full" />
                  </div>
                </div>
                <div className="mt-4 h-7 bg-gray-700 opacity-10" />
                <div className="mt-1 h-4 font-medium bg-gray-900 opacity-20" />
              </div>
            ))}

          {products?.map((product) => (
            <a
              key={product.product.decathlon_id}
              href={`https://www.decathlon.com/search?q=${product.product.decathlon_id}`}
              className="group"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image_url}
                  alt={product.product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                {product.product.name}
              </h3>
              {/*<p className="mt-1 text-lg font-medium text-gray-900">*/}
              {/*  {product.price}*/}
              {/*</p>*/}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRetrievalPage;
