import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MainPage, AboutPage, NotFoundPage, ContactsPage, ProjectsPage } from './pages';

import { Paths } from './utils/constants';

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path={Paths.About} element={<AboutPage />} />
      <Route path={Paths.Projects} element={<ProjectsPage />} />
      <Route path={Paths.Contacts} element={<ContactsPage />} />
      <Route path={Paths.NotFound} element={<NotFoundPage />} />
      <Route path={Paths.All} element={<Navigate to={Paths.NotFound} replace />} />
    </Routes>
  );
};

export default App;
