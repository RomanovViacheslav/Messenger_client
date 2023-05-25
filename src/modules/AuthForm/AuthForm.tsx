import React from 'react';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { Typography } from '@mui/material';
import { Button, Link, TextField } from '../../components';
import { PATHS } from '../../constants';
import { validationSchema } from './helpers';
import { INITIAL_VALUES } from './AuthForm.constants';

export const AuthForm = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
        label="Login"
        placeholder="Login"
        name="login"
        value={formik.values.login}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.errors.login) && formik.touched.login}
        errorText={formik.touched.login ? formik.errors.login : formik.errors.login}
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Password"
        name="password"
        value={formik.values.login}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.errors.login) && formik.touched.login}
        errorText={formik.touched.login ? formik.errors.login : formik.errors.login}
      />
      {/* {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )} */}
      <Box mt="90px">
        <Button buttonText="Submit" type="submit" />
      </Box>
      <Link to={PATHS.MAIN}>Create account</Link>
    </Box>
  );
};
