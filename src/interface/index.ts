import { ReactNode } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  fill?: string;
}

export interface IContainer {
  children?: ReactNode;
}

export interface IButton {
  label: string;
  type?: "submit" | "button";
  className?: string;
  handleClick?: () => void;
}
