import { useNavigate } from 'react-router-dom';
import { ProductGrid } from '../../../Components/ProductGrid/ProductGrid';
import type { Product } from '../../../Components/ProductCard/ProductCardComponent';
import jersey from '../../../assets/jersey.webp';

// Dummy products to test with
const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Bayern Munich Jersey",
    price: 89.99,
    image: jersey,
    category: "Jerseys",
    description: "Official Bayern Munich home jersey. Comfortable and stylish."
  },
  {
    id: 2,
    name: "Real Madrid Jersey",
    price: 79.99,
    image: jersey,
    category: "Jerseys",
    description: "Official Real Madrid home jersey. Premium quality fabric."
  },
  {
    id: 3,
    name: "Chelsea Jersey",
    price: 74.99,
    image: jersey,
    category: "Jerseys",
    description: "Official Chelsea home jersey. Classic blue design."
  }
];

export const ProductsPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product.name);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "24px", color: "#111827" }}>
        Our Products
      </h1>
      <ProductGrid
        products={dummyProducts}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
};