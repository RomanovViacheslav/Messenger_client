import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectFieldProps } from './SelectField.types';
import { StyledSelectInput, StyledInputLabel, StyledMenuItem } from './SelectField.styled';

export const SelectField = ({
  label,
  options,
  value,
  onChange,
  errorText,
  placeholder,
}: SelectFieldProps) => (
  <FormControl variant="standard">
    <StyledInputLabel shrink id="demo-customized-select-label">
      Age
    </StyledInputLabel>
    <Select
      displayEmpty
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <span style={{ color: '#666666' }}>{placeholder}</span>;
        }
        return selected;
      }}
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value={value}
      onChange={onChange}
      input={<StyledSelectInput />}
    >
      <StyledMenuItem value={10}>Ten</StyledMenuItem>
      <StyledMenuItem value={20}>Twenty</StyledMenuItem>
      <StyledMenuItem value={30}>Thirty</StyledMenuItem>
    </Select>
  </FormControl>
);
