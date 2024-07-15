import { Box, Button, Typography } from "@mui/material";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Country, FormValues } from "../types/FormType";
import NumberFieldComponent from "./fields/NumberFieldComponent";
import useCountryFetch from "../hooks/useCountryFetch";
import SelectComponent from "./fields/SelectComponent";

const ArrayFieldComponent = () => {
  const { countries } = useCountryFetch();
  const { control } = useFormContext();

  const countryDate: Country[] = countries?.map(
    ({ flags: { svg }, idd: { root, suffixes } }) => ({
      flag: svg,
      numberCode: `${root}${suffixes?.[0] ?? ""}`,
    })
  );

  const { append, fields, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const phoneNumbers = useWatch({
    name: "phNumbers",
    control,
  });

  const lastEl = phoneNumbers ? ![...phoneNumbers].pop()?.number : false;

  return (
    <Box className="inputBox arrayField" mt={2}>
      <Typography variant="body2" color={"black"} mb={2}>
        List of phone numbers
      </Typography>
      {fields.map((field, index) => (
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={2}
          className="form-control"
          key={field.id}
          mb={2}
        >
          <SelectComponent
            label="Select Country Code"
            name={`phNumbers.${index}.code` as keyof FormValues}
            options={countryDate?.map(
              ({ numberCode, flag }) =>
                ({
                  value: numberCode,
                  label: numberCode,
                  flag: flag,
                } || [])
            )}
          />
          {phoneNumbers?.[index]?.code && (
            <NumberFieldComponent
              name={`phNumbers.${index}.number` as keyof FormValues}
              label="Phone Number"
            />
          )}
          {index >= 1 && (
            <Button
              sx={{ ml: 1 }}
              variant="outlined"
              onClick={() => remove(index)}
              disabled={index < 1}
            >
              remove
            </Button>
          )}
        </Box>
      ))}
      <Button
        variant="outlined"
        onClick={() => append({ code: "", number: undefined })}
        disabled={!phoneNumbers || phoneNumbers.length === 0 || lastEl}
      >
        Add
      </Button>
    </Box>
  );
};

export default ArrayFieldComponent;
