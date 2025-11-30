import { AVATAR_VARIANTS, SEARCH_FIELD_CATEGORY } from "./ui.constant";

export const ONE_REM_TO_PX: number = 16;

export const AVATAR_VARIANTS_BORDER_RADIUS = {
  [AVATAR_VARIANTS?.CIRCULAR]: "50%",
  [AVATAR_VARIANTS?.ROUNDED]: 4,
  [AVATAR_VARIANTS?.SQUARE]: 1,
};

export const SEARCH_FIELD_CATEGORY_STYLES = {
  [SEARCH_FIELD_CATEGORY?.PRIMARY]: {
    backgroundColor: "primary.lighter",
    iconColor: "common.white",
    borderColor: "common.border_disabled",
    color: "common.white",
    border: "none",
  },

  [SEARCH_FIELD_CATEGORY?.BASIC]: {
    backgroundColor: "transparent",
    iconColor: "common.disabled",
    color: "text.primary",
    border: "0.2px solid",
    borderColor: "common.disabled",
  },
};
