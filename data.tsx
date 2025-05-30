export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Categories', dropdown: true, href: '/collections' },
  { label: 'Best Selling', href: '/best-selling' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Bundles', href: '/bundles' },
  { label: 'Bulk Purchase', href: '/bulk-purchase' },
];

export const categories = [
  { name: 'Customized Printed Sticker', image: '/images/category-1.webp', href: '/collections/listing' },
  { name: 'Restaurant & Cafes', image: '/images/category-2.webp', href: '/collections/listing' },
  { name: 'Birchwood Cutlery', image: '/images/category-3.webp', href: '/collections/listing' },
  { name: 'Bakery and Cake', image: '/images/category-4.webp', href: '/collections/listing' },
  { name: 'Salad & Rice Bowls', image: '/images/category-1.webp', href: '/collections/listing' },
  { name: 'Paper Bags', image: '/images/category-2.webp', href: '/collections/listing' },
  { name: 'Ecommerce Boxes', image: '/images/category-3.webp', href: '/collections/listing' },
  { name: 'Kraft Bowls', image: '/images/category-4.webp', href: '/collections/listing' },
  { name: 'Coffee/Tea Cafe', image: '/images/category-1.webp', href: '/collections/listing' },
];

export const PRODUCT_DETAILS = {
  title: 'Corrugated Flat Box - 12.5" x 10.5" x 2" Inches',
  rating: '10,000+',
  price: 1300,
  quantityOptions: ['1 Piece', '20 Pieces', '40 Pieces'],
  description: ['Free Returns guarantee in case of damage', 'Food grade material', 'Secure payments'],
  relatedProduct: {
    title: 'White cake box 12x12x4 inches for cakes/tarts',
    quantity: '25 pieces',
    price: 2500,
    originalPrice: 2800,
  },
  images: [
    'images/product-1.webp',
    'images/product-2.webp',
    'images/product-3.webp',
    'images/product-4.webp',
    'images/product-5.webp',
    'images/product-1.webp',
    'images/product-2.webp',
    'images/product-3.webp',
    'images/product-4.webp',
    'images/product-5.webp',
    'images/product-1.webp',
    'images/product-2.webp',
    'images/product-3.webp',
    'images/product-4.webp',
    'images/product-5.webp',
  ],
  accordionData: [
    {
      title: 'Description',
      content: `
        Dimensions: 10" x 8" x 2" Inches
        Ideal for: Resin Art, Photo Frames, Trays, Flat Items
        Material: Kraft Paper + SF + Kraft Paper
        Compostable and Biodegradable
      `,
    },
    {
      title: 'Shipping Information',
      content:
        'COD shipping is available in all major cities of Pakistan. For orders above Rs. 10,000, bank transfer is required.',
    },
    {
      title: 'Ask a Question',
      content: 'For any inquiries, please reach out to our customer support.',
    },
  ],
};

export const products = [
  {
    id: 1,
    image: 'images/product-1.webp',
    name: 'Corrugated Flat Box - 12.5" x 10.5" x 2" Inches',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
  {
    id: 2,
    image: 'images/product-2.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 3,
    image: 'images/product-3.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: false,
  },
  {
    id: 4,
    image: 'images/product-4.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 5,
    image: 'images/product-5.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
  {
    id: 6,
    image: 'images/product-3.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: false,
  },
  {
    id: 7,
    image: 'images/product-4.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 8,
    image: 'images/product-5.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
  {
    id: 9,
    image: 'images/product-3.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: false,
  },
  {
    id: 10,
    image: 'images/product-4.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 11,
    image: 'images/product-5.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
];

// product Listing screen

export const productsList = [
  {
    id: 1,
    image: '../images/product-1.webp',
    name: 'Corrugated Flat Box - 12.5" x 10.5" x 2" Inches',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
  {
    id: 2,
    image: '../images/product-2.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 3,
    image: '../images/product-3.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: false,
  },
  {
    id: 4,
    image: '../images/product-4.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 5,
    image: '../images/product-5.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
  {
    id: 6,
    image: '../images/category-1.webp',
    name: 'Corrugated Flat Box - 12.5" x 10.5" x 2" Inches',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
  {
    id: 7,
    image: '../images/category-2.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 8,
    image: '../images/category-3.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: false,
  },
  {
    id: 9,
    image: '../images/category-4.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
];

export const filters = [
  {
    title: 'Product Type',
    content: (
      <ul className="space-y-2">
        <li>
          <input type="checkbox" /> Bakery Boxes (2)
        </li>
        <li>
          <input type="checkbox" /> Disposable Cutlery (1)
        </li>
        <li>
          <input type="checkbox" /> Other (1)
        </li>
        <li>
          <input type="checkbox" /> Packing Materials (3)
        </li>
      </ul>
    ),
  },
  {
    title: 'Availability',
    content: (
      <ul className="space-y-2">
        <li>
          <input type="checkbox" /> In stock (79)
        </li>
        <li>
          <input type="checkbox" /> Out of stock (52)
        </li>
      </ul>
    ),
  },
  {
    title: 'Price',
    content: (
      <div>
        <input type="range" min="0" max="7400" className="w-full" />
        <div className="flex justify-between text-sm text-tertiary">
          <span>Rs. 0.00</span>
          <span>Rs. 7,400.00</span>
        </div>
      </div>
    ),
  },
];

// Footer

// Customer Support links
export const customerSupport = [
  { label: 'Samples', href: '/samples' },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Contact', href: '/contact' },
  { label: 'Search', href: '/search' },
  { label: 'Shipping policy', href: '/shipping-policy' },
  { label: 'Refund policy', href: '/refund-policy' },
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];
