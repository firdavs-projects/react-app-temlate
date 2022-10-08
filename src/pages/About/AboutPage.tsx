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
    link: Paths.About,
    label: 'О компании',
  },
];

export const AboutPage: FC = () => (
  <MainLayout>
    <BreadCrumbs links={breadCrumbs} />
    <h1>О компании</h1>
  </MainLayout>
);
