import './ProductCard.css';
import { Basebutton } from '../button/button';
import { fetchClient } from '../../utils/fetchClient';
import { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  description?: string;
  categoryId?: number | null;
  categoryName?: string;
  price: number;
  stock?: number;
  imageUrl: string;
  created?: string;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
    const [error, Seterror] = useState('');
    const handleAddToCart = async (product: Product) => {
        try {
            const response = await fetchClient('/api/Cart/AddToCart', {
                method: 'POST',
                body: JSON.stringify({ productId: product.id, productName: product.name}),
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            Seterror(response);
            console.log("Product added to cart:", response);
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };
    
  return (
    <div className="product-card" >
      <div onClick={() => onViewDetails(product)}>
      {/* Product Image */}
      <div className="product-card__image-wrapper">
        <img src={product.imageUrl} alt={product.name} className="product-card__image" />
      </div>

      {/* Product Info */}
      <div className="product-card__body">
        <span className="product-card__category">{product.categoryName}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        {error && (<p className="product-card__error">{error}</p>)}
  
      </div>
      </div>
      <div className='product-card__body-buttoncover'>
        <Basebutton
            backgroundColor="#6366f1"
            color="#ffffff"
            width="100%"
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
              `${console.log("button was clicked")}`
            }}
          >
            Add to Cart
          </Basebutton>
        </div>
    </div>
  );
};