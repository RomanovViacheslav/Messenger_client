import React, { FormEvent, useState, ChangeEvent, useCallback } from 'react';
import { Box } from '@mui/system';
import { SelectChangeEvent, useTheme } from '@mui/material';
import { Button, TextField, SelectField } from '../../components';

export const RegistrationForm = () => {
  const [value, setValue] = useState({
    value: '',
    desc: '',
  });
  const [selectedOption, setSelectedOption] = useState('');

  const currentTheme = useTheme();

  console.log('Spacing: ', currentTheme);

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue((prevTask) => ({
      ...prevTask,
      value: event.target.value,
    }));
  }, []);

  const handleDescChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue((prevTask) => ({
      ...prevTask,
      desc: event.target.value,
    }));
  }, []);

  const handleOptionChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedOption(event.target.value as string);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
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
      <TextField
        type="Email"
        label="Email"
        placeholder="Email"
        value={value.value}
        onChange={handleNameChange}
      />
      <TextField
        type="text"
        label="Login"
        placeholder="Login"
        value={value.desc}
        onChange={handleDescChange}
        errorText="Not not not"
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Password"
        value={value.desc}
        onChange={handleDescChange}
        errorText="Not not not"
      />
      <TextField
        type="text"
        label="Name"
        placeholder="Password"
        value={value.desc}
        onChange={handleDescChange}
      />
      <Box mt="90px">
        <Button buttonText="Next" type="submit" />
      </Box>
    </Box>
  );
};
