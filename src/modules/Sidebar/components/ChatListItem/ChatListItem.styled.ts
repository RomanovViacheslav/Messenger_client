import { ListItem } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { StyledLinkProps } from './ChatListItem.type';

export const StyledListItem = styled(ListItem)<StyledLinkProps>(({ theme, active }) => ({
  padding: 0,
  background: active === 'true' ? theme.palette.primary.light : theme.palette.primary.dark,
}));

export const StyledLink = styled(Link)<StyledLinkProps>(({ theme, active }) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  //   justifyContent: 'space-between',
  height: 71,
  borderTop: `2px solid ${theme.palette.primary.main}`,
  padding: '0px 10px',
  width: '100%',
}));
