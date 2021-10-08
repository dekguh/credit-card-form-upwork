import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardDetails from "./CardDetails";


const stripePromise = loadStripe("put token here");

const SignupForm = ({
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
