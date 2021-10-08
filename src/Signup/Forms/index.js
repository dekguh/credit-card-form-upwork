import React from "react";
import styled from "styled-components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardDetails from "./CardDetails";


const stripePromise = loadStripe("put token here");

const SignupForm = ({
  step,
  steps,
  handleChange,
  setFieldValue,
  values,
  errors,
  touched
}) => {
  return (
    <Elements stripe={stripePromise}>
      <CardDetails
        handleChange={handleChange}
        setFieldValue={setFieldValue}
        values={values}
        errors={errors}
        touched={touched}
      />
    </Elements>
  );
};

export default SignupForm;
