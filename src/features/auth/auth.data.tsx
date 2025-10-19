import TextFormFields from "@/components/form-fields/text-form-field";
import { applyValidators } from "@/libs/validation-schemas";
import { object, string } from "yup";

export const authFormDefaultValues = (data?: any) => {
  return {
    password: data?.password ?? "",
    email: data?.email ?? "",
  };
};

// export const authFormValidationSchema = () => {
//   return object({
//     email: string().trim().email().required(""),
//     password: string()
//       .trim()
//       .min(4)
//       .when("email", {
//         is: (value: any) => !!value,
//         then: (schema: any) => schema?.required(),
//         otherwise: (schema: any) => schema?.optional(),
//       }),
//   });
// };

export const authFormValidationSchema = () => {
  return applyValidators("object", {
    shape: {
      email: applyValidators("string", {
        options: { email: true, required: true },
      }),
      password: applyValidators("string", {
        options: { max: 10 },
        dependsOn: {
          field: "email",
          is: (value: any) => value === "hi",
          then: { required: true },
          otherwise: { min: 5 },
        },
      }),
    },
  });
};

export const authFormFieldsDynamic = () => {
  return [
    {
      _id: 1,
      componentProps: {
        name: "email",
        label: "Email",
        required: true,
      },
      component: TextFormFields,
    },
    {
      _id: 2,
      componentProps: {
        name: "password",
        label: "Password",
        required: true,
      },
      component: TextFormFields,
    },
  ];
};
