import React, { FC } from 'react';

import { BreadCrumbs, MainLayout } from '../../components';
import { ILink } from '../../types';
import { Paths } from '../../utils/constants';

const breadCrumbs: ILink[] = [
  {
    link: Paths.Main,
    label: 'Главная',
  },
];

export const MainPage: FC = () => {
  return (
    <MainLayout>
      <BreadCrumbs links={breadCrumbs} />
      <h1>Главная</h1>
    </MainLayout>
  );
};
