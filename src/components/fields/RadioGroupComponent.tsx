import {
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormElementProps } from "../../types/FormType";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps extends FormElementProps {
  options: Option[];
}

const RadioGroupComponent: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
}) => {
  const { control } = useFormContext();

  return (
    <>
      <FormLabel sx={{ color: "#000", fontSize: "1rem", fontWeight: 500 }}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <RadioGroup {...field}>
            {options.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            ))}
            {error && <FormHelperText>{error.message}</FormHelperText>}
          </RadioGroup>
        )}
      />
    </>
  );
};

export default RadioGroupComponent;
