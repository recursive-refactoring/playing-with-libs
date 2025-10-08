import { isoDateTimeString } from "@/libs/date-time";

export const transformObjects = (object: any) => {
  const result: any = {};

  for (const [key, value] of Object.entries(object || {})) {
    if (value instanceof Date) {
      result[key] = isoDateTimeString(value);
    } else if (typeof value === "string") {
      result[key] = value;
    } else if (Array.isArray(value)) {
      result[key] = value?.map((item) => item?._id);
    } else {
      result[key] = (value as any)?._id;
    }
  }

  return result;
};

export const buildQueryString = (params: any) => {
  const query = new URLSearchParams();

  Object?.entries(params)?.forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => query?.append(key, v));
    } else if (value !== null && value !== undefined) {
      query.append(key, String(value));
    }
  });

  return query.toString();
};

export const filteredEmptyValues = (data: Record<string, any> = {}) => {
  const result: Record<string, any> = {};

  for (const key in data) {
    const value = data[key];
    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !(Array.isArray(value) && value.length === 0)
    ) {
      result[key] = value;
    }
  }

  return result;
};
