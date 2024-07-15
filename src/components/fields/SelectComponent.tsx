import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormElementProps } from "../../types/FormType";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Box,
} from "@mui/material";

interface Option {
  label: string;
  value: string | number;
  flag?: string;
}

interface SelectInputProps extends FormElementProps {
  options: Option[];
}

const SelectComponent: React.FC<SelectInputProps> = ({
  name,
  options,
  label,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <InputLabel>{label}</InputLabel>
          <Select
            sx={{ textAlign: "start", width: 375 }}
            onChange={onChange}
            value={value || ""}
            label={label}
          >
            {options.map((option) => (
              <MenuItem
                key={`${option.value}${Math.floor(Math.random() * 1000)}`}
                value={option.value}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  {option?.flag && (
                    <img
                      width={20}
                      height={15}
                      src={option.flag}
                      alt={option.label}
                    />
                  )}
                  {option.label}
                </Box>
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default SelectComponent;
