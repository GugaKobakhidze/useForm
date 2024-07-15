import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormElementProps } from "../../types/FormType";

const CheckboxComponent: React.FC<FormElementProps> = ({ label, name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          onChange={onChange}
          value={value}
          control={<Switch />}
          label={label}
        />
      )}
    />
  );
};

export default CheckboxComponent;
