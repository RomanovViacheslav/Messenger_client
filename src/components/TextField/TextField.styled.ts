import { InputBase, InputLabel, FormHelperText, FormControl } from '@mui/material';
import styled from '@emotion/styled';
import { StyledTextFieldProps } from './TextField.types';

export const StyledInput = styled(InputBase)<StyledTextFieldProps>(({ theme, type, search }) => ({
  'label + &': {},
  '& .MuiInputBase-input': {
    position: 'relative',
    marginTop: search === 'true' ? 0 : 8,
    background: search === 'true' ? theme.palette.primary.main : theme.palette.primary.dark,
    borderRadius: 5,
    height: 33,
    padding: 10,
    boxSizing: 'border-box',
  },
  '&.Mui-error .MuiInputBase-input': {
    color: type === 'password' ? theme.palette.error.main : theme.palette.text.primary,
  },
}));

export const StyledInputLabel = styled(InputLabel)<StyledTextFieldProps>(({ theme }) => ({
  position: 'static',
  fontWeight: 500,
  fontSize: 15,
  lineHeight: '10px',
  overflow: 'visible',
  color: theme.palette.text.secondary,
  '&.Mui-focused': {
    color: theme.palette.text.secondary,
  },
}));

export const StyledFormHelperText = styled(FormHelperText)<StyledTextFieldProps>(
  ({ theme, search }) => ({
  marginTop: search === 'true' ? 0 : 7,
  fontWeight: 400,
  fontSize: 10,
  lineHeight: '8px',
  color: theme.palette.error.main,
}));

export const StyledFormControl = styled(FormControl)<StyledTextFieldProps>(({ theme, search }) => ({
  width: '100%',
  '&:last-child': {
    marginBottom: search === 'true' ? 0 : '110px',
  },
}));
