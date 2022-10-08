import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { BreadCrumbs, Button, MainLayout } from '../../components';
import { ILink } from '../../types';
import { Paths } from '../../utils/constants';

const breadCrumbs: ILink[] = [
  {
    link: Paths.Main,
    label: 'Главная',
  },
];

export const NotFoundPage: FC = () => {
  return (
    <MainLayout>
      <BreadCrumbs links={breadCrumbs} />
      <h1>404</h1>
      <p>Страница не найдена!</p>
      <Link to="/">
        <Button>Идти на главную</Button>
      </Link>
    </MainLayout>
  );
};
