import React, { memo } from 'react';
import { StyledButton } from './Button.styled';
import { CustomButtonProps } from './Button.types';

export const Button = memo(({ buttonText, ...props }: CustomButtonProps) => (
  <StyledButton variant="contained" {...props}>
    {buttonText}
  </StyledButton>
));
