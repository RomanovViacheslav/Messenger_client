import React from 'react';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { Typography } from '@mui/material';
import { Button, Link, TextField } from '../../components';
import { PATHS } from '../../constants';
import { validationSchema } from './helpers';
import { INITIAL_VALUES } from './AuthForm.constants';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { loginUser } from './slice/AuthFormSlice';

export const AuthForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.login);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (values) => {
      console.log('ssss');

      dispatch(loginUser(values));
    },
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="22px"
      mt="26px"
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        type="text"
        label="Email"
        placeholder="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.errors.email) && formik.touched.email}
        errorText={formik.touched.email ? formik.errors.email : formik.errors.email}
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
        errorText={formik.touched.password ? formik.errors.password : formik.errors.password}
      />
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
      <Box mt="90px">
        <Button buttonText="Submit" type="submit" disabled={isLoading} />
      </Box>
      <Link to={PATHS.MAIN}>Create account</Link>
    </Box>
  );
};
