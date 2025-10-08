import { ReactNode } from "react";

export interface FlexLayoutPropsI {
  alignItems?: string;
  justifyContent?: string;
  gap?: number;
  flexWrap?: string;
  flexDirection?: string;
  minHeight?: string;
  mb?: number;
  children?: ReactNode;
}

export interface SeparateLayoutPropsI {
  borderColor?: string;
  size?: number;
  py?: string;
}

export interface ItemGridLayoutPropsI {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  customStyles?: any;
  children?: ReactNode;
}

export interface ContainerGridLayoutPropsI {
  spacing?: any;
  rowSpacing?: number;
  columnSpacing?: number;
  customStyles?: any;
  children?: ReactNode;
}
