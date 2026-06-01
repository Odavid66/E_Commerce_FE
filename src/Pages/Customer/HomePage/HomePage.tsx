import { useNavigate } from 'react-router-dom';
import { ProductGrid } from '../../../Components/ProductGrid/ProductGrid';
import type { Product } from '../../../Components/ProductCard/ProductCardComponent';
import jersey from '../../../assets/jersey.webp';
import './HomePage.css';

// Dummy products for testing
const dummyProducts: Product[] = [
  { id: 1, name: "Nexus Sound P1", price: 159.0, image: jersey, category: "Electronics", description: "Premium sound quality." },
  { id: 2, name: "Nexus Watch 02", price: 200.0, image: jersey, category: "Electronics", description: "Smart connectivity." },
  { id: 3, name: "InstaCam X", price: 299.0, image: jersey, category: "Electronics", description: "High quality camera." },
  { id: 4, name: "Nexus Tab Pro", price: 499.0, image: jersey, category: "Electronics", description: "Built for creators." },
  { id: 5, name: "Nexus Air 2", price: 180.0, image: jersey, category: "Electronics", description: "Wireless freedom." },
  { id: 6, name: "KeyFlow Mech", price: 120.0, image: jersey, category: "Electronics", description: "Perfect keyboard." },
];

export const HomePage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product.name);
  };

  return (
    <div className="home">

      {/* Hero Banner */}
      <div className="home__hero">
        <div className="home__hero-text">
          <span className="home__hero-tag">New Collection</span>
          <h1>Future of Tech.</h1>
          <p>Innovative and clarity with our latest technical products for the modern professional.</p>
          <button className="home__hero-btn">Explore Now</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="home__main">

        {/* Sidebar */}
        <aside className="home__sidebar">

          {/* Category Filter */}
          <div className="home__filter">
            <h4 className="home__filter-title">Category</h4>
            <ul className="home__filter-list">
              <li className="home__filter-item home__filter-item--active">Electronics</li>
              <li className="home__filter-item">Clothing</li>
              <li className="home__filter-item">Fashion</li>
            </ul>
          </div>

          {/* Price Range */}
          <div className="home__filter">
            <h4 className="home__filter-title">Price Range</h4>
            <input type="range" min="0" max="1000" className="home__range" />
            <div className="home__range-labels">
              <span>$0</span>
              <span>$1000+</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="home__filter">
            <h4 className="home__filter-title">Rating</h4>
            <div className="home__stars">★★★★☆ 4.0+</div>
          </div>

          <button className="home__reset-btn">Reset Filters</button>
        </aside>

        {/* Products */}
        <div className="home__products">
          <div className="home__products-header">
            <span>6 products found</span>
            <select className="home__sort">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <ProductGrid
            products={dummyProducts}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        </div>

      </div>
    </div>
  );
};