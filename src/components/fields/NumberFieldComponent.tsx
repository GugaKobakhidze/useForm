import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormElementProps } from "../../types/FormType";

const NumberFieldComponent: React.FC<FormElementProps> = ({ label, name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          sx={{ maxWidth: 375 }}
          onChange={onChange}
          value={value || ""}
          label={label}
          fullWidth
          type="number"
          variant="outlined"
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default NumberFieldComponent;
