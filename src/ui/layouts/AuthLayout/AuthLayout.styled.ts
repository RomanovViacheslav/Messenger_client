import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { StyledBoxProps } from './AuthLayout.types';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '50px 30px 30px 30px',
  background: theme.palette.primary.main,
  boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.14)',
  borderRadius: 12,
  width: '380px',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: 0,
    height: '100vh',
  },
}));
