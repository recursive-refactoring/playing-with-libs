import * as Yup from "yup";
import type { AnyObject } from "yup";
import { DependsOnI, MessagesOptionsI, ValidatorOptionsI } from "../interfaces";
import { DEFAULT_VALIDATION_MESSAGES } from "../constants";

const getMessage = (
  type: string,
  message?: string,
  defaultMessageOptions?: any,
) => {
  return message
    ? message
    : DEFAULT_VALIDATION_MESSAGES?.[type](
        defaultMessageOptions?.label,
        defaultMessageOptions?.comparer,
      );
};

const applyDependsOn = (
  schema: any,
  dependsOn?: DependsOnI,
  validatorFactory?: any,
  baseOptions?: Record<string, any>,
) => {
  const { field, is, then, otherwise }: any = dependsOn;

  return schema.when(field, {
    is,
    then:
      then && validatorFactory
        ? () => validatorFactory({ ...baseOptions, ...then })
        : schema,
    otherwise:
      otherwise && validatorFactory
        ? () => validatorFactory({ ...baseOptions, ...otherwise })
        : schema,
  });
};

export const stringValidator = (
  options: ValidatorOptionsI = {},
  messages?: MessagesOptionsI,
  dependsOn?: DependsOnI,
): Yup.StringSchema<string | null | undefined> => {
  let schema: any = Yup.string().trim();

  if (options.required)
    schema = schema.required(
      getMessage("required", messages?.required, { label: options.label }),
    );
  if (options.ref)
    schema = schema.oneOf([Yup.ref(options.ref), ""], "both will be same");
  if (options.strip) schema = schema.strip();
  if (options.email)
    schema = schema.email(
      getMessage("email", messages?.email, { label: options.label }),
    );
  if (typeof options.min === "number")
    schema = schema.min(
      options.min,
      getMessage("min", messages?.min, {
        label: options.label,
        comparer: options.min,
      }),
    );
  if (typeof options.max === "number")
    schema = schema.max(
      options.max,
      getMessage("max", messages?.max, {
        label: options.label,
        comparer: options.max,
      }),
    );
  if (options.matches)
    schema = schema.matches(
      options.matches,
      getMessage("matches", messages?.matches, {
        label: options.label,
        comparer: options.matches,
      }),
    );

  if (!dependsOn) return schema;
  return applyDependsOn(schema, dependsOn, stringValidator, options);
};

export const numberValidator = (
  options: ValidatorOptionsI = {},
  messages?: MessagesOptionsI,
  dependsOn?: DependsOnI,
): Yup.NumberSchema<number | null | undefined> => {
  let schema: any = Yup.number();
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      getMessage("required", messages?.required, { label: options.label }),
    );
  if (typeof options.min === "number")
    schema = schema.min(
      options.min,
      getMessage("min", messages?.min, {
        label: options.label,
        comparer: options.min,
      }),
    );
  if (typeof options.max === "number")
    schema = schema.max(
      options.max,
      getMessage("max", messages?.max, {
        label: options.label,
        comparer: options.max,
      }),
    );
  if (options.positive)
    schema = schema.positive(
      getMessage("positive", messages?.positive, { label: options.label }),
    );
  if (options.integer)
    schema = schema.integer(
      getMessage("integer", messages?.integer, { label: options.label }),
    );

  if (!dependsOn) return schema;
  return applyDependsOn(schema, dependsOn, stringValidator, options);
};

export const booleanValidator = (
  options: ValidatorOptionsI = {},
  messages?: MessagesOptionsI,
  dependsOn?: DependsOnI,
): Yup.BooleanSchema<boolean | null | undefined> => {
  let schema: any = Yup.boolean();
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      getMessage("required", messages?.required, { label: options.label }),
    );

  return schema;
};

export const dateValidator = (
  options: ValidatorOptionsI = {},
  dependsOn?: DependsOnI,
  messages?: MessagesOptionsI,
): Yup.DateSchema<Date | null | undefined> => {
  let schema: any = Yup.date();
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      getMessage("required", messages?.required, { label: options.label }),
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
  if (!dependsOn) return schema;
  return applyDependsOn(schema, dependsOn, dateValidator, options);
};

export const arrayValidator = (
  itemValidator: Yup.Schema<any>,
  options: ValidatorOptionsI = {},
  messages?: MessagesOptionsI,
  dependsOn?: DependsOnI,
): Yup.ArraySchema<any, AnyObject, any, ""> => {
  let schema: Yup.ArraySchema<any, AnyObject, any, ""> =
    Yup.array().of(itemValidator);

  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      getMessage("required", messages?.required, { label: options.label }),
    );
  if (typeof options.min === "number")
    schema = schema.min(
      options.min,
      getMessage("min", messages?.min, {
        label: options.label,
        comparer: options.min,
      }),
    );
  if (typeof options.max === "number")
    schema = schema.max(
      options.max,
      getMessage("max", messages?.max, {
        label: options.label,
        comparer: options.max,
      }),
    );

  if (!dependsOn) return schema;
  return applyDependsOn(schema, dependsOn, arrayValidator, options);
};

export const mixedValidator = (
  options: ValidatorOptionsI = {},
  messages?: MessagesOptionsI,
  dependsOn?: DependsOnI,
): Yup.MixedSchema<any | null | undefined> => {
  let schema: any = Yup.mixed();
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      getMessage("required", messages?.required, { label: options.label }),
    );

  if (!dependsOn) return schema;
  return applyDependsOn(schema, dependsOn, mixedValidator, options);
};

export const objectValidator = (
  shape: Record<string, Yup.Schema<any>>,
  options: ValidatorOptionsI = {},
  messages?: MessagesOptionsI,
  dependsOn?: DependsOnI,
): Yup.ObjectSchema<any | null | undefined> => {
  let schema: any = Yup.object().shape(shape);
  if (options.nullable) schema = schema.nullable();

  if (options.required)
    schema = schema.required(
      getMessage("required", messages?.required, { label: options.label }),
    );

  if (!dependsOn) return schema;
  return applyDependsOn(schema, dependsOn, objectValidator, options);
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

export const generateSchema = (shape: Record<string, any>) => {
  return Yup.object().shape(shape);
};

// // Usage example:
// const userSchema = objectValidator({
//   name: stringValidator({ required: true, min: 2, label: 'Name' }),
//   age: numberValidator({ required: true, min: 18, label: 'Age' }),
//   email: stringValidator({ email: true, label: 'Email' }),
//   isActive: booleanValidator({ required: true, label: 'Active status' }),
//   tags: arrayValidator(stringValidator({ required: true }), { min: 1, label: 'Tags' }),
// });
