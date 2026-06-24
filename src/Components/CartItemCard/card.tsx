import { useState } from 'react';
import './card.css';
import { fetchClient } from '../../utils/fetchClient';

/**
 * CartItemCard Component
 * 
 * Displays a product card in the shopping cart.
 * Shows product info, price, and quantity controls.
 */

interface CartItemCardProps {
  productId: number;            // Unique identifier for the product
  productImage: string;           // URL of product image
  productName: string;            // Name of the product
  productDescription: string;     // Description of the product
  price: number;                  // Price of the product
  quantity: number;               // How many items in cart       
  onRemove: () => void;           // Function called when remove button clicked
}


/**
 * CartItemCard - Renders a single cart item
 * @param props - Product and action configurations
 * @returns A product card with quantity controls
 */
export const CartItemCard = ({
    productId,
    productImage,
    productName,
    productDescription,
    price,
    quantity,
    onRemove
}: CartItemCardProps) => {
  // Format price to always show 2 decimal places (e.g., 99.99)
    const formattedPrice = price.toFixed(2);
    const [quantityState, setQuantityState] = useState(quantity);
    const [error, Seterror] = useState('');
        const handleAddToCart = async (productId: number, productName: string) => {
            try {
                const response = await fetchClient('/api/Cart/AddToCart', {
                    method: 'POST',
                    body: JSON.stringify({ productId,productName }),
                });
                const result = await response.json();``
                if (!response.ok) {
                    Seterror(result)
                    throw new Error(`Response status: ${response.status}`);
                }
                setQuantityState(quantityState + 1);
                console.log("Product added to cart:", result);
            } catch (error) {
                console.error("Error adding product to cart:", error);
            }
        };

        const handleRemoveFromCart = async (productId: number, productName: string) => {
            try {
                const response = await fetchClient('/api/Cart/RemoveFromCart', {
                    method: 'POST',
                    body: JSON.stringify({ productId, productName }),
                });
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                Seterror(response)
                if (quantityState > 1) {
                    setQuantityState(quantityState - 1);
                }
                console.log("Product removed from cart:", response);
            } catch (error) {
                console.error("Error removing product from cart:", error);
            }
        };

    return (
    <div className="CartItemCard">
      {/* Product Image */}
      <img src={productImage} alt={productName} />

      {/* Product Information */}
      <div>
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <p>${formattedPrice}</p>
      </div>

      {/* Quantity Controls */}
      <div>
        {/* Remove Button */}
        <button onClick={onRemove} className="CartItemCard__removeBtn" aria-label={`Remove ${productName} from cart`}>
          <span className="CartItemCard__removeIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#384152" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6 18.2 19a2 2 0 0 1-2 2H7.8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </span>
        </button>

        {/* Quantity Adjuster */}
        <div className="CartItemCard__quantityControl">
          <button onClick={(e) => {e.preventDefault(); handleRemoveFromCart(productId, productName);}} className="CartItemCard__quantityBtn">
            -
          </button>
          <span className="CartItemCard__quantity">{quantityState}</span>
          <button onClick={(e) => {e.preventDefault(); handleAddToCart(productId, productName);}} className="CartItemCard__quantityBtn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};