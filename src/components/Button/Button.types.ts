import { ButtonProps } from '@mui/material';
import { ThemeType } from '../../theme';

export interface CustomButtonProps extends ButtonProps {
  buttonText: string;
}

export interface StyledButtonProps {
  theme?: ThemeType;
}
