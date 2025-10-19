import {
  AccordionVariantsI,
  AvatarVariantsI,
  ButtonCategoriesI,
  ChipShapeI,
  ChipVariantsI,
  CircularProgressVariantsI,
  LinearProgressVariantsI,
  SkeletonTypesI,
  SkeletonVariantsI,
} from "@/interfaces/ui";

export const LINEAR_PROGRESS_VARIANTS: LinearProgressVariantsI = {
  DETERMINATE: "determinate",
  IN_DETERMINATE: "indeterminate",
  BUFFER: "buffer",
};

export const CIRCULAR_PROGRESS_VARIANTS: CircularProgressVariantsI = {
  DETERMINATE: "determinate",
  IN_DETERMINATE: "indeterminate",
};

export const AVATAR_VARIANTS: AvatarVariantsI = {
  CIRCULAR: "circular",
  SQUARE: "square",
  ROUNDED: "rounded",
};

export const CHIP_VARIANTS: ChipVariantsI = {
  FILLED: "filled",
  OUTLINED: "outlined",
};

export const CHIP_SHAPE: ChipShapeI = {
  OVAL: "oval",
  ROUNDED: "rounded",
  SQUARE: "square",
};

export const ACCORDION_VARIANTS: AccordionVariantsI = {
  SECONDARY: "secondary",
  INHERIT: "inherit",
  CARD: "card",
};

export const SKELETON_TYPES: SkeletonTypesI = {
  FORM: "form",
  TABLE: "table",
  BARS: "bars",
  CARD: "card",
  GRID: "grid",
  ITEM: "item",
};

export const SKELETON_VARIANTS: SkeletonVariantsI = {
  CIRCULAR: "circular",
  ROUNDED: "rounded",
  SQUARE: "square",
};

export const BUTTON_CATEGORIES: ButtonCategoriesI = {
  FILTER: "filter",
  RESTORE: "restore",
  CUSTOMIZE: "customize",
  SUCCESS: "success",
  REJECT: "reject",
  PREVIEW: "preview",
};

export const SEARCH_FIELD_CATEGORY = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  BASIC: "basic",
};
