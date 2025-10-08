const RANDOM_STRINGS = {
  ALPHA_NUMERIC_FAV_SPECIALS:
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!",
};

export const replaceSpaceWithSep = (string: any, sep: any = "_") =>
  string?.replace(/ /g, sep);

export const generateRandomText = (
  character = RANDOM_STRINGS?.ALPHA_NUMERIC_FAV_SPECIALS,
  length = 8,
) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += character?.charAt(
      Math?.floor(Math?.random() * character?.length),
    );
  }
  return result;
};

const hashStringToInt = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return Math.abs(hash);
};

export const generateColorFromName = (id: string) => {
  const hash = hashStringToInt(id);
  const hue = hash % 360;
  const saturation = 60 + (hash % 30);
  const lightness = 50 + (hash % 10);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
