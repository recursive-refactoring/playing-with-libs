import * as Yup from "yup";

export function schemaBuilder() {
  let schema: any = Yup;
  let labelText: string | undefined;

  const api = {
    string() {
      schema = schema.string().trim();
      return api;
    },

    mixed() {
      schema = schema.mixed();
      return api;
    },

    date() {
      schema = schema.date();
      return api;
    },

    boolean() {
      schema = schema.boolean();
      return api;
    },

    number() {
      schema = schema.number();
      return api;
    },

    array() {
      schema = schema.array();
      return api;
    },

    label(text: string) {
      labelText = text || `This field`;
      return api;
    },

    default(value: any) {
      schema = schema.default(value);
      return api;
    },

    notRequired() {
      schema = schema.notRequired();
      return api;
    },

    defined() {
      schema = schema.defined();
      return api;
    },

    strict(isStrict: boolean = true) {
      schema = schema.strict(isStrict);
      return api;
    },

    transform(fn: (value: any, originalValue: any) => any) {
      schema = schema.transform(fn);
      return api;
    },

    strip() {
      schema = schema.strip();
      return api;
    },

    concat(otherSchema: Yup.AnySchema) {
      schema = schema.concat(otherSchema);
      return api;
    },

    moreThan(value: number, message?: string) {
      schema = schema.moreThan(value, message);
      return api;
    },

    lessThan(value: number, message?: string) {
      schema = schema.lessThan(value, message);
      return api;
    },

    lowercase() {
      schema = schema.lowercase();
      return api;
    },

    uppercase() {
      schema = schema.uppercase();
      return api;
    },

    uuid(message?: string) {
      schema = schema.uuid(message);
      return api;
    },

    ensure() {
      schema = schema.ensure();
      return api;
    },

    positive(message: string = `${labelText} must be positive`) {
      schema = schema.positive(message);
      return api;
    },

    negative(message: string = `${labelText} must be negative`) {
      schema = schema.negative(message);
      return api;
    },

    integer(message: string = `${labelText} must be an integer`) {
      schema = schema.integer(message);
      return api;
    },

    truncate() {
      schema = schema.truncate();
      return api;
    },

    compact(fn?: (value: any) => boolean) {
      schema = schema.compact(fn);
      return api;
    },

    of(typeSchema: Yup.AnySchema) {
      schema = schema.of(typeSchema);
      return api;
    },

    ensureArray() {
      schema = schema.ensure();
      return api;
    },

    round(method?: "ceil" | "floor" | "round" | "trunc") {
      schema = schema.round(method);
      return api;
    },

    typeError(message: string = `${labelText} is of invalid type`) {
      schema = schema.typeError(message);
      return api;
    },

    required(message: string = `${labelText} is required`) {
      schema = schema.required(message);
      return api;
    },

    email(message: string = `${labelText} is invalid email`) {
      schema = schema.email(message);
      return api;
    },

    url(message: string = `${labelText} is invalid url`) {
      schema = schema.url(message);
      return api;
    },

    min(
      value: number,
      message: string = `Minimum ${value} characters required`,
    ) {
      schema = schema.min(value, message);
      return api;
    },

    max(
      value: number,
      message: string = `Maximum ${value} characters allowed`,
    ) {
      schema = schema.max(value, message);
      return api;
    },

    length(
      value: number,
      message: string = `Must be exactly ${value} characters`,
    ) {
      schema = schema.length(value, message);
      return api;
    },

    matches(regex: RegExp, message: string) {
      schema = schema.matches(regex, message);
      return api;
    },

    oneOf(values: string[], message?: string) {
      schema = schema.oneOf(values, message);
      return api;
    },

    notOneOf(values: string[], message?: string) {
      schema = schema.notOneOf(values, message);
      return api;
    },

    oneOfRef(values: string[], message?: string) {
      const refValues = values?.map((value) => Yup.ref(value));
      schema = schema.oneOf(refValues, message);
      return api;
    },

    notOneOfRef(values: string[], message?: string) {
      const refValues = values?.map((value) => Yup.ref(value));
      schema = schema.notOneOf(refValues, message);
      return api;
    },
    nullable() {
      schema = schema.nullable();
      return api;
    },

    minRef(values: any, message: string = ``) {
      schema = schema.min(Yup.ref(values), message);
      return api;
    },

    maxRef(values: any, message: string = ``) {
      schema = schema.max(Yup.ref(values), message);
      return api;
    },

    noUnknown(allowUnknown?: boolean, message?: string) {
      schema = schema.noUnknown(allowUnknown, message);
      return api;
    },

    shape(shape: Record<string, Yup.AnySchema>) {
      schema = schema.shape(shape);
      return api;
    },

    test(...args: Parameters<Yup.MixedSchema["test"]>) {
      schema = (schema as Yup.MixedSchema).test(...args);
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

export const validationSchema = {
  objectShape: (shape: Record<string, Yup.AnySchema>) =>
    Yup.object().shape(shape),
  schema: () => schemaBuilder(),
};
