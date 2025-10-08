import { ReactNode } from "react";

export type FontWeightTypes =
  | "fontWeightNormal"
  | "fontWeightMedium"
  | "fontWeightSemiBold"
  | "fontWeightBold"
  | "fontWeightExtraBold"
  | "fontWeightBlack";

export type HeadingTextVariantTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type SubHeadingTextVariantTypes = "subtitle1" | "subtitle2";

export type BodyTextVariantTypes = "body1" | "body2" | "caption" | "overline"

export type  CustomTextVariantTypes = "pageTitled" 

export type TextComponentTypes = "div" | "p"  | "span"

export interface HeadingTextPropsI {
  variant?: HeadingTextVariantTypes;
  color?: string;
  fontWeight?: FontWeightTypes;
  component?: HeadingTextVariantTypes;
  children: ReactNode;
  isCapital?:boolean;
}

export interface SubHeadingTextPropsI {
    variant?: SubHeadingTextVariantTypes;
    color?: string;
    fontWeight?: FontWeightTypes;
    component?: TextComponentTypes;
    children: ReactNode;
    isCapital?:boolean;
  }
  

export interface BodyTextPropsI {
  variant?: BodyTextVariantTypes;
  color?: string;
  fontWeight?: FontWeightTypes;
  component?: TextComponentTypes;
  children: ReactNode;
  isCapital?:boolean;
}

export interface CustomTextPropsI {
  variant?: CustomTextVariantTypes;
  color?: string;
  fontWeight?: FontWeightTypes;
  component?: TextComponentTypes;
  children: ReactNode;
  isCapital?:boolean;
}