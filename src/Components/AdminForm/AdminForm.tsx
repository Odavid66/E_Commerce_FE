import './AdminForm.css';

interface AdminFormProps {
  label: string;
  type?: 'text' | 'number' | 'textarea' | 'select';
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  options?: { label: string; value: string }[];
  required?: boolean;
  hint?: string;
}

export const AdminForm = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  options = [],
  required = false,
  hint,
}: AdminFormProps) => {
  return (
    <div className="admin-form">

      {/* Label */}
      <label className="admin-form__label">
        {label}
        {required && <span className="admin-form__required">*</span>}
      </label>

      {/* Hint */}
      {hint && <p className="admin-form__hint">{hint}</p>}

      {/* Textarea */}
      {type === 'textarea' && (
        <textarea
          className="admin-form__textarea"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
        />
      )}

      {/* Select */}
      {type === 'select' && (
        <select
          className="admin-form__select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* Text or Number */}
      {(type === 'text' || type === 'number') && (
        <input
          className="admin-form__input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

    </div>
  );
};