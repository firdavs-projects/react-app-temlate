import { ChangeEvent, ReactNode } from 'react';

declare namespace IInputComponent {
  export interface IProps {
    value?: string;
    placeholder?: string;
    type?: string;
    label?: string | ReactNode;
    className?: string;
    onChange?: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
}

export { IInputComponent };
