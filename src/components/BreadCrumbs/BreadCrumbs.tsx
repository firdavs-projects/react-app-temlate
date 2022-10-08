import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IBreadCrumbComponent } from 'types';

import styles from './BreadCrumbs.module.scss';

export const BreadCrumbs: FC<IBreadCrumbComponent.IProps> = ({ links, className }) => {
  return (
    <section className={`${styles.bread} ${className}`}>
      {links.map((link, i) => (
        <Link to={link.link} key={i}>
          <span className={`${styles.link} ${i + 1 === links.length ? styles.active : ''}`}>
            {link.label} {i < links.length - 1 ? ' - ' : ''}
          </span>
        </Link>
      ))}
    </section>
  );
};
