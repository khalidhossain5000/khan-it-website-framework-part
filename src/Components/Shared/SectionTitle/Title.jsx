import React from "react";

const Title = ({ children, className }) => {
  return (
    <h1 className={`font-dmSans text-center text-3xl lg:text-5xl font-bold ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
