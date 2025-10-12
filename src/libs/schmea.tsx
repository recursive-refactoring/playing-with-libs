import * as Yup from "yup";
import { useMemo } from "react"; // For React hook

// Interfaces (TypeScript-friendly; can remove if plain JS)
interface ValidatorOptionsI {
  [key: string]: any; // Flexible for 100+ rules
  label?: string;
}

interface DependsOnI {
  field: string;
  is: any;
  then?: ValidatorOptionsI;
  otherwise?: ValidatorOptionsI;
}

interface MessagesOptionsI {
  [key: string]: string;
}

// Default messages (assume imported or defined)
const DEFAULT_VALIDATION_MESSAGES: Record<
  string,
  (label: string, comparer?: any) => string
> = {
  required: (label) => `${label} is required`,
  email: (label) => `${label} must be a valid email`,
  min: (label, comparer) => `${label} must be at least ${comparer}`,
  max: (label, comparer) => `${label} must be at most ${comparer}`,
  // Add more defaults for 100+ rules as needed
};

// Optimized message getter
const getMessage = (
  type: string,
  message?: string,
  label?: string,
  comparer?: any,
): string => {
  if (message) return message;
  const msgFn = DEFAULT_VALIDATION_MESSAGES[type];
  return msgFn
    ? msgFn(label || "field", comparer)
    : `Invalid ${type} for ${label || "field"}`;
};

// Default validation rules (extendable)
const DEFAULT_VALIDATION_RULES: Record<
  string,
  (schema: any, options: any, messages: any) => any
> = {
  required: (schema, options, messages) =>
    schema.required(getMessage("required", messages.required, options.label)),
  email: (schema, options, messages) =>
    schema.email(getMessage("email", messages.email, options.label)),
  min: (schema, options, messages) =>
    schema.min(
      options.min,
      getMessage("min", messages.min, options.label, options.min),
    ),
  max: (schema, options, messages) =>
    schema.max(
      options.max,
      getMessage("max", messages.max, options.label, options.max),
    ),
  matches: (schema, options, messages) =>
    schema.matches(
      options.matches,
      getMessage("matches", messages.matches, options.label, options.matches),
    ),
  strip: (schema) => schema.strip(),
  ref: (schema, options, messages) =>
    schema.oneOf(
      [Yup.ref(options.ref), ""],
      getMessage("ref", messages.ref, options.label),
    ),
  positive: (schema, options, messages) =>
    schema.positive(getMessage("positive", messages.positive, options.label)),
  integer: (schema, options, messages) =>
    schema.integer(getMessage("integer", messages.integer, options.label)),
  nullable: (schema) => schema.nullable(),
  minRef: (schema, options, messages) =>
    schema.min(
      Yup.ref(options.minRef),
      getMessage("minRef", messages.minRef, options.label),
    ),
  maxRef: (schema, options, messages) =>
    schema.max(
      Yup.ref(options.maxRef),
      getMessage("maxRef", messages.maxRef, options.label),
    ),
  minDate: (schema, options, messages) =>
    schema.min(
      options.minDate,
      getMessage("minDate", messages.minDate, options.label),
    ),
  maxDate: (schema, options, messages) =>
    schema.max(
      options.maxDate,
      getMessage("maxDate", messages.maxDate, options.label),
    ),
  // Add more rules here for extensibility (up to 100+)
};

// Default validators map
const DEFAULT_VALIDATORS_MAP: Record<string, (shape?: any) => any> = {
  string: () => Yup.string().trim(),
  number: () => Yup.number(),
  boolean: () => Yup.boolean(),
  mixed: () => Yup.mixed(),
  date: () => Yup.date(),
  array: (shape: any) => Yup.array().of(shape),
  object: (shape: any) => Yup.object().shape(shape),
  // Add custom types as needed
};

// Cache for schemas (global to avoid React re-renders; clear if memory issue)
const schemaCache = new Map<string, any>();

const generateCacheKey = (type: string, validatorsOptions: any): string => {
  const { options, dependsOn, messages, shape } = validatorsOptions || {};
  // Stringify for key; sort shape keys for consistency
  const shapeKey = shape
    ? JSON.stringify(
        Object.keys(shape)
          .sort()
          .reduce(
            (acc, key) => ({ ...acc, [key]: generateCacheKey("", shape[key]) }),
            {},
          ),
      )
    : null;
  return JSON.stringify(
    { type, options, dependsOn, messages, shape: shapeKey },
    (key, value) => (value instanceof RegExp ? value.toString() : value),
  );
};

// Optimized rule application
const applyRules = (
  schema: any,
  options: ValidatorOptionsI = {},
  messages: MessagesOptionsI = {},
  validationRules: Record<
    string,
    (schema: any, options: any, messages: any) => any
  > = DEFAULT_VALIDATION_RULES,
): any => {
  if (!options) return schema;
  Object.keys(options).forEach((key) => {
    const rule = validationRules[key];
    if (rule) {
      schema = rule(schema, options, messages);
    }
  });
  return schema;
};

// Optimized conditional application
const applyDependsOn = (
  schema: any,
  dependsOn?: DependsOnI,
  messages?: MessagesOptionsI,
  validatorsMap?: Record<string, (shape?: any) => any>,
  validationRules?: Record<
    string,
    (schema: any, options: any, messages: any) => any
  >,
): any => {
  if (!dependsOn?.field || !dependsOn.is || !dependsOn.then) return schema;
  const thenOptions = { options: dependsOn.then, messages, shape: undefined }; // No shape for conditional
  const otherwiseOptions = dependsOn.otherwise
    ? { options: dependsOn.otherwise, messages, shape: undefined }
    : null;
  const thenSchema = applyValidators(
    "",
    thenOptions,
    validatorsMap,
    validationRules,
  ); // "" type for clone
  const otherwiseSchema = otherwiseOptions
    ? applyValidators("", otherwiseOptions, validatorsMap, validationRules)
    : schema;
  return schema.when(dependsOn.field, {
    is: dependsOn.is,
    then: () => thenSchema,
    otherwise: () => otherwiseSchema,
  });
};

// Main validator function
export const applyValidators = (
  type: string,
  validatorsOptions: any = {},
  validatorsMap: Record<string, (shape?: any) => any> = DEFAULT_VALIDATORS_MAP,
  validationRules: Record<
    string,
    (schema: any, options: any, messages: any) => any
  > = DEFAULT_VALIDATION_RULES,
): any => {
  const { options = {}, dependsOn, messages = {}, shape } = validatorsOptions;

  // Cache check
  const cacheKey = generateCacheKey(type, validatorsOptions);
  const cached = schemaCache.get(cacheKey);
  if (cached) return cached;

  const validator = validatorsMap[type];
  if (!validator) return null;

  let schema = validator(shape);

  schema = applyRules(schema, options, messages, validationRules);

  if (dependsOn) {
    schema = applyDependsOn(
      schema,
      dependsOn,
      messages,
      validatorsMap,
      validationRules,
    );
  }

  schemaCache.set(cacheKey, schema);
  return schema;
};

// Clear cache (call in React if needed, e.g., on unmount)
export const clearSchemaCache = () => schemaCache.clear();

// React hook for memoized validator
export const useValidator = (
  type: string,
  validatorsOptions: any = {},
  deps: any[] = [], // Dependencies for useMemo
  validatorsMap?: Record<string, (shape?: any) => any>,
  validationRules?: Record<
    string,
    (schema: any, options: any, messages: any) => any
  >,
): any => {
  return useMemo(
    () =>
      applyValidators(type, validatorsOptions, validatorsMap, validationRules),
    [type, JSON.stringify(validatorsOptions), ...deps], // Stringify for deep comparison
  );
};
