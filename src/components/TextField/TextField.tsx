import React from 'react';

import { TextFieldProps } from './TextField.types';
import {
  StyledInput,
  StyledInputLabel,
  StyledFormHelperText,
  StyledFormControl,
} from './TextField.styled';

export const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  errorText,
  type,
  error,
  ...props
}: TextFieldProps) => (
  <StyledFormControl variant="standard">
    <StyledInputLabel shrink htmlFor={label}>
      {label}
    </StyledInputLabel>
    <StyledInput
      placeholder={placeholder}
      id={label}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      {...props}
    />
    {error && (
      <StyledFormHelperText error>
        {errorText}
      </StyledFormHelperText>
    )}
  </StyledFormControl>
);
