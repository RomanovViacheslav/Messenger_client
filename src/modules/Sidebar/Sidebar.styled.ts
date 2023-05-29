import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { StyledBoxProps } from './Sidebar.type';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  width: '310px',
  padding: '21px 10px',
}));

export const StyledLink = styled(Link)({
  display: 'flex',
  justifyContent: 'end',
  textDecoration: 'none',
  color: '#9898B0',
  fontWeight: 500,
  fontSize: 12,
  lineHeight: '12px',
  paddingBottom: 23,
  alignItems: 'center',
  '& > *:not(:last-child)': {
    marginRight: '8px',
  },
  });
