import { Box, List } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { StyledBoxProps } from './Sidebar.type';

export const StyledList = styled(List)<StyledBoxProps>(({ theme }) => ({
  padding: 0,
  paddingTop: 14,
  margin: '0px -10px',

}));

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  width: '310px',
  padding: '21px 10px',
  // flexShrink: 0,
}));

export const StyledLink = styled(Link)({
  display: 'flex',
  justifyContent: 'end',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: 12,
  lineHeight: '12px',
  paddingBottom: 23,
  alignItems: 'center',
  '& > *:not(:last-child)': {
    marginRight: '8px',
  },
  });
