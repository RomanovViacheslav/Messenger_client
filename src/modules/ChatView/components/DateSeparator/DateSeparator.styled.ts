import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { StyledBoxProps } from '../../ChatView.type';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  background: theme.palette.primary.dark,
  width: 'fit-content',
  padding: '6px 12px',
  borderRadius: 20,
  textAlign: 'center',
  margin: '0 auto',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '12px',
}));
