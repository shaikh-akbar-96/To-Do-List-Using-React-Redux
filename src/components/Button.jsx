import React from "react";
import "../styles/index.css";
import { getClasses } from "../utils/getClasses";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

const Button = ({ children, variant, type, ...rest }) => {
  return (
    <button
      className={getClasses(["button", [`button--${buttonTypes[variant]}`]])}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
};

const SelectButton = ({ children, ...rest }) => {
  return (
    <select className={getClasses(["button", "button__select"])} {...rest}>
      {children}
    </select>
  );
};

export {SelectButton}
export default Button;
