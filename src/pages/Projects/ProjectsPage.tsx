import React, { FC } from 'react';

import { BreadCrumbs, MainLayout } from '../../components';
import { ILink } from '../../types';
import { Paths } from '../../utils/constants';

const breadCrumbs: ILink[] = [
  {
    link: Paths.Main,
    label: 'Главная',
  },
  {
    link: Paths.Projects,
    label: 'Проекты',
  },
];

export const ProjectsPage: FC = () => (
  <MainLayout>
    <BreadCrumbs links={breadCrumbs} />
    <h1>Проекты</h1>
  </MainLayout>
);
