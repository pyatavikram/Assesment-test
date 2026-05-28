// fields.js
// Reusable field components for node content areas.
// These reduce boilerplate when building node UIs.

export const TextField = ({ label, value, onChange, type = 'text', ...props }) => {
  return (
    <div className="node-field">
      <label className="node-field__label">
        {label}
        <input
          className="node-field__input"
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      </label>
    </div>
  );
};

export const SelectField = ({ label, value, onChange, options = [] }) => {
  return (
    <div className="node-field">
      <label className="node-field__label">
        {label}
        <select
          className="node-field__select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export const TextAreaField = ({ label, value, onChange, ...props }) => {
  return (
    <div className="node-field">
      <label className="node-field__label">
        {label}
        <textarea
          className="node-field__textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      </label>
    </div>
  );
};
