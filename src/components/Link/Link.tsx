import React from 'react';
import { StyledLink } from './Link.styled';
import { LinkCastProps } from './Link.types';

export const Link = ({ href, children }: LinkCastProps) => (
  <StyledLink to={href as string}>{children}</StyledLink>
);
