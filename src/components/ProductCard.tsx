'use client';
import { useRouter } from 'next/navigation';
import { FaSearch, FaPlus } from 'react-icons/fa';

type ProductProps = {
  imageSrc: string;
  name: string;
  isOnSale?: boolean;
  originalPrice: string;
  price: string;
};

export default function Product({ imageSrc, name, isOnSale = false, originalPrice, price }: ProductProps) {
  const router = useRouter();

  const navigateToProduct = () => {
    router.push('/product');
  };
  return (
    <div className="relative group" onClick={navigateToProduct}>
      {/* Sale Badge */}
      {isOnSale && <span className="absolute left-0 bg-red-500 text-white text-xs py-1 px-2">SALE</span>}

      {/* Image */}
      <div className="relative">
        <img src={imageSrc} alt={name} className="w-full h-[210px] object-cover mb-3" />

        {/* Hover Icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200">
            <FaSearch />
          </button>
          <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200">
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <h3 className="text-sm font-normal text-gray-600 mb-2">{name}</h3>
      {isOnSale ? (
        <>
          <div className="text-gray-500 line-through">{originalPrice}</div>
          <div className="text-green-600 font-semibold">{price}</div>
        </>
      ) : (
        <div className="text-green-600 font-semibold">{originalPrice}</div>
      )}
    </div>
  );
}
