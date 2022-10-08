import React, { FC } from 'react';

import { BreadCrumbs, FeedbackForm, MainLayout } from '../../components';
import { ILink } from '../../types';
import { Paths } from '../../utils/constants';

const breadCrumbs: ILink[] = [
  {
    link: Paths.Main,
    label: 'Главная',
  },
  {
    link: Paths.Contacts,
    label: 'Контакты',
  },
];

export const ContactsPage: FC = () => {
  return (
    <MainLayout>
      <BreadCrumbs links={breadCrumbs} />
      <FeedbackForm />
    </MainLayout>
  );
};
