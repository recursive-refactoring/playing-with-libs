import { DATE_TIME_FORMATS } from "@/constants/date-time.constant";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export type DayjsI = Dayjs;

export const nowDate = () => dayjs();

export const generateDate = (date: string | Date) => dayjs(date);

export const localeDateTime = (date: string, format?: string) => {
  const localeDate = dayjs(date?.slice?.(0, -1));
  const formattedDate = !!format
    ? localeDate?.format(format)
    : new Date(localeDate?.format());
  return formattedDate;
};

export const isoDateTimeString = (date: Date | any) =>
  dayjs(date)?.format(DATE_TIME_FORMATS?.ISO_STRING);

export const otherDateTimeFormat = (
  date?: Date | string | Dayjs,
  format?: string,
) => dayjs(date)?.format(format);

export const stringToDate = (string: string | Dayjs, format?: string) =>
  dayjs(string, format);

export const formatTimeAgo = (date: string) => {
  return dayjs(date).fromNow();
};

export const getPastDate = (
  duration: number = 1,
  unit: ManipulateType = "day",
) => {
  return dayjs().subtract(duration, unit);
};

export const isBeforeDate = (
  date?: Date | string | Dayjs,
  dateToCompare: Date | string | Dayjs = new Date(),
) => {
  return dayjs(date).isBefore(dayjs(dateToCompare));
};

export const getFutureDate = (
  days: number = 1,
  unit: ManipulateType = "day",
) => {
  return dayjs().add(days, unit);
};

export const formatToDate = (value: any) => dayjs(value).toDate();

export const getDayOfWeek = (date: any) => dayjs(date).toDate().getDay();
