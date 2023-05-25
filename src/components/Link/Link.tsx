import React from 'react';
import { StyledLink } from './Link.styled';
import { LinkCastProps } from './Link.types';

export const Link = ({ to, children }: LinkCastProps) => (
  <StyledLink to={to}>{children}</StyledLink>
);
