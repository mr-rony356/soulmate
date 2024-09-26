// HeaderText.jsx
import React from "react";

const HeaderText = ({ children, className = "" }) => {
  return (
    <p
      className={`text-3xl lg:text-[42px] font-semibold text-center mb-16 ${className}`}
    >
      {children}
    </p>
  );
};

export default HeaderText;
