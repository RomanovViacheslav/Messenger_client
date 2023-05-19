import React from 'react';

import { TextFieldProps } from './TextField.types';
import { ErrorIcon } from '../../ui';
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
    />
    {errorText && (
      <StyledFormHelperText error className="helper-text helper-text--error ">
        {errorText}
      </StyledFormHelperText>
    )}
  </StyledFormControl>
);
