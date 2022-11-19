import React, { FC, ReactNode } from "react";
import './Button.css';

interface IButton {
  children: ReactNode;
}

export const Button: FC<IButton> = ({ children }) => {
  return (
    <button className="button" type="button">{children}</button>
  );
};