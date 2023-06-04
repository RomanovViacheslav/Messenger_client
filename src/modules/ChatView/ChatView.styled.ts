import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { StyledBoxProps } from './ChatView.type';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
