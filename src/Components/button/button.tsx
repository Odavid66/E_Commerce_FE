
import './button.css';

/**
 * Basebutton Component
 * 
 * A reusable button component used throughout the application.
 * Supports customizable colors, sizes, and click handlers.
 */

interface BaseButtonProps {
  backgroundColor?: string;      // Background color of button
  width?: string;               // Width of button
  color?: string;               // Text color of button
  border?: string;              // Border style
  onClick?: () => void;         // Function called when button is clicked
  children?: React.ReactNode;   // Text or elements inside button
  type?: 'button' | 'submit' | 'reset';  // Button type for forms
  disabled?: boolean;           // Whether button is disabled
}

/**
 * Basebutton - Main button component
 * @param props - Button configuration
 * @returns A styled button element
 */
export const Basebutton = ({
  backgroundColor = 'blue',
  width = '-webkit-fill-available',
  color = 'white',
  border = 'none',
  onClick,
  children,
  type = 'button',
  disabled = false
}: BaseButtonProps) => {
  // Inline styles for dynamic/configurable properties
  const dynamicStyles = {
    backgroundColor,
    color,
    border,
    width
  };

  return (
    <button
      className="Basebutton"
      style={dynamicStyles}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};