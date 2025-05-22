const Button = ({ title, callback, disabled = false }) => {
    return (
        <button onClick={callback} disabled={disabled}>
            {title}
        </button>
    );
};

export default Button;
