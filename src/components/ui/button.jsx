import React from "react";

const Button = ({children,variant,icon,disabled,className,...rest}) => {
  const styles = {
    primary:
      "bg-(--color-primary) text-(--color-primary-text) hover:bg-(--color-primary-hover)",
    secondary:
      "bg-transparent text-(--color-secondary-text) border border-(--color-secondary-text) hover:bg-(--color-secondary-hover) hover:text-black",
  };

  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-md cursor-pointer
        ${styles[variant]} ${className}`}
      {...rest}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;