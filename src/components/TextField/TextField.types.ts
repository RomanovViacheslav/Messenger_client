import { ChangeEventHandler } from 'react';
import { InputBaseProps } from '@mui/material';
import { ThemeType } from '../../theme';

export interface TextFieldProps extends InputBaseProps {
  label: string;
  placeholder?: string;
  containerClassName?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorText?: string;
  error?: boolean;
}

export interface StyledTextFieldProps {
  type?: string;
  theme?: ThemeType;
}
