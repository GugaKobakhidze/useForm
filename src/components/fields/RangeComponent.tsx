import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormElementProps } from "../../types/FormType";
import { Slider, Typography } from "@mui/material";

const RangeComponent: React.FC<FormElementProps> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <Typography
            color="#000"
            sx={{ fontSize: "1rem", fontWeight: 500 }}
            mt={2}
            mb={0.5}
          >
            {label}
          </Typography>
          <Slider
            value={value as number[]}
            onChange={onChange}
            defaultValue={[]}
            // aria-label="Default"
            valueLabelDisplay="auto"
            getAriaLabel={() => "Temperature range"}
            max={5000}
          />
        </>
      )}
    />
  );
};

export default RangeComponent;
