import React, { FC } from 'react';
import { IButtonComponent } from 'types';

export const Button: FC<IButtonComponent.IProps> = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);
