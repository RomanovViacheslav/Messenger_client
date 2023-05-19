import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATHS } from '../constants';
import { AuthLayout } from '../ui';
import { RegPage, NotFoundPage } from '../page';

export const Router = () => (
  <Routes>
    <Route path={PATHS.MAIN} element={<AuthLayout />}>
      <Route index element={<RegPage />} />
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Route>
  </Routes>
);
