import React, { FC, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Lang, Paths } from '../../utils/constants';

import styles from './Navbar.module.scss';
import { LogoIcon, MenuIcon, ArrowIcon } from '../../icons';

export const Navbar: FC = () => {
  const [lang, setLang] = useState<string>(Lang.RU);
  return (
    <nav className={styles.nav}>
      <Link to={Paths.Main}>
        <LogoIcon className={styles.logo} />
      </Link>
      <ul className={styles.links}>
        <li>
          <NavLink to={Paths.Projects}>Проекты</NavLink>
        </li>
        <li>
          <NavLink to={Paths.About}>О компании</NavLink>
        </li>
        <li>
          <NavLink to={Paths.Contacts}>Контакты</NavLink>
        </li>
      </ul>
      <div className={styles.lang}>
        <ul>
          <li onClick={() => setLang(Lang.RU)} className={lang === Lang.RU ? 'active' : ''}>
            RU
          </li>
          <li onClick={() => setLang(Lang.EN)} className={lang === Lang.EN ? 'active' : ''}>
            EN
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <MenuIcon />
      </div>
      <div className={styles.start}>
        <span>Начать проект</span>
        <ArrowIcon />
        <div className={styles.circle} />
      </div>
    </nav>
  );
};
