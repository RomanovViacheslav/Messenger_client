import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATHS } from '../constants';
import { AuthLayout } from '../ui';
import { RegPage, NotFoundPage, AuthPage, ChatWindowPage } from '../page';
import { tokenActions } from '../shared';
import { useAppDispatch } from '../helpers';
import { AuthHoc } from '../shared/HOC/AuthHoc';

export const Router = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(tokenActions.initAuth());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path={PATHS.MAIN}
        element={
          <AuthHoc>
            <ChatWindowPage />
          </AuthHoc>
        }
      />
      <Route element={<AuthLayout />}>
        <Route path={PATHS.REGISTER} element={<RegPage />} />
        <Route path={PATHS.LOGIN} element={<AuthPage />} />
      </Route>
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
