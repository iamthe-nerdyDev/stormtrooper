import { IButton } from "../../interface";

import "./Button.css";

const Button = ({ label, className, type, handleClick }: IButton) => {
  return (
    <button
      onClick={handleClick}
      type={type || "button"}
      className={`btn ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
