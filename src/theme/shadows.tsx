export const shadows = [
  "none",
  "0px 1px 2px rgba(0, 0, 0, 0.05)",
  "0px 2px 4px rgba(0, 0, 0, 0.1)",
  "0px 3px 6px rgba(0, 0, 0, 0.15)",
  "0px 4px 8px rgba(0, 0, 0, 0.2)",
  "0px 5px 10px rgba(0, 0, 0, 0.25)",
  "0px 6px 12px rgba(0, 0, 0, 0.3)",
  "0px 7px 14px rgba(0, 0, 0, 0.35)",
  "0px 8px 16px rgba(0, 0, 0, 0.4)",
  "0px 9px 18px rgba(0, 0, 0, 0.45)",
  "0px 10px 20px rgba(0, 0, 0, 0.5)",
  "0px 11px 22px rgba(0, 0, 0, 0.55)",
  "0px 12px 24px rgba(0, 0, 0, 0.6)",
  "0px 13px 26px rgba(0, 0, 0, 0.65)",
  "0px 14px 28px rgba(0, 0, 0, 0.7)",
  "0px 15px 30px rgba(0, 0, 0, 0.75)",
  "0px 16px 32px rgba(0, 0, 0, 0.8)",
  "0px 17px 34px rgba(0, 0, 0, 0.85)",
  "0px 18px 36px rgba(0, 0, 0, 0.9)",
  "0px 19px 38px rgba(0, 0, 0, 0.95)",
  "0px 20px 40px rgba(0, 0, 0, 1)",
  "0px 21px 42px rgba(0, 0, 0, 1.05)",
  "0px 22px 44px rgba(0, 0, 0, 1.1)",
  "0px 23px 46px rgba(0, 0, 0, 1.15)",
  "0px 24px 48px rgba(0, 0, 0, 1.2)",
  "0px 0px 22.2px 0px #692FC738",
];

export const customShadows = [
  "0px 4px 20px 5px rgba(0, 0, 0, 0.30)", //25
  "inset 0px 2px 5px rgba(0, 0, 0, 0.15)", //26
];

export const CustomShadows = (): Record<string, string> => {
  return {
    1: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
    2: `0px 4px 10px #697AE229`,
    3: `0px 4px 10px #F0F2FC`,
    4: `0px 0px 8px 0px #697AE229`,
    5: `0 0 8px rgba(105, 122, 226, 0.16)`,
    6: `0px 0px 20px 4px rgba(103, 101, 182, 0.08)`,
    7: `0px 5px 25px 0px rgba(105, 105, 105, 0.10)`,
    8: `0px 0px 8px 2px #6765B629`,
    9: `1px 4px 4px #F0F0F2`,
    10: `0px 0px 9px 0px #6765B629`,
    11: `12px 0px 12px -5px #697AE229, -12px 0px 12px -5px #697AE229`,
    12: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
    13: `0px 4px 4px 0px #0000000A`,
    14: `0px 0px 11.64px 0px #00000029`,
    15: `0px 0px 7.27px 0px #A8A6A61C`,
    16: `1px 2px 10px 8px #f0f2fc`,
    17: `0px 0px 4px 0px #697AE229 inset`,
  };
};

export default CustomShadows;
