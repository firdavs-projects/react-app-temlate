import React, { FC, useState } from 'react';

import { IInputComponent } from '../../types';

import styles from './Input.module.scss';

export const Input: FC<IInputComponent.IProps> = ({
  label,
  onChange,
  placeholder,
  value,
  type,
  className,
}) => {
  const randomId = Math.random().toString();
  const [focus, setFocus] = useState<boolean>(false);
  const [isPrinted, setPrinted] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(true);

  if (type === 'radio') {
    return (
      <div className={styles.radioWrapper}>
        <input
          className={`${styles.radio} ${checked ? styles.selected : ''}`}
          id={randomId + 1}
          type="radio"
          checked={checked}
          onChange={onChange}
          onClick={() => setChecked(!checked)}
        />
        {label && (
          <label className={`${styles.radioLabel}`} htmlFor={randomId + 1}>
            {label}
          </label>
        )}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className={`${styles.wrapper} ${styles.area}`}>
        <textarea
          id={label ? label + randomId : randomId}
          value={value}
          placeholder={placeholder}
          className={`${styles.input} ${className}`}
          onChange={onChange}
        />
        {label && (
          <label className={`${styles.label} ${styles.textarea}`} htmlFor={label + randomId}>
            {label}
          </label>
        )}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <input
        id={label ? label + randomId : randomId}
        type="text"
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        className={`${styles.input} ${className}`}
        onChange={(e) => {
          onChange && onChange(e);
          setPrinted(!!e.target.value.length);
        }}
      />
      {label && (
        <label
          className={`${styles.label} ${focus || isPrinted ? styles.focus : ''}`}
          htmlFor={label + randomId}
        >
          {label}
        </label>
      )}
    </div>
  );
};
