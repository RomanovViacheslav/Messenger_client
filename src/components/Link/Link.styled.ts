import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { LinkCastProps } from './Link.types';

export const StyledLink = styled(Link)<LinkCastProps>({
  textDecoration: 'none',
  color: '#3369F3',
  fontWeight: 500,
  fontSize: 12,
  lineHeight: '11px',
  textAlign: 'center',
});
