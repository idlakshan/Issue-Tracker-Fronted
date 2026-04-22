import React from "react";

const Input = ({ icon, className, ...rest }) => {
  return (
    <div className="relative flex items-center">
      {icon && (
        <span className="absolute left-3 flex items-center text-(--color-secondary-text)">
          {icon}
        </span>
      )}

      <input
        className={`border border-(--color-secondary-text)/50 rounded-md px-3 py-2 text-(--color-text)
          placeholder:text-(--color-secondary-text) placeholder:font-medium focus:outline-none focus:border-(--color-secondary-text)
          ${icon ? "pl-10" : ""}
          ${className}
        `}
        {...rest}
      />
    </div>
  );
};

export default Input;
