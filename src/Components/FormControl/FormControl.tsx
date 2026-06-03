import type { ReactNode, ChangeEvent } from 'react';
import './FormControl.css';

/**
 * FormControl Component
 * 
 * This component creates a reusable form input field with a label.
 * It's designed to be used in forms like Login, Create Account, Manage Product, etc.
 * Supports both vertical layout (default) and inline layout (for compact forms).
 */

// Props interface defines what data this component can receive
interface FormControlProps {
  label: string;                    // Text displayed above or beside the input
  type: string;                     // Input type: "text", "email", "password", "number", etc.
  placeholder?: string;             // Hint text inside the input
  value: string | number;           // Current value of the input
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;  // Function called when user types
  name?: string;                    // Name attribute for the input
  required?: boolean;               // Whether this field is required
  layout?: 'vertical' | 'inline';  // Layout style: "vertical" (default) or "inline" (label left, input right)
  leftIcon?: ReactNode;             // Icon rendered on the left side of the input
  rightIcon?: ReactNode;            // Icon rendered on the right side of the input
  labelRight?: ReactNode;           // Element rendered on the right side of the label (e.g., "Forgot Password?")
  labelClass?: string;              // Optional class for label text
}

/**
 * FormControl component
 * @param props - All the configuration options for this form input
 * @returns A div containing a label and an input field
 */
export const FormControl = (props: FormControlProps) => {
  const layout = props.layout || 'vertical';
  const containerClass = layout === 'inline' ? 'FormControl--inline' : 'FormControl';
  
  return (
    <div className={containerClass}>
      {/* Label: tells the user what this input is for */}
      {props.label && (
        <div className="FormControl__labelRow">
          <label htmlFor={props.name} className={`FormControl__label ${props.labelClass || ''}`}>
            {props.label}
            {/* Show asterisk if field is required */}
            {props.required && <span className="FormControl__required">*</span>}
          </label>
          {props.labelRight && <div className="FormControl__labelRight">{props.labelRight}</div>}
        </div>
      )}

      {/* The actual input field where user types */}
      <div className="FormControl__inputContainer">
        {props.leftIcon && <span className="FormControl__icon FormControl__icon--left">{props.leftIcon}</span>}
        <input
          type={props.type}
          placeholder={props.placeholder || ""}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          required={props.required || false}
          className={`FormControl__input ${props.leftIcon ? 'has-left-icon' : ''} ${props.rightIcon ? 'has-right-icon' : ''}`}
        />
        {props.rightIcon && <span className="FormControl__icon FormControl__icon--right">{props.rightIcon}</span>}
      </div>
    </div>
  );
};
