import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { StyledBoxProps } from './ChatView.type';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '59px 1fr 59px',
  position: 'relative',
}));

export const StyledBoxMessage = styled(Box)<StyledBoxProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100%',
  padding: 21,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));
