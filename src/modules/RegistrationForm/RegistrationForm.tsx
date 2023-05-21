import React, { FormEvent, useState, ChangeEvent, useCallback } from 'react';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { Button, Link, TextField } from '../../components';
import { validationSchemas } from './helpers';
import { initialValues } from './RegistrationForm.constants';
import { UserCreationEntity } from '../../domains';

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [validationSchema, setValidationSchema] = useState(validationSchemas[0]);
  const [validationStep1, setValidationStep1] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: UserCreationEntity) => {
      console.log(values);
    },
  });

  const onNextStep = async () => {
    const errors = await formik.validateForm();
    setValidationStep1(true);
    if (Object.keys(errors).length === 0) {
      const nextStep = step + 1;
      setStep(nextStep);
      setValidationSchema(validationSchemas[1]);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="22px"
      mt="26px"
      component="form"
      onSubmit={formik.handleSubmit}
    >
      {step === 1 && (
        <>
          <TextField
            type="email"
            label="Email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={
              (Boolean(formik.errors.email) && formik.touched.email) ||
              (validationStep1 && Boolean(formik.errors.email))
            }
            errorText={(formik.touched.email && formik.errors.email) || formik.errors.email}
          />
          <TextField
            type="text"
            label="Login"
            placeholder="Login"
            value={formik.values.login}
            name="login"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              (Boolean(formik.errors.login) && formik.touched.login) ||
              (validationStep1 && Boolean(formik.errors.login))
            }
            errorText={(formik.touched.login && formik.errors.login) || formik.errors.login}
          />
          <TextField
            type="text"
            label="Name"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              (Boolean(formik.errors.name) && formik.touched.name) ||
              (validationStep1 && Boolean(formik.errors.name))
            }
            errorText={(formik.touched.name && formik.errors.name) || formik.errors.name}
          />
          <TextField
            type="text"
            label="Last name"
            placeholder="Last name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              (Boolean(formik.errors.lastName) && formik.touched.lastName) ||
              (validationStep1 && Boolean(formik.errors.lastName))
            }
            errorText={
              (formik.touched.lastName && formik.errors.lastName) || formik.errors.lastName
            }
          />
          <Box mt="90px">
            <Button buttonText="Next" type="button" onClick={onNextStep} />
          </Box>
          <Link href="/">Sign in</Link>
        </>
      )}

      {step === 2 && (
        <>
          <TextField
            type="text"
            label="Phone Number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.phoneNumber) && formik.touched.phoneNumber}
            errorText={
              formik.touched.phoneNumber ? formik.errors.phoneNumber : formik.errors.phoneNumber
            }
          />
          <TextField
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.password) && formik.touched.password}
            errorText={formik.touched.password ? formik.errors.password : formik.errors.phoneNumber}
          />
          <TextField
            type="password"
            label="Repeat password"
            placeholder="Repeat password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            error={Boolean(formik.errors.confirmPassword) && formik.touched.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorText={
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : formik.errors.phoneNumber
            }
          />
          <Box mt="90px">
            <Button buttonText="Submit" type="submit" />
          </Box>
          <Link href="/">Sign in</Link>
        </>
      )}
    </Box>
  );
};
