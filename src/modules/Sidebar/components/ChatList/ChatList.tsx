import { Box } from '@mui/material';
import React from 'react';
import { UserAvatar } from '../../../../components';
import { generateColor } from '../../../../helpers';

export const ChatList = () => {
  const colorUser = generateColor('oleg');
  return (
    <Box>
      <UserAvatar
        src="https://cdnn1.inosmi.ru/img/24985/10/249851004_0:196:2030:1211_1920x0_80_0_0_78318b59d4ce0cde91f76a1b092765e7.jpg"
        color={colorUser}
        login="login"
      />
      <span>Profile</span>
    </Box>
  );
};
