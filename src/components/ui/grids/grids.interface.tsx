import { ReactNode } from "react";

export interface ItemGridPropsI {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  customStyles?: any;
  children?: ReactNode;
  gridSize?: "auto" | "grow" | number;
  container?: boolean;
  spacing?: number;
  offset?: any;
}

export interface ContainerGridPropsI {
  spacing?: any;
  rowSpacing?: number;
  columnSpacing?: number;
  customStyles?: any;
  children?: ReactNode;
}
