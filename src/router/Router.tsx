import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../constants';
import { AuthLayout } from '../ui';
import { RegPage, NotFoundPage, AuthPage, ChatWindowPage } from '../page';
import { tokenActions } from '../shared';
import { useAppDispatch, useAppSelector } from '../helpers';
import { AuthHoc } from '../shared/HOC/AuthHoc';

export const Router = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.token.isAuth);
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
      <Route
        path={`${PATHS.MAIN}${PATHS.CHAT}`}
        element={
          <AuthHoc>
            <ChatWindowPage />
          </AuthHoc>
        }
      />

      <Route element={<AuthLayout />}>
        <Route
          path={PATHS.REGISTER}
          element={!isAuth ? <RegPage /> : <Navigate to={PATHS.MAIN} />}
        />
        <Route path={PATHS.LOGIN} element={!isAuth ? <AuthPage /> : <Navigate to={PATHS.MAIN} />} />
      </Route>

      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
