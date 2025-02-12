import Product from "./ProductCard";

export function ProductGrid({ products }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {products.map((product: any) => (
        <Product
          key={product.id}
          imageSrc={product.image}
          name={product.name}
          isOnSale={product.isOnSale}
          originalPrice={product.originalPrice}
          price={product.price}
        />
      ))}
    </div>
  );
}
