'use client';
import Link from 'next/link';
import { FaSearch, FaPlus } from 'react-icons/fa';

type ProductProps = {
  imageSrc: string;
  name: string;
  isOnSale?: boolean;
  originalPrice: string;
  price: string;
};

export default function Product({ imageSrc, name, isOnSale = false, originalPrice, price }: ProductProps) {
  return (
    <Link className="relative group block" href={'/product'}>
      {/* Sale Badge */}
      {isOnSale && <span className="absolute left-0 bg-red-500 text-white text-xs py-1 px-2 z-5">SALE</span>}

      {/* Image */}
      <div className="relative">
        <img src={imageSrc} alt={name} className="w-full h-[210px] object-cover mb-3" />

        {/* Desktop Hover Icons */}
        <div
          className="absolute inset-0 hidden sm:flex items-center justify-center gap-2 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"
        >
          <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 shadow-md">
            <FaSearch />
          </button>
          <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 shadow-md">
            <FaPlus />
          </button>
        </div>

        {/* Mobile Fixed Icons */}
        <div className="absolute top-0 right-10 translate-x-1/2 translate-y-1/2 flex gap-2 sm:hidden">
          <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 shadow-md">
            <FaSearch />
          </button>
          <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 shadow-md">
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <h3 className="text-sm font-normal text-tertiary mb-2">{name}</h3>
      {isOnSale ? (
        <>
          <div className="text-gray-500 line-through">{originalPrice}</div>
          <div className="text-secondary font-semibold">{price}</div>
        </>
      ) : (
        <div className="text-secondary font-semibold">{originalPrice}</div>
      )}
    </Link>
  );
}
