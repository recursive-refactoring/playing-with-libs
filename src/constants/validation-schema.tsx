import * as Yup from "yup";
import { DEFAULT_VALIDATION_MESSAGES } from "./messages";

const getMessage = (
  type: string,
  message?: string,
  defaultMessageOptions?: any,
) => {
  if (message) return message;
  return DEFAULT_VALIDATION_MESSAGES?.[type](
    defaultMessageOptions?.label,
    defaultMessageOptions?.comparer,
  );
};

export const VALIDATION_RULES = {
  required: (schema: any, options: any, messages: any) =>
    schema.required(
      getMessage("required", messages?.required, { label: options.label }),
    ),

  email: (schema: any, options: any, messages: any) =>
    schema.email(
      getMessage("email", messages?.email, { label: options.label }),
    ),

  min: (schema: any, options: any, messages: any) =>
    schema.min(
      options.min,
      getMessage("min", messages?.min, {
        label: options.label,
        comparer: options.min,
      }),
    ),

  max: (schema: any, options: any, messages: any) =>
    schema.max(
      options.max,
      getMessage("max", messages?.max, {
        label: options.label,
        comparer: options.max,
      }),
    ),

  matches: (schema: any, options: any, messages: any) =>
    schema.matches(
      options.matches,
      getMessage("matches", messages?.matches, {
        label: options.label,
        comparer: options.matches,
      }),
    ),

  strip: (schema: any) => schema.strip(),

  ref: (schema: any, options: any, messages: any) =>
    schema.oneOf(
      [Yup.ref(options.ref), ""],
      getMessage("ref", messages?.integer, { label: options.label }),
    ),

  positive: (schema: any, options: any, messages: any) =>
    schema.positive(
      getMessage("positive", messages?.positive, { label: options.label }),
    ),

  integer: (schema: any, options: any, messages: any) =>
    schema.integer(
      getMessage("integer", messages?.integer, { label: options.label }),
    ),

  nullable: (schema: any) => schema.nullable(),

  minRef: (schema: any, options: any, messages: any) =>
    schema.min(
      Yup.ref(options.minRef),
      getMessage("minRef", messages?.positive, { label: options.label }),
    ),

  maxRef: (schema: any, options: any, messages: any) =>
    schema.max(
      Yup.ref(options.maxRef),
      getMessage("maxRef", messages?.positive, { label: options.label }),
    ),

  minDate: (schema: any, options: any, messages: any) =>
    schema.min(
      options.minDate,
      getMessage("minDate", messages?.positive, { label: options.label }),
    ),

  maxDate: (schema: any, options: any, messages: any) =>
    schema.max(
      options.maxDate,
      getMessage("maxDate", messages?.positive, { label: options.label }),
    ),
};
