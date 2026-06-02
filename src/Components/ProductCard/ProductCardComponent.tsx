import './ProductCard.css';
import { Basebutton } from '../button/button';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <div className="product-card" onClick={() => onViewDetails(product)}>

      {/* Product Image */}
      <div className="product-card__image-wrapper">
        <img src={product.image} alt={product.name} className="product-card__image" />
      </div>

      {/* Product Info */}
      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>

        <Basebutton
          backgroundColor="#6366f1"
          color="#ffffff"
          width="100%"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          Add to Cart
        </Basebutton>
      </div>

    </div>
  );
};