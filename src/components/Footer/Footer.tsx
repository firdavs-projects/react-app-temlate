import React, { FC } from 'react';

import { ArrowTopIcon, LogoIcon, TelegramIcon, WhatsappIcon } from '../../icons';

import styles from './Footer.module.scss';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.logo}>
          <LogoIcon fill="white" />
        </div>
        <ul className={styles.list}>
          <span className={styles.title}>Услуги</span>
          <li className={styles.text}>Support and development</li>
          <li className={styles.text}>UI/UX and product design</li>
          <li className={styles.text}>
            Progressive Web <br /> Applications (PWA)
          </li>
        </ul>
        <ul className={styles.list}>
          <span className={styles.title}>Компания</span>
          <li className={styles.text}>О компании</li>
          <li className={styles.text}>Проекты</li>
          <li className={styles.text}>Контакты</li>
        </ul>
        <ul>
          <span className={styles.title}>Контакты</span>
          <li className={`${styles.text} ${styles.link}`}>
            <span>Скачать презентацию</span>
            <ArrowTopIcon />
          </li>
          <li className={`${styles.text} ${styles.phone}`}>
            <a href="tel:+7 499 999 99 99">+7 (499) 999-99-99</a>
          </li>
          <li className={`${styles.text} ${styles.email}`}>
            <a href="mailto:info@site.com">info@site.com</a>
          </li>
        </ul>
        <ul className={styles.last}>
          <li>
            <a href="#">
              <TelegramIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <WhatsappIcon />
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.copyright}>
        <p className={styles.text}>© Company 2022. All rights reserved.</p>
        <a href="#">
          <p className={styles.text}>Политика конфиденциальночти</p>
        </a>
      </section>
    </div>
  </footer>
);
