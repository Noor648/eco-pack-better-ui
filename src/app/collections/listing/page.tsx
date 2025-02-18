'use client';
import { ProductGrid } from '@/components/ProductGrid';
import { useState } from 'react';
import { FaTh, FaBars } from 'react-icons/fa';
import { filters, productsList } from '../../../../data';
import Accordion from '@/ui-components/Accordian';

export default function ProductListing() {
  const [gridView, setGridView] = useState(true);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-tertiary text-sm">{productsList.length} products</span>
        <div className="flex items-center gap-4">
          <select className="border p-2 text-sm rounded-md">
            <option>Best selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button onClick={() => setGridView(true)}>
            <FaTh className={`text-lg ${gridView ? 'text-black' : 'text-gray-400'}`} />
          </button>
          <button onClick={() => setGridView(false)}>
            <FaBars className={`text-lg ${!gridView ? 'text-black' : 'text-gray-400'}`} />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Filters */}
        <div className="w-1/4 px-3 h-screen sticky top-4 overflow-y-auto">
          <Accordion items={filters} />
        </div>
        {/* Product Grid */}
        <div className="w-3/4">
          <ProductGrid products={productsList} />
        </div>
      </div>
    </div>
  );
}
