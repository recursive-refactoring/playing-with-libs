import { ARRAY_INDEX } from "@/constants/array";

export const truncateText = (text = "---", sliceLimit = 20) => {
  return text?.length > sliceLimit
    ? `${text?.slice?.(0, sliceLimit)} ...`
    : text;
};

export const fullName = (firstName?: any, lastName?: any, fallback = "---") => {
  if (!!!firstName && !!!lastName) return fallback;
  return `${firstName ?? ""} ${lastName ?? ""}`;
};

export const convertCurrentCaseToTitleCase = (
  str: any,
  split = "-",
): string => {
  return str
    ?.split?.(split)
    ?.map?.(
      (word: string) =>
        word?.charAt?.(ARRAY_INDEX?.ZERO)?.toUpperCase?.() +
        word?.slice?.(ARRAY_INDEX?.ONE),
    )
    ?.join?.(" ");
};

export function toTitleCaseFromXCase(str: any, sep: any = "_") {
  const parts = [];
  let capitalize = true;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch === sep) {
      parts.push(" ");
      capitalize = true;
    } else {
      if (capitalize) {
        parts.push(ch.toUpperCase());
        capitalize = false;
      } else {
        parts.push(ch.toLowerCase());
      }
    }
  }

  return parts.join("");
}
