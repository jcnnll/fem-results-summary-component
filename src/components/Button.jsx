import "./Button.scss";

const Button = ({ text, onClick, type, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`button ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
