'use client';
import React, { useState } from 'react';
import ProductGallery from '@/components/ProductGallery';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
import Accordion from '@/ui-components/Accordian';
import { PRODUCT_DETAILS, products } from '../../../data';
import { ProductGrid } from '@/components/ProductGrid';
import { Section } from '@/components/Section';

const ProductPage = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(PRODUCT_DETAILS.quantityOptions[1]);

  return (
    <div>
      <div className="p-5 md:flex md:space-x-6">
        {/* Left Section - Image Gallery */}
        <div className="flex-1">
          <ProductGallery images={PRODUCT_DETAILS.images} />
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-normal text-gray-700">{PRODUCT_DETAILS.title}</h1>

          {/* Rating Section */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <MdOutlineStarBorderPurple500 key={index} className="text-green-500" />
            ))}
            <p className="text-black">
              Trusted by <b>{PRODUCT_DETAILS.rating}</b> Customers
            </p>
          </div>

          {/* Quantity Selector */}
          <p className="text-black">Quantity</p>
          <div className="flex space-x-4 items-center">
            {PRODUCT_DETAILS.quantityOptions.map((option, index) => (
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

          {/* Price */}
          <p className="text-xl font-normal">Price: Rs. {PRODUCT_DETAILS.price.toLocaleString()}</p>

          <button className="w-full px-6 py-3 bg-primary border border-black text-white rounded-md">Buy it now</button>

          {/* Related Product */}
          <div>
            <h2 className="text-lg font-medium">You may also like</h2>
            <div className="flex items-center space-x-4 mt-2">
              <img src="/images/product-5.webp" alt="Related product" className="w-24 h-24 border rounded-md" />
              <div>
                <p>{PRODUCT_DETAILS.relatedProduct.title}</p>
                <p className="text-sm text-gray-500">{PRODUCT_DETAILS.relatedProduct.quantity}</p>
                <p className="text-sm text-secondary font-bold">
                  Rs. {PRODUCT_DETAILS.relatedProduct.price.toLocaleString()}{' '}
                  <span className="line-through text-gray-400">
                    Rs. {PRODUCT_DETAILS.relatedProduct.originalPrice.toLocaleString()}
                  </span>
                </p>
                <button className="px-4 py-2 bg-secondary text-white text-sm rounded-md">+ Add</button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <ul className="space-y-2">
            {PRODUCT_DETAILS.description.map((desc, index) => (
              <li key={index} className="text-sm flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="p-8 w-full">
        <Accordion items={PRODUCT_DETAILS.accordionData} />
      </div>

      <Section title="You may also like">
        <ProductGrid products={products.slice(0, 5)} />
      </Section>
    </div>
  );
};

export default ProductPage;
