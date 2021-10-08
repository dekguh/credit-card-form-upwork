import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import Forms from "./Forms";

const MainContainer = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 30px auto;
`;

const Signup = () => {
  const {
    handleSubmit,
    values,
    handleChange,
    setFieldValue,
    isSubmitting,
    errors,
    touched
  } = useFormik({
    initialValues: {},
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values);
    }
  });

  return (
    <MainContainer onSubmit={handleSubmit}>
      <Forms
        handleChange={handleChange}
        setFieldValue={setFieldValue}
        values={values}
        errors={errors}
        touched={touched}
      />
    </MainContainer>
  );
};

export default Signup;
