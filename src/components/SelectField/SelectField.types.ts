import React from 'react';
import { SelectProps } from '@mui/material';
import { ThemeType } from '../../theme';

export interface SelectFieldProps extends SelectProps {
  label: string;
  options: string[];
  value: string;
  errorText?: string;
  helperText?: string;
  placeholder?:string
}
export interface StyledSelectProps {
  theme?: ThemeType;
}
