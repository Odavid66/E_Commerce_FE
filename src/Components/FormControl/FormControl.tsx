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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Function called when user types
  name?: string;                    // Name attribute for the input
  required?: boolean;               // Whether this field is required
  layout?: 'vertical' | 'inline';  // Layout style: "vertical" (default) or "inline" (label left, input right)
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
        <label htmlFor={props.name} className="FormControl__label">
          {props.label}
          {/* Show asterisk if field is required */}
          {props.required && <span className="FormControl__required">*</span>}
        </label>
      )}

      {/* The actual input field where user types */}
      <input
        type={props.type}
        placeholder={props.placeholder || ""}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        required={props.required || false}
        className="FormControl__input"
      />
    </div>
  );
};
