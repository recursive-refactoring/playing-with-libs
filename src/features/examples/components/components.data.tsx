import SingleCheckboxFormField from "@/components/form-fields/single-checkbox-form-field";
import TextAreaFormFields from "@/components/form-fields/text-area-form-field";
import TextFormFields from "@/components/form-fields/text-form-field";
import * as Yup from "yup";
import { SingleAutocompleteSyncFormField } from "@/components/form-fields/autocomplete-form-fields";
import { createSchema } from "@/libs/validation-schemas";
import { ASSET_FIELD_VALUE_TYPE } from "@/constants/assets";

export const DYNAMIC_FIELDS_COMPONENTS: any = {
  [ASSET_FIELD_VALUE_TYPE?.STRING]: TextFormFields,
  [ASSET_FIELD_VALUE_TYPE?.MONEY]: TextFormFields,
  [ASSET_FIELD_VALUE_TYPE?.TIMESTAMP]: TextFormFields,
};

export const DYNAMIC_FIELDS_SCHEMA_TYPES: Record<string, () => any> = {
  [ASSET_FIELD_VALUE_TYPE?.STRING]: () => Yup.string(),
  [ASSET_FIELD_VALUE_TYPE?.MONEY]: () => Yup.string(),
  [ASSET_FIELD_VALUE_TYPE?.TIMESTAMP]: () => Yup.string(),
};

export const DYNAMIC_FIELDS_DEFAULT_VALUES: any = {
  [ASSET_FIELD_VALUE_TYPE?.STRING]: "",
  [ASSET_FIELD_VALUE_TYPE?.MONEY]: "",
  [ASSET_FIELD_VALUE_TYPE?.TIMESTAMP]: "",
};

export const dynamicFieldsComparer: any = {
  defaultValues: DYNAMIC_FIELDS_DEFAULT_VALUES,
  formFields: DYNAMIC_FIELDS_COMPONENTS,
  validationSchema: DYNAMIC_FIELDS_SCHEMA_TYPES,
};

export const dynamicFieldKeys: any = {
  name: "name",
  label: "name",
  required: "required",
  placeholder: "name",
  type: "fieldType",
  defaultValue: "value",
  min: "min",
};

export const dynamicFieldsData = [
  {
    _id: 1,
    name: "field1",
    fieldType: ASSET_FIELD_VALUE_TYPE?.STRING,
    value: "123",
  },
  {
    _id: 2,
    name: "field2",
    fieldType: ASSET_FIELD_VALUE_TYPE?.MONEY,
    value: "13",
  },
  {
    _id: 3,
    name: "field3",
    fieldType: ASSET_FIELD_VALUE_TYPE?.TIMESTAMP,
    value: "22",
  },
];

export const dynamicFieldsDataTwo = [
  {
    _id: 1,
    name: "dataField1",
    fieldType: ASSET_FIELD_VALUE_TYPE?.STRING,
  },
  {
    _id: 2,
    name: "dataField2",
    fieldType: ASSET_FIELD_VALUE_TYPE?.MONEY,
  },
  {
    _id: 3,
    name: "dataField3",
    fieldType: ASSET_FIELD_VALUE_TYPE?.MONEY,
  },
  {
    _id: 4,
    name: "dataField4",
    fieldType: ASSET_FIELD_VALUE_TYPE?.TIMESTAMP,
  },
  {
    _id: 5,
    name: "dataField5",
    fieldType: ASSET_FIELD_VALUE_TYPE?.TIMESTAMP,
  },
  {
    _id: 6,
    name: "dataField6",
    fieldType: ASSET_FIELD_VALUE_TYPE?.STRING,
  },
];

export const singleData = {
  uniqueId: "xyz@yopmail.com",
  name: "..........",
  message: "abc",
  typeId: {
    _id: 1,
    label: "d",
  },
  fields: dynamicFieldsData,
};

export const columnsDynamic = [
  {
    accessorKey: "firstName",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row.lastName,
    id: "lastName",
    cell: (info: any) => info.getValue(),
    header: "Last Name",
    isSortable: true,
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];

export const data = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    visits: 3,
    rank: "hi",
    status: "Active",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    visits: 3,
    rank: "hi",
    status: "Active",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    visits: 3,
    rank: "hi",
    status: "Active",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    visits: 3,
    rank: "hi",
    status: "Active",
  },
];

export const signinFormValidationSchema = (fields?: any) => {
  const baseSchema: any = {
    uniqueId: Yup.string().trim().required("Unique ID is required"),
    name: Yup.string().trim().required("Display Name is required"),
    typeId: Yup.mixed().nullable(),
    ...fields,
  };

  return Yup.object().shape(baseSchema);
};

export const validationSchema = Yup.object().shape({
  name: Yup.string(),
  evidenceRequirement: Yup.string(),
  isRestricted: Yup.string(),
  users: Yup.array().when("isRestricted", {
    is: (value: string) => value === "RESTRICTED",
    then: (schema: any) => schema.min(1, "Users are required"),
    otherwise: (schema: any) => schema.notRequired(),
  }),
});

export const signinValidationSchema = createSchema({
  uniqueId: {
    type: "string",
    options: {
      required: true,
    },
  },
  name: {
    type: "string",
    options: {
      ref: "uniqueId",
      messages: {
        ref: "both will be same",
      },
      // dependsOn: {
      //   field: "uniqueId",
      //   is: "123",
      //   then: { required: true, max: 4 },
      //   otherwise: { required: false, min: 7 },
      // },
    },
  },
  remember: {
    type: "boolean",
    options: {
      required: true,
    },
  },
  typeId: {
    type: "mixed",
    options: {
      nullable: true,
      required: true,
    },
  },
});

export const signinFormDefaultValues = (fields?: any, beData?: any) => {
  const baseDefaults: any = {
    uniqueId: beData?.uniqueId ?? "",
    name: beData?.name ?? "",
    typeId: beData?.typeId
      ? {
          _id: beData?.typeId?._id ?? beData?.typeId,
          name: beData?.typeId?.name ?? beData?.typeName ?? "",
        }
      : null,
    ...fields,
  };

  return baseDefaults;
};

export const signinFormFieldDynamic = (onTypeChangeHandler: any) => [
  {
    _id: 2,
    componentProps: {
      name: "uniqueId",
      label: "unique Id",
    },
    component: TextFormFields,
  },
  {
    _id: 3,
    componentProps: {
      name: "name",
      label: "Name",
    },
    component: TextAreaFormFields,
  },
  {
    _id: 4,
    componentProps: {
      name: "remember",
      label: " Remember Me",
    },
    component: SingleCheckboxFormField,
  },
  {
    _id: 5,
    componentProps: {
      name: "typeId",
      label: "Type",
      options: [
        {
          _id: 1,
          name: "site1",
        },
        {
          _id: 1,
          name: "site2",
        },
      ],
      customOnChangeHandler: onTypeChangeHandler,
    },
    component: SingleAutocompleteSyncFormField,
  },
  {
    _id: 6,
    componentProps: {
      name: "siteId",
      label: "Site",
      options: [
        {
          _id: 1,
          name: "site1",
        },
        {
          _id: 1,
          name: "site2",
        },
      ],
    },
    component: SingleAutocompleteSyncFormField,
  },
];

export const formData: any = {
  field1: "field1Value",
  field2: "field2Value",
  field3: "field3Value",
  name: "1222",
  description: "som descrotp",
};
export const fieldValue = "stringValue";
export const fieldKey = "name";

export const dataToSendObject: any = {
  fieldId: "_id",
  name: "name",
  fieldType: "fieldType",
  stringValue: "name",
};

export const dataToSend: any = [
  {
    fieldId: "",
    name: "",
    fieldType: "",
    stringValue: "",
  },
  {
    fieldId: "",
    name: "",
    fieldType: "",
    stringValue: "",
  },
  {
    fieldId: "",
    name: "",
    fieldType: "",
    stringValue: "",
  },
];

export const fieldArray = [
  {
    _id: 1,
    name: "field1",
    fieldType: "text",
  },
  {
    _id: 2,
    name: "field2",
    fieldType: "text",
  },
  {
    _id: 3,
    name: "field3",
    fieldType: "number",
  },
];
