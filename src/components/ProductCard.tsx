type ProductProps = {
  imageSrc: string;
  name: string;
  isOnSale?: boolean;
  originalPrice: string;
  price: string;
};

export default function Product({ imageSrc, name, isOnSale = false, originalPrice, price }: ProductProps) {
  return (
    <div className="relative">
      {isOnSale && <span className="absolute left-[-4] bg-red-500 text-white text-xs py-1 px-1">SALE</span>}
      <img src={imageSrc} alt={name} className="w-full h-[210px] object-cover mb-3" />
      <h3 className="text-sm font-normal text-gray-600 mb-2">{name}</h3>
      {isOnSale ? (
        <>
          <div className="text-gray-500 line-through">{originalPrice}</div>
          <div className="text-green-600 font-semi-bold">{price}</div>
        </>
      ) : (
        <div className="text-green-600 font-semi-bold">{originalPrice}</div>
      )}
    </div>
  );
}
