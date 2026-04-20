import React from "react";

export const Dropdown = ({ options, className, ...rest }) => {
  return (
    <select
      className={`border border-(--color-secondary-text)/50 rounded-md px-3 py-2 text-(--color-text) focus:outline-none
        ${className}`}
      {...rest}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
