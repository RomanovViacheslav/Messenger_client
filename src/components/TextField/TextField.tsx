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
  ...props
}: TextFieldProps) => (
  <StyledFormControl variant="standard">
    <StyledInputLabel shrink htmlFor={label}>
      {label}
    </StyledInputLabel>
    <StyledInput
      placeholder={placeholder}
      error={!!errorText}
      id={label}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
    {errorText && (
      <StyledFormHelperText error className="helper-text helper-text--error ">
        {errorText}
      </StyledFormHelperText>
    )}
  </StyledFormControl>
);
