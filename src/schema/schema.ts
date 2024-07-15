import * as yup from "yup";

export const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  channel: yup.string().required(),
  isValid: yup.boolean(),
  social: yup.object({
    twitter: yup.string(),
    facebook: yup.string(),
  }),
  primaryPhone: yup.string().matches(/^\d*$/).required(),
  secondaryPhone: yup.string().matches(/^\d*$/),
  age: yup.string().matches(/^\d*$/).required(),
  country: yup.string().required(),
  dob: yup.string().required("Date of Birth is required"),
  phNumbers: yup.array().of(
    yup.object({
      number: yup.string().matches(/^\d*$/),
      code: yup.string().required("code is required"),
    })
  ),
  range: yup.array().of(yup.number().required()),
  gender: yup.string().required(),
});
