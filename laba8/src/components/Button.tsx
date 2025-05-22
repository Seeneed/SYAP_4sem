import React from 'react';

interface ButtonProps {
    title: string;
    callback: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, callback, className }) => {
    return (
        <button onClick={callback} className={className}>
            {title}
        </button>
    );
};

export default Button;
