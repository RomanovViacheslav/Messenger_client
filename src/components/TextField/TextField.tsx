import React, { memo } from 'react';

import { TextFieldProps } from './TextField.types';
import {
  StyledInput,
  StyledInputLabel,
  StyledFormHelperText,
  StyledFormControl,
} from './TextField.styled';

export const TextField = memo(
  ({
    label,
    placeholder,
    value,
    onChange,
    errorText,
    type,
    error,
    search,
    ...props
  }: TextFieldProps) => (
    <StyledFormControl variant="standard">
      {!search && (
        <StyledInputLabel shrink htmlFor={label}>
          {label}
        </StyledInputLabel>
      )}
      <StyledInput
        placeholder={placeholder}
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        error={error}
        search={String(search)}
        {...props}
      />
      {error && <StyledFormHelperText error>{errorText}</StyledFormHelperText>}
    </StyledFormControl>
  ),
);
