import React from 'react';

const Button = ({icon,children,className}) => {
    return (
       <button className={`flex items-center py-3 px-6 bg-primary font-inter rounded-lg text-white ${className}`}>
       <span>{icon}</span> {children}
       </button>
    );
};

export default Button;