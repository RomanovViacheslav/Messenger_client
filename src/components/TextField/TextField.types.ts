import { ChangeEventHandler } from 'react';
import { InputBaseProps } from '@mui/material';
import { ThemeType } from '../../theme';

export interface TextFieldProps extends InputBaseProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorText?: string;
  error?: boolean;
  search?: boolean;
  type: string;
}

export interface StyledTextFieldProps {
  search?: string;
  type?: string;
  theme?: ThemeType;
}
