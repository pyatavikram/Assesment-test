// fields.js
// Reusable field components for node content areas.
// These reduce boilerplate when building node UIs.

import { useStore } from '../store';

export const TextField = ({ label, nodeId, fieldName, value, onChange, type = 'text', ...props }) => {
  const handleChange = (val) => {
    if (onChange) onChange(val);
    if (nodeId && fieldName) {
      useStore.getState().updateNodeField(nodeId, fieldName, val);
    }
  };

  return (
    <div className="node-field">
      <label className="node-field__label">
        {label}
        <input
          className="node-field__input"
          type={type}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          {...props}
        />
      </label>
    </div>
  );
};

export const SelectField = ({ label, nodeId, fieldName, value, onChange, options = [] }) => {
  const handleChange = (val) => {
    if (onChange) onChange(val);
    if (nodeId && fieldName) {
      useStore.getState().updateNodeField(nodeId, fieldName, val);
    }
  };

  return (
    <div className="node-field">
      <label className="node-field__label">
        {label}
        <select
          className="node-field__select"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
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

export const TextAreaField = ({ label, nodeId, fieldName, value, onChange, ...props }) => {
  const handleChange = (val) => {
    if (onChange) onChange(val);
    if (nodeId && fieldName) {
      useStore.getState().updateNodeField(nodeId, fieldName, val);
    }
  };

  return (
    <div className="node-field">
      <label className="node-field__label">
        {label}
        <textarea
          className="node-field__textarea"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          {...props}
        />
      </label>
    </div>
  );
};

