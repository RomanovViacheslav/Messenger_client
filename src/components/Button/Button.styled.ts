import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { StyledButtonProps } from './Button.types';

export const StyledButton = styled(Button)<StyledButtonProps>(({ theme }) => ({
  width: '100%',
  borderRadius: 8,
  background: theme.palette.primary.light,
  height: 37,
  '&:hover': {
    background: '#3339F9',
  },
  '&:active': {
    background: '#3339F9',
  },
  '&:disabled': {
    color: theme.palette.text.disabled,
  },
}));
