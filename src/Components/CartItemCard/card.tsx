import './card.css';

/**
 * CartItemCard Component
 * 
 * Displays a product card in the shopping cart.
 * Shows product info, price, and quantity controls.
 */

interface CartItemCardProps {
  productImage: string;           // URL of product image
  productName: string;            // Name of the product
  productDescription: string;     // Description of the product
  price: number;                  // Price of the product
  quantity: number;               // How many items in cart
  onIncrement: () => void;        // Function called when + button clicked
  onDecrement: () => void;        // Function called when - button clicked
  onRemove: () => void;           // Function called when remove button clicked
}

/**
 * CartItemCard - Renders a single cart item
 * @param props - Product and action configurations
 * @returns A product card with quantity controls
 */
export const CartItemCard = ({
    productImage,
    productName,
    productDescription,
    price,
    quantity,
    onIncrement,
    onDecrement,
    onRemove
}: CartItemCardProps) => {
  // Format price to always show 2 decimal places (e.g., 99.99)
    const formattedPrice = price.toFixed(2);

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
        <button onClick={onRemove} className="CartItemCard__removeBtn">
          <img src="" alt="remove item" />
        </button>

        {/* Quantity Adjuster */}
        <div className="CartItemCard__quantityControl">
          <button onClick={onDecrement} className="CartItemCard__quantityBtn">
            -
          </button>
          <span className="CartItemCard__quantity">{quantity}</span>
          <button onClick={onIncrement} className="CartItemCard__quantityBtn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};