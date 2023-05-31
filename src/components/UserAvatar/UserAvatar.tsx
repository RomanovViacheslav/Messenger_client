import React from 'react';
import { StyledAvatar } from './UserAvatar.styled';
import { UserAvatarProps } from './UserAvatar.types';

export const UserAvatar = ({ color = '#9898B0', login, src }: UserAvatarProps) => {
  const firstLetter = login.charAt(0).toUpperCase();
  return (
    <StyledAvatar src={src} color={color}>
      {!src && firstLetter}
    </StyledAvatar>
  );
};
