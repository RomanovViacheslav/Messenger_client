import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../helpers';
import { PATHS } from '../../constants';
import { Loader } from '../../components';

export const AuthHoc: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const isAuth = useAppSelector((state) => state.token.isAuth);

  useEffect(() => {
    setIsCheckingAuth(false);
  }, [isAuth]);

  if (isCheckingAuth) {
    return <Loader />;
  }

  if (isAuth) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return <Navigate to={PATHS.LOGIN} />;
};
