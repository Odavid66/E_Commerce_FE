import './ProductInfo.css';
import { ProductImageGallery } from '../ProductImageGallery/ProductImageGallery';
import { ProductReviews } from '../ProductReviews/ProductReview';
import { ProductGrid } from '../ProductGrid/ProductGrid';
import { Basebutton } from '../button/button';
import type { Product } from '../ProductCard/ProductCardComponent';
import { fetchClient } from '../../utils/fetchClient';
import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  verified: boolean;
  rating: number;
  comment: string;
}

interface ProductInfoProps {
  product: Product;
  images: string[];
  reviews: Review[];
  relatedProducts: Product[];
}

export const ProductInfo = ({
  product,
  images,
  reviews,
  relatedProducts,
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
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
            
            Seterror(response)
            console.log("Product added to cart:", response);
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };


  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="product-info">

      {/* ── Top Section ── */}
      <div className="product-info__top">

        {/* Left — Image Gallery */}
        <div className="product-info__gallery">
          <ProductImageGallery images={images} productName={product.name} />
        </div>

        {/* Right — Product Details */}
        <div className="product-info__details">

          {/* Badge + Rating */}
          <div className="product-info__badges">
            <span className="product-info__badge">New Release</span>
            <div className="product-info__rating">
              ★★★★★
              <span className="product-info__rating-count">(178 Reviews)</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="product-info__name">{product.name}</h1>

          {/* Price */}
          <p className="product-info__price">${product.price.toFixed(2)}</p>

          {/* Description */}
          <p className="product-info__description">{product.description}</p>

          {/* Stock Status */}
          <div className="product-info__stock">
            <span className="product-info__stock-label">Stock Status</span>
            <span className="product-info__stock-value product-info__stock-value--in">
              ✓ In Stock (Ships in 3-5 days)
            </span>
            {error && <p className="product-info__error">{error}</p>}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="product-info__actions">
            <div className="product-info__quantity">
              <button className="product-info__qty-btn" onClick={decrement}>-</button>
              <span className="product-info__qty-value">{quantity}</span>
              <button className="product-info__qty-btn" onClick={increment}>+</button>
            </div>

            <Basebutton
              backgroundColor="#6366f1"
              color="#ffffff"
              width="auto"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Basebutton>
          </div>

          {/* Delivery Info */}
          <div className="product-info__delivery">
            <div className="product-info__delivery-item">
              <span>🚚</span>
              <div>
                <p className="product-info__delivery-title">Delivery</p>
                <p className="product-info__delivery-sub">2-5 days</p>
              </div>
            </div>
            <div className="product-info__delivery-item">
              <span>🔄</span>
              <div>
                <p className="product-info__delivery-title">Warranty</p>
                <p className="product-info__delivery-sub">1 Year (Intl)</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Reviews ── */}
      <ProductReviews reviews={reviews} />

      {/* ── You May Also Like ── */}
      <div className="product-info__related">
        <h2 className="product-info__related-title">You May Also Like</h2>
        <ProductGrid
          products={relatedProducts}
          onViewDetails={() => {}}
        />
      </div>

    </div>
  );
};