/**
 * FormControl Component
 * 
 * This component creates a reusable form input field with a label.
 * It's designed to be used in forms like Login, Create Account, Manage Product, etc.
 */

// Props interface defines what data this component can receive
interface FormControlProps {
  label: string;                    // Text displayed above the input (e.g., "Email")
  type: string;                     // Input type: "text", "email", "password", "number", etc.
  placeholder?: string;             // Hint text inside the input
  value: string | number;           // Current value of the input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Function called when user types
  name?: string;                    // Name attribute for the input (helpful for forms)
  required?: boolean;               // Whether this field is required
}

/**
 * FormControl component
 * @param props - All the configuration options for this form input
 * @returns A div containing a label and an input field
 */
export const FormControl = (props: FormControlProps) => {
  return (
    <div className="FormControl">
      {/* Label: tells the user what this input is for */}
      {props.label && (
        <label htmlFor={props.name}>
          {props.label}
          {/* Show asterisk if field is required */}
          {props.required && <span className="required">*</span>}
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
