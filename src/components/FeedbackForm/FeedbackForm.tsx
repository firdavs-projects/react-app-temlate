import React, { FC, useState } from 'react';

import { Button, Input } from '../../components';
import { SendIcon } from '../../icons';

import styles from './FeedbackForm.module.scss';

export const FeedbackForm: FC = () => {
  const [sent, setSent] = useState<boolean>(false);
  return (
    <section className={styles.feedback}>
      <h1 className={styles.title}>Мы рядом</h1>
      <p className={styles.text}>
        Заполните форму ниже и мы свяжемся с вами. Не любите формы? <br /> Напишите нам на почту{' '}
        <a href="mailto:info@site.com">info@site.com</a>
      </p>

      <form className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.name}>
            <Input label="Ваше имя" />
            <Input label="Ваш E-Mail" />
          </div>
          <Input className={styles.comment} type="textarea" label="Комментарий" />
          <Input
            className={styles.radio}
            type="radio"
            label={
              <span className={styles.docs}>
                Согласен с <a href="#">Политикой конфиденциальности</a>
              </span>
            }
          />
        </div>

        <Button
          onClick={() => setSent(true)}
          className={`${styles.send} ${sent ? styles.sent : ''}`}
        >
          <SendIcon className={styles.iconBtn} />
          <div className={styles.sendBg} />
          <div className={styles.titleBtn}>{sent ? 'Ваше сообщение отправлено!' : 'Отправить'}</div>
        </Button>
      </form>
    </section>
  );
};
