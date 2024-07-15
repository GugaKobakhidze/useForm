import {
  FilledInputProps,
  InputProps,
  OutlinedInputProps,
} from "@mui/material";
import { Paths } from "../utils/utils";
import { UseFormReturn } from "react-hook-form";

export enum GenderEnum {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}

export type FormValues = {
  username: string;
  email: string;
  channel: string;
  isValid?: boolean;
  social: {
    twitter?: string;
    facebook?: string;
  };
  primaryPhone: string;
  secondaryPhone?: string;
  age: string;
  country: string;
  dob: string;
  phNumbers?: { number?: string; code: string }[];
  range?: number[];
  gender: string;
};

export interface FormElementProps {
  label: string;
  name: Paths<FormValues>;
  inputProps?:
    | Partial<OutlinedInputProps>
    | Partial<FilledInputProps>
    | Partial<InputProps>;
}

export interface Country {
  flag: string;
  numberCode: string;
}

export interface FormComponentProps {
  children: React.ReactNode;
  methods: UseFormReturn<FormValues>;
  submit: React.FormEventHandler<HTMLFormElement>;
}
