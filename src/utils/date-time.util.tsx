import { nowDate } from "@/libs";

const formatTimeUnit = (diff: number, unit: string, base: number = 1) => {
  const value = Math?.floor(diff / base);
  return `${value} ${unit}${value !== 1 ? "s" : ""} ago`;
};

export const isTodayDate = (inputDate: Date) => {
  const today = new Date();

  return (
    inputDate.getFullYear() === today.getFullYear() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getDate() === today.getDate()
  );
};

export const getCurrentMonthYear = () => {
  return {
    monthNumber: nowDate().month() + 1,
    monthShort: nowDate().format("MMM"),
    monthLong: nowDate().format("MMMM"),
    year: nowDate().year(),
  };
};

export const getLastYears = (
  count: number = 5,
  includeCurrent: boolean = true,
) => {
  const currentYear = nowDate().year();
  const start = includeCurrent ? 0 : 1;
  return Array.from({ length: count }, (_, i) => currentYear - i - start);
};
