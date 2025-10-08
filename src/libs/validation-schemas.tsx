import * as Yup from "yup";
import type { AnyObject } from "yup";

export interface MessagesOptionsI {
  required?: string;
  ref?: string;
  min?: string;
  max?: string;
}

export type ValidatorOptionsI = {
  required?: boolean;
  email?: boolean;
  min?: number | Date;
  max?: number | Date;
  matches?: RegExp;
  nullable?: boolean;
  positive?: boolean;
  integer?: boolean;
  ref?: string;
  messages?: MessagesOptionsI;
  field?: any;
  strip?: any;
  dependsOn?: {
    field: string | string[];
    is: any;
    then?: ValidatorOptionsI;
    otherwise?: ValidatorOptionsI;
  };
};

export const stringValidator = (
  options: ValidatorOptionsI = {},
): Yup.StringSchema<string | null | undefined> => {
  let schema: any = Yup.string().trim();

  if (options.required)
    schema = schema.required(
      options?.messages?.required
        ? options?.messages?.required
        : `${options?.field?.label ?? "This field"} is required`,
    );
  if (options.ref)
    schema = schema.oneOf([Yup.ref(options.ref), ""], "both will be same");
  if (options.strip) schema = schema.strip();
  if (options.email) schema = schema.email("Invalid email format");
  if (typeof options.min === "number")
    schema = schema.min(
      options.min,
      options?.messages?.min
        ? options?.messages?.min
        : `Minimum ${options.min} characters`,
    );
  if (typeof options.max === "number")
    schema = schema.max(
      options.max,
      options?.messages?.max
        ? options?.messages?.max
        : `Maximum ${options.max} characters`,
    );
  if (options.matches)
    schema = schema.matches(
      options.matches,
      options?.messages?.matches
        ? options?.messages?.matches
        : "Invalid format",
    );

  return schema;
};

export const numberValidator = (
  options: ValidatorOptionsI = {},
): Yup.NumberSchema<number | null | undefined> => {
  let schema: any = Yup.number();
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      options?.messages?.required
        ? options?.messages?.required
        : `${options?.field?.label ?? "This field"} is required`,
    );
  if (typeof options.min === "number")
    schema = schema.min(
      options.min,
      options?.messages?.min
        ? options?.messages?.min
        : `Minimum value is ${options.min}`,
    );
  if (typeof options.max === "number")
    schema = schema.max(
      options.max,
      options?.messages?.max
        ? options?.messages?.max
        : `Maximum value is ${options.max}`,
    );
  if (options.positive) schema = schema.positive("Must be positive");
  if (options.integer) schema = schema.integer("Must be an integer");

  return schema;
};

export const booleanValidator = (
  options: ValidatorOptionsI = {},
): Yup.BooleanSchema<boolean | null | undefined> => {
  let schema: any = Yup.boolean();
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      options?.messages?.required
        ? options?.messages?.required
        : `${options?.field?.label ?? "This field"} is required`,
    );

  return schema;
};

export const dateValidator = (
  options: ValidatorOptionsI = {},
): Yup.DateSchema<Date | null | undefined> => {
  let schema: any = Yup.date();
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      options?.messages?.required
        ? options?.messages?.required
        : `${options?.field?.label ?? "This field"} is required`,
    );
  if (options.min instanceof Date)
    schema = schema.min(
      options.min,
      options?.messages?.min
        ? options?.messages?.min
        : `Date must be after ${options.min.toDateString()}`,
    );
  if (options.max instanceof Date)
    schema = schema.max(
      options.max,
      options?.messages?.max
        ? options?.messages?.max
        : `Date must be before ${options.max.toDateString()}`,
    );
  if (typeof options.min === "string")
    schema = schema.min(
      Yup.ref(options.min),
      options?.messages?.min
        ? options?.messages?.min
        : `Date must be after ${options.min}`,
    );
  if (typeof options.max === "string")
    schema = schema.max(
      Yup.ref(options.max),
      options?.messages?.max
        ? options?.messages?.max
        : `Date must be before ${options.max}`,
    );
  return schema;
};

export const arrayValidator = (
  itemValidator: Yup.Schema<any>,
  options: ValidatorOptionsI = {},
): Yup.ArraySchema<any, AnyObject, any, ""> => {
  let schema: Yup.ArraySchema<any, AnyObject, any, ""> =
    Yup.array().of(itemValidator);

  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      options?.messages?.required
        ? options?.messages?.required
        : `${options?.field?.label ?? "This field"} is required`,
    );
  if (typeof options.min === "number")
    schema = schema.min(
      options.min,
      options?.messages?.min
        ? options?.messages?.min
        : `Minimum ${options.min} items required`,
    );
  if (typeof options.max === "number")
    schema = schema.max(
      options.max,
      options?.messages?.max
        ? options?.messages?.max
        : `Maximum ${options.max} items allowed`,
    );

  return schema;
};

export const mixedValidator = (
  options: ValidatorOptionsI = {},
): Yup.MixedSchema<any | null | undefined> => {
  let schema: any = Yup.mixed();
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      options?.messages?.required
        ? options?.messages?.required
        : `${options?.field?.label ?? "This field"} is required`,
    );

  return schema;
};

export const objectValidator = (
  shape: Record<string, Yup.Schema<any>>,
  options: ValidatorOptionsI = {},
): Yup.ObjectSchema<any | null | undefined> => {
  let schema: any = Yup.object().shape(shape);
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      options?.messages?.required
        ? options?.messages?.required
        : `${options?.field?.label ?? "This field"} is required`,
    );

  return schema;
};

const validatorsMap: Record<
  string,
  (options: ValidatorOptionsI) => Yup.Schema<any>
> = {
  string: stringValidator,
  number: numberValidator,
  boolean: booleanValidator,
  date: dateValidator,
  array: (options) => arrayValidator(mixedValidator(), options),
  mixed: mixedValidator,
  object: (options) => objectValidator({}, options),
};

export const createValidator = (
  type: string,
  options: ValidatorOptionsI = {},
  dependenciesShape?: Record<string, Yup.Schema<any>>,
): Yup.Schema<any> => {
  const baseValidator = validatorsMap[type];
  if (!baseValidator) throw new Error(`Unsupported type: ${type}`);

  let schema: any =
    type === "object" && dependenciesShape
      ? objectValidator(dependenciesShape, options)
      : baseValidator(options);

  if (options.dependsOn) {
    const { field, is, then, otherwise } = options.dependsOn;
    schema = schema.when(field, {
      is,
      then: then ? () => createValidator(type, then) : schema,
      otherwise: otherwise ? () => createValidator(type, otherwise) : schema,
    });
  }

  return schema;
};

export const createSchema = (
  config: Record<
    string,
    {
      type: string;
      options?: ValidatorOptionsI;
      shape?: Record<string, any>;
    }
  >,
): Yup.ObjectSchema<any> => {
  const shape: Record<string, Yup.Schema<any>> = {};

  for (const key in config) {
    const { type, options = {}, shape: nestedShapeConfig } = config[key];

    if (type === "object" && nestedShapeConfig) {
      const nestedShape = createSchema(nestedShapeConfig);
      shape[key] = createValidator(
        type,
        options,
        nestedShape.fields as Record<string, Yup.Schema<any>>,
      );
    } else if (type === "array" && nestedShapeConfig) {
      const itemSchema = createSchema(nestedShapeConfig);
      shape[key] = arrayValidator(itemSchema, options);
    } else {
      shape[key] = createValidator(type, options);
    }
  }

  return Yup.object().shape(shape);
};

//example usage
const schemaConfig = {
  name: {
    type: "string",
    options: { required: true, min: 2 },
  },
  age: {
    type: "number",
    options: { required: true, min: 18 },
  },
  email: {
    type: "string",
    options: {
      dependsOn: {
        field: "subscribe",
        is: true,
        then: { required: true, email: true },
        otherwise: { required: false },
      },
    },
  },
  subscribe: {
    type: "boolean",
    options: {},
  },
  profile: {
    type: "object",
    options: { required: true },
    shape: {
      bio: {
        type: "string",
        options: { max: 160 },
      },
      birthday: {
        type: "date",
        options: { required: true, min: new Date(1900, 0, 1) },
      },
    },
  },
  tags: {
    type: "array",
    options: { min: 1 },
    shape: {
      tagName: {
        type: "string",
        options: { required: true },
      },
    },
  },
};

export const notUsedSampleSchema = createSchema(schemaConfig);
