import { ReactNode } from 'react';

declare namespace IButtonComponent {
  export interface IProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
  }
}

export { IButtonComponent };
