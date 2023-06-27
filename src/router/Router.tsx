import React, { useEffect, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../shared/constants';
import { AuthLayout } from '../ui';
import { tokenActions } from '../shared';
import { useAppDispatch, useAppSelector } from '../helpers';
import { AuthHoc } from '../shared/HOC/AuthHoc';
import { AuthPageAsync, ChatWindowPageAsync, NotFoundPageAsync, RegPageAsync } from '../page';
import { Loader } from '../components';

export const Router = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.token.isAuth);
  useEffect(() => {
    dispatch(tokenActions.initAuth());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path={PATHS.MAIN}
          element={
            <AuthHoc>
              <ChatWindowPageAsync />
            </AuthHoc>
          }
        />
        <Route
          path={`${PATHS.MAIN}${PATHS.CHAT}`}
          element={
            <AuthHoc>
              <ChatWindowPageAsync />
            </AuthHoc>
          }
        />

        <Route element={<AuthLayout />}>
          <Route
            path={PATHS.REGISTER}
            element={!isAuth ? <RegPageAsync /> : <Navigate to={PATHS.MAIN} />}
          />
          <Route
            path={PATHS.LOGIN}
            element={!isAuth ? <AuthPageAsync /> : <Navigate to={PATHS.MAIN} />}
          />
        </Route>

        <Route path={PATHS.NOT_FOUND} element={<NotFoundPageAsync />} />
      </Routes>
    </Suspense>
  );
};
