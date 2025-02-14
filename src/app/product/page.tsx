'use client';
import React, { useState } from 'react';
import { PRODUCT_DATA } from '../../../data';
import ProductGallery from '@/components/ProductGallery';

const ProductPage = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(PRODUCT_DATA.quantityOptions[1]);

  return (
    <div className="p-5 md:flex md:space-x-6">
      {/* Left Section - Image Gallery */}
      <div className="flex-1">
        <ProductGallery images={PRODUCT_DATA.images} />
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">{PRODUCT_DATA.title}</h1>
        <p className="text-green-600">{PRODUCT_DATA.rating}</p>

        {/* Quantity Selector */}
        <div className="flex space-x-4 items-center">
          {PRODUCT_DATA.quantityOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedQuantity(option)}
              className={`px-4 py-2 border rounded-md ${
                selectedQuantity === option ? 'bg-green-500 text-white' : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <p className="text-xl font-semibold">Price: Rs. {PRODUCT_DATA.price.toLocaleString()}</p>

        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded-md">Add to cart</button>
          <button className="px-6 py-3 bg-black text-white rounded-md">Buy it now</button>
        </div>

        {/* Related Product */}
        <div className="border-t pt-4 mt-4">
          <h2 className="text-lg font-bold">You may also like</h2>
          <div className="flex items-center space-x-4 mt-2">
            <img
              src="/images/product-5.webp" // Placeholder path
              alt="Related product"
              className="w-24 h-24 border rounded-md"
            />
            <div>
              <p>{PRODUCT_DATA.relatedProduct.title}</p>
              <p className="text-sm text-gray-500">{PRODUCT_DATA.relatedProduct.quantity}</p>
              <p className="text-sm text-green-600 font-bold">
                Rs. {PRODUCT_DATA.relatedProduct.price.toLocaleString()}{' '}
                <span className="line-through text-gray-400">
                  Rs. {PRODUCT_DATA.relatedProduct.originalPrice.toLocaleString()}
                </span>
              </p>
              <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-md">+ Add</button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <ul className="space-y-2">
          {PRODUCT_DATA.description.map((desc, index) => (
            <li key={index} className="text-sm flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
