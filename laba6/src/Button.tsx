import React from "react";

interface ButtonProps {
  value: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {value}
    </button>
  );
};

export default Button;