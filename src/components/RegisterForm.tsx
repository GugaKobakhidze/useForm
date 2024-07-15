import { Button, Grid } from "@mui/material";
import { FormValues, GenderEnum } from "../types/FormType";
import TextFieldComponent from "./fields/TextFieldComponent";
import useCountryFetch from "../hooks/useCountryFetch";
import FormComponent from "./FormComponent";
import NumberFieldComponent from "./fields/NumberFieldComponent";
import SelectComponent from "./fields/SelectComponent";
import DatePickerComponent from "./fields/DatePickerComponent";
import ArrayFieldComponent from "./ArrayFieldComponent";
import CheckboxComponent from "./fields/CheckboxComponent";
import RadioGroupComponent from "./fields/RadioGroupComponent";
import RangeComponent from "./fields/RangeComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../schema/schema";

const RegisterForm = () => {
  const { countries } = useCountryFetch();

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      isValid: false,
      social: {
        twitter: "",
        facebook: "",
      },
      primaryPhone: "",
      secondaryPhone: "",
      age: "",
      country: "",
      dob: "",
      phNumbers: [{}],
      range: [1500, 2000],
      gender: GenderEnum.MALE,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    console.log("onSubmit", data);
    methods.reset();
  };

  return (
    <FormComponent submit={handleSubmit(onSubmit)} methods={methods}>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={4}>
          <TextFieldComponent label="User Name" name="username" />
        </Grid>
        <Grid item xs={4}>
          <TextFieldComponent label="E-mail" name="email" />
        </Grid>
        <Grid item xs={4}>
          <TextFieldComponent label="Channel" name="channel" />
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={4}>
          <TextFieldComponent label="Twitter" name="social.twitter" />
        </Grid>
        <Grid item xs={4}>
          <TextFieldComponent label="Facebook" name="social.facebook" />
        </Grid>
        <Grid item xs={4}>
          <NumberFieldComponent label="Age" name="age" />
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={4}>
          <NumberFieldComponent label="Primary Phone" name="primaryPhone" />
        </Grid>
        <Grid item xs={4}>
          <NumberFieldComponent label="Secondary Phone" name="secondaryPhone" />
        </Grid>
        <Grid item xs={4}>
          <SelectComponent
            label="Select Country"
            name="country"
            options={countries?.map(
              (country: { cca3: string; name: { common: string } }) =>
                ({
                  value: country.cca3,
                  label: country.name.common,
                } || [])
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DatePickerComponent label="Date" name="dob" />
        </Grid>
      </Grid>
      <Grid container>
        <ArrayFieldComponent />
      </Grid>
      <Grid container mt={1}>
        <Grid item xs={4} textAlign="start">
          <CheckboxComponent name="isValid" label="Set As Valid" />
        </Grid>
        <Grid item xs={12} textAlign={"start"} mt={2}>
          <RadioGroupComponent
            name="gender"
            label="Choose Gender"
            options={Object.values(GenderEnum).map((gender) => ({
              value: gender,
              label: gender,
            }))}
          />
        </Grid>
        <Grid item xs={4} mb={2}>
          <RangeComponent label="Range of the Sallary" name="range" />
        </Grid>
      </Grid>
      <Grid container mb={2}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Grid>
    </FormComponent>
  );
};

export default RegisterForm;
