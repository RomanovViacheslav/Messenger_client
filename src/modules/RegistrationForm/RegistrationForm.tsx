import React, { FormEvent, useState, ChangeEvent, useCallback } from 'react';
import { Box } from '@mui/system';
import { SelectChangeEvent, useTheme } from '@mui/material';
import { Button, Link, TextField } from '../../components';

export const RegistrationForm = () => {
  const [values, setValues] = useState({
    email: '',
    login: '',
    lastName: '',
    name: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [step, setStep] = useState(1);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const onNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="22px"
      mt="26px"
      component="form"
      onSubmit={onSubmit}
    >
      {step === 1 && (
        <>
          <TextField
            type="email"
            label="Email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            type="text"
            label="Login"
            placeholder="Login"
            value={values.login}
            name="login"
            onChange={handleChange}
            errorText="Not not not"
          />
          <TextField
            type="text"
            label="Name"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            errorText="Not not not"
          />
          <TextField
            type="text"
            label="Last name"
            placeholder="Last name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
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
            value={values.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <TextField
            type="password"
            label="Repeat password"
            placeholder="Repeat password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
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
