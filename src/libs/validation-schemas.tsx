// import * as Yup from "yup";
// import { DependsOnI, MessagesOptionsI, ValidatorOptionsI } from "../interfaces";
// import { VALIDATION_RULES } from "@/constants/validation-schema";

// function applyRules(
//   schema: any,
//   options?: ValidatorOptionsI,
//   messages?: MessagesOptionsI,
// ) {
//   for (const key in options) {
//     const rule = VALIDATION_RULES[key as keyof typeof VALIDATION_RULES];
//     if (rule) {
//       schema = rule(schema, options, messages);
//     }
//   }

//   return schema;
// }

// const applyDependsOn = (
//   schema: any,
//   dependsOn?: DependsOnI,
//   messages?: any,
// ) => {
//   const { field, is, then, otherwise }: any = dependsOn;
//   if (!is || !then) return schema;
//   const thenSchema = applyRules(schema, then, messages);
//   const otherwiseSchema = otherwise
//     ? applyRules(schema, otherwise, messages)
//     : schema;
//   return schema.when(field, {
//     is,
//     then: () => thenSchema,
//     otherwise: () => otherwiseSchema,
//   });
// };

// export const VALIDATORS_MAP: any = {
//   string: () => Yup.string().trim(),
//   number: () => Yup.number(),
//   boolean: () => Yup.boolean(),
//   mixed: () => Yup.mixed(),
//   date: () => Yup.date(),
//   array: (shape: any) => Yup.array().of(shape),
//   object: (shape: any) => Yup.object().shape(shape),
// };

// export const applyValidators = (type: any, validatorsOptions: any = {}) => {
//   const { options, dependsOn, messages, shape } = validatorsOptions || {};

//   let validator = VALIDATORS_MAP?.[type];
//   if (!validator) return;

//   let schema = validator(shape);

//   if (!!options) {
//     schema = applyRules(schema, options, messages);
//   }

//   if (!dependsOn) return schema;
//   return applyDependsOn(schema, dependsOn, messages);
// };

// // Usage example:
// const userSchema = objectValidator({
//   name: stringValidator({ required: true, min: 2, label: 'Name' }),
//   age: numberValidator({ required: true, min: 18, label: 'Age' }),
//   email: stringValidator({ email: true, label: 'Email' }),
//   isActive: booleanValidator({ required: true, label: 'Active status' }),
//   tags: arrayValidator(stringValidator({ required: true }), { min: 1, label: 'Tags' }),
// });

import * as Yup from "yup";

export function createStringBuilder() {
  let schema = Yup.string();
  let labelText: string | undefined;

  const api = {
    label(text: string) {
      labelText = text;
      return api;
    },

    trim(value: boolean = true) {
      if (value) schema = schema.trim();
      return api;
    },

    required(message?: string) {
      const msg = message ?? `${labelText ?? "Field"} is required`;
      schema = schema.required(msg);
      return api;
    },

    email(message?: string) {
      const msg = message ?? `${labelText ?? "Field"} must be a valid email`;
      schema = schema.email(msg);
      return api;
    },

    min(value: number, message?: string) {
      const msg = message ?? `Minimum ${value} characters required`;
      schema = schema.min(value, msg);
      return api;
    },

    max(value: number, message?: string) {
      const msg = message ?? `Maximum ${value} characters allowed`;
      schema = schema.max(value, msg);
      return api;
    },

    matches(regex: RegExp, message: string) {
      schema = schema.matches(regex, message);
      return api;
    },

    when(
      keys: string | string[],
      options: Parameters<Yup.StringSchema["when"]>[1],
    ) {
      schema = schema.when(keys as any, options as any);
      return api;
    },

    build() {
      return schema;
    },
  };

  return api;
}

export const V = {
  string: () => createStringBuilder(),
  objectShape: (shape: Record<string, Yup.AnySchema>) =>
    Yup.object().shape(shape),
};
