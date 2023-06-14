import React, { memo } from 'react';
import { StyledBox } from './DateSeparator.styled';
import { DateSeparatorProps } from './DateSeparator.type';

export const DateSeparator = memo(({ date }: DateSeparatorProps) => <StyledBox>{date}</StyledBox>);
