import { useState } from 'react';
import './ProductInfo.css';
import { Basebutton } from '../button/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductInfoProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductInfo = ({ product, onAddToCart }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="product-info">

      {/* Image */}
      <div className="product-info__image-wrapper">
        <img src={product.image} alt={product.name} className="product-info__image" />
      </div>

      {/* Details */}
      <div className="product-info__details">
        <span className="product-info__category">{product.category}</span>
        <h1 className="product-info__name">{product.name}</h1>
        <p className="product-info__price">${product.price.toFixed(2)}</p>
        <p className="product-info__description">{product.description}</p>

        {/* Quantity Selector */}
        <div className="product-info__quantity">
          <button className="product-info__qty-btn" onClick={decrement}>-</button>
          <span className="product-info__qty-value">{quantity}</span>
          <button className="product-info__qty-btn" onClick={increment}>+</button>
        </div>

        {/* Add to Cart */}
        <Basebutton
          backgroundColor="#6366f1"
          color="#ffffff"
          width="100%"
          onClick={() => onAddToCart(product, quantity)}
        >
          Add to Cart
        </Basebutton>
      </div>

    </div>
  );
};