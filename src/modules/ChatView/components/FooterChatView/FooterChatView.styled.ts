import { Box, InputBase } from '@mui/material';
import styled from '@emotion/styled';
import { StyledBoxProps } from '../../ChatView.type';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  background: theme.palette.primary.dark,
  width: '100%',
  minHeight: '59px',
  borderLeft: `1px solid ${theme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'center',
  padding: '0px 20px',
}));

export const StyledInput = styled(InputBase)<StyledBoxProps>(({ theme }) => ({
  border: 'none',
}));
