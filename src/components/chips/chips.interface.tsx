import { ChipProps } from "@mui/material";
import { ReactElement } from "react";

export type ChipColorType =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | "default";

export interface CommonChipPropsI extends ChipProps {
  size?: "small" | "medium";
  label: string | any;
  color?: ChipColorType;
  variant?: "filled" | "outlined";
  disabled?: boolean;
  customStyles?: Record<string, any>;
  shape?: "oval" | "rounded" | "square";
  borderRadius?: number;
  icon?: ReactElement | any;
  backgroundColor?: string;
  textColor?: string;
  hoverStyles?: Record<string, any>;
  onClick?: () => void;
  isCapital?: boolean;
  fontWeight?: number;
  hoverBackgroundColor?: string;
  borderColor?: string;
}

export interface RecordCountChipPropsI {
  isCountLoading?: boolean;
  totalCount?: number;
  name?: string;
  nameVariant?: string;
  textColor?: string;
  chipColor?: ChipColorType;
  chipBackgroundColor?: string;
  isRight?: boolean;
}

export interface TooltipItemsCountChipPropsI {
  data?: any[];
}
