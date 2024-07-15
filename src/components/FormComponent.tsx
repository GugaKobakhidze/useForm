import React from "react";
import { FormProvider } from "react-hook-form";
import { FormComponentProps } from "../types/FormType";

const FormComponent: React.FC<FormComponentProps> = ({
  children,
  methods,
  submit,
}) => {
  return (
    <FormProvider {...methods}>
      <form className="formBox" onSubmit={submit}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormComponent;
