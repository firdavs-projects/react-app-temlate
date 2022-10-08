import React, { FC } from 'react';

import { Footer, Navbar } from '../../components';

import styles from './MainLayout.module.scss';

import { IMainLayoutComponent } from '../../types';

export const MainLayout: FC<IMainLayoutComponent.IProps> = ({ children }) => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
