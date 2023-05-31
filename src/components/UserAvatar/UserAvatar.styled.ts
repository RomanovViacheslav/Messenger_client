import { Avatar } from '@mui/material';
import styled from '@emotion/styled';
import { StyledAvatarProps } from './UserAvatar.types';

export const StyledAvatar = styled(Avatar)<StyledAvatarProps>(({ theme, color }) => ({
  backgroundColor: color,
  color: theme.palette.getContrastText(color as string),
  width: 47,
  height: 47,
}));
