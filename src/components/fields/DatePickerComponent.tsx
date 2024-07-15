import React from "react";
import { FormElementProps } from "../../types/FormType";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

const DatePickerComponent: React.FC<FormElementProps> = ({ label, name }) => {
  // const castedErrors = name as keyof typeof errors;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          type="date"
          onChange={onChange}
          value={value}
          error={!!error?.message}
          label={label}
          variant="outlined"
          helperText={error?.message}
        />
      )}
    />
  );
};

export default DatePickerComponent;
