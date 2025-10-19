export type LinearProgressVariantsType =
  | "determinate"
  | "indeterminate"
  | "buffer";

export type CircularProgressVariantsType = "determinate" | "indeterminate";

export type AvatarVariantsType = "circular" | "rounded" | "square";

export type ChipVariantsType = "filled" | "outlined";

export type ChipShapeType = "oval" | "rounded" | "square";

export type AccordionVariantsType = "secondary" | "inherit" | "card";

export type SkeletonTypesType =
  | "form"
  | "table"
  | "bars"
  | "card"
  | "grid"
  | "item";

export type SkeletonVariantsType =
  | "circular"
  | "rectangular"
  | "square"
  | "rounded";

export type ButtonCategoriesType =
  | "filter"
  | "restore"
  | "customize"
  | "success"
  | "reject"
  | "preview";

export interface LinearProgressVariantsI {
  DETERMINATE: LinearProgressVariantsType;
  IN_DETERMINATE: LinearProgressVariantsType;
  BUFFER: LinearProgressVariantsType;
}

export interface CircularProgressVariantsI {
  DETERMINATE: CircularProgressVariantsType;
  IN_DETERMINATE: CircularProgressVariantsType;
}

export interface AvatarVariantsI {
  CIRCULAR: AvatarVariantsType;
  SQUARE: AvatarVariantsType;
  ROUNDED: AvatarVariantsType;
}

export interface ChipVariantsI {
  FILLED: ChipVariantsType;
  OUTLINED: ChipVariantsType;
}

export interface ChipShapeI {
  OVAL: ChipShapeType;
  ROUNDED: ChipShapeType;
  SQUARE: ChipShapeType;
}

export interface AccordionVariantsI {
  SECONDARY: AccordionVariantsType;
  INHERIT: AccordionVariantsType;
  CARD: AccordionVariantsType;
}

export interface SkeletonTypesI {
  BARS: SkeletonTypesType;
  FORM: SkeletonTypesType;
  TABLE: SkeletonTypesType;
  CARD: SkeletonTypesType;
  GRID: SkeletonTypesType;
  ITEM: SkeletonTypesType;
}

export interface SkeletonVariantsI {
  CIRCULAR: SkeletonVariantsType;
  ROUNDED: SkeletonVariantsType;
  SQUARE: SkeletonVariantsType;
}

export interface ButtonCategoriesI {
  FILTER: ButtonCategoriesType;
  RESTORE: ButtonCategoriesType;
  CUSTOMIZE: ButtonCategoriesType;
  SUCCESS: ButtonCategoriesType;
  REJECT: ButtonCategoriesType;
  PREVIEW: ButtonCategoriesType;
}
