import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { StyledBoxProps } from '../../ChatView.type';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  background: theme.palette.primary.dark,
  maxWidth: 402,
  width: 'fit-content',
  padding: 11,
  borderRadius: '10px 10px 0 0',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  gap: 12,
  marginLeft: 'auto',

  '& .MuiTypography-root.MuiTypography-body2': {
    overflowWrap: 'break-word',
  },
}));
