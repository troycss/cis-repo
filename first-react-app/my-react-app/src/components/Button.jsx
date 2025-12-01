    // components/Button.jsx
    import React from 'react';

    const Button = ({ children, onClick, disabled, type = 'button', className = 'primarybutton' }) => {
      return (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className={`primarybutton ${className}`} // Add your base styles and allow for custom classes
        >
          {children}
        </button>
      );
    };

    export default Button;