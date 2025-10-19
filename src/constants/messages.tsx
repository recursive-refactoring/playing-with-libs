export const API_MESSAGES = {
  SOMETHING_WENT_WRONG: "Something went wrong",
  OPERATION_IS_SUCCESSFUL: "Operation is successful",
  SUCCESS: "Success",
  NO_DATA_FOUND: "No data found",
};

export const UI_MESSAGES = {
  NO_PAGE_FOUND: "No page found",
};

export const DEFAULT_VALIDATION_MESSAGES: any = {
  required: (label = "This field") => `${label} is required`,
  min: (label = "This field", min: number) =>
    `${label} must be at least ${min} characters`,
  max: (label = "This field", max: number) =>
    `${label} must be at most ${max} characters`,
  minRef: (label = "This field", min: number) =>
    `${label} must be less than ${min}`,
  maxRef: (label = "This field", max: number) =>
    `${label} must be more than ${max}`,
  minDate: (label = "This field", min: number) =>
    `${label} must be less than ${min}`,
  maxDate: (label = "This field", max: number) =>
    `${label} must be more than ${max}`,
  email: (label = "This field") => `${label} must be a valid email`,
  positive: (label = "This field") => `${label} must be positive`,
  integer: (label = "This field") => `${label} must be an integer`,
  matches: (label = "This field", format?: string) =>
    `${label} must be a valid ${format}`,
};
