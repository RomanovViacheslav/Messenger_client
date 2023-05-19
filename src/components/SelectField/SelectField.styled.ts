import { InputBase, InputLabel, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import { StyledSelectProps } from './SelectField.types';

export const StyledSelectInput = styled(InputBase)<StyledSelectProps>(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiSelect-select': {
  lineHeight: '24px !important',
  },
}));

export const StyledInputLabel = styled(InputLabel)<StyledSelectProps>(({ theme }) => ({
  fontWeight: 600,
  fontSize: 12,
  lineHeight: '18px',
  color: '#666666',
  '&.Mui-focused': {
    color: '#666666',
  },
}));

export const StyledMenuItem = styled(MenuItem)<StyledSelectProps>(({ theme }) => ({
  height: 56,
  border: '1px solid #CCCCCC',
  '&.Mui-selected': {
    color: ' #FFFFFF',
    background: '#7A5CFA',

  },

}));
