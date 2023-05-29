import React from 'react';
import { Link, TextField } from '../../components';
import { StyledBox, StyledLink } from './Sidebar.styled';
import { ArrowIcon } from '../../ui';

export const Sidebar = () => (
  <StyledBox>
    <StyledLink to="#">
      <span>Profile</span>
      <ArrowIcon />
    </StyledLink>
    <TextField type="text" search placeholder="Search" />
  </StyledBox>
);
