export const generateValidationSchemas = (
  fieldData: any,
  fieldKeys: any = {},
  comparer: any,
) => {
  const validator = comparer?.[fieldData?.[fieldKeys?.type]];
  if (!validator) return {};

  let schema = validator();
  if (fieldData?.[fieldKeys?.required]) {
    schema = schema.required(`${fieldData?.[fieldKeys?.required]} is required`);
  }
  return schema;
};

export const generateFormFields = (
  fieldData: any,
  fieldKeys: any = {},
  comparer: any,
) => {
  const type = comparer?.[fieldData?.[fieldKeys?.type]];

  if (!!!type) return;
  const field = {
    id: fieldData?._id,
    componentProps: {
      name: fieldData?.[fieldKeys.name],
      label: fieldData?.[fieldKeys?.name],
      required: fieldData?.[fieldKeys?.required] ?? false,
      placeholder: `Enter ${fieldData?.[fieldKeys?.name]}`,
      size: "small",
    },
    component: type,
  };
  return field;
};

export const generateDefaultValues = (
  fieldData: any,
  fieldKeys: any = {},
  comparer: any,
) => {
  const defaultValue =
    fieldData?.[fieldKeys?.defaultValue] ??
    comparer?.[fieldData?.[fieldKeys?.type]] ??
    "";
  return defaultValue;
};

export const generateDynamicForm = (
  data: any,
  comparer = {
    defaultValues: "",
    formFields: "",
    validationSchema: "",
  },
  fieldKeys: any = {
    name: "name",
    label: "name",
    required: "required",
    placeholder: "name",
    component: "fieldType",
  },
) => {
  const formFields: any[] = [];
  const validationSchemas: any = {};
  const defaultValues: any = {};

  if (data?.length === 0)
    return { formFields, validationSchemas, defaultValues };

  for (let i = 0; i < data?.length; i++) {
    const fieldData = data?.[i];
    const field = generateFormFields(
      fieldData,
      fieldKeys,
      comparer?.formFields,
    );
    const schema = generateValidationSchemas(
      fieldData,
      fieldKeys,
      comparer?.validationSchema,
    );
    const defaultValue = generateDefaultValues(
      fieldData,
      fieldKeys,
      comparer?.defaultValues,
    );
    defaultValues[fieldData?.[fieldKeys.name]] = defaultValue;
    validationSchemas[fieldData?.[fieldKeys.name]] = schema;
    if (!!field) {
      formFields.push(field);
    }
  }

  return { formFields, validationSchemas, defaultValues };
};

export const generateDynamicFieldsPayload = (
  fieldsData: any,
  formData: any,
  keysMap: any = {},
) => {
  const { dataToSend, fieldValueKey } = keysMap ?? {};

  const data = fieldsData?.map((field: any) => {
    const payload: any = {};
    for (const key in dataToSend) {
      if (key === fieldValueKey) {
        payload[key] = formData?.[field?.[dataToSend?.[key]]];
        continue;
      }
      payload[key] = field?.[dataToSend?.[key]];
    }
    return payload;
  });
  return data;
};
