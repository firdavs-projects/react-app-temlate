import React from 'react';
import { FC, SVGProps } from 'react';

export const MenuIcon: FC<SVGProps<SVGSVGElement>> = ({ width = 31, height = 7, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <ellipse cx="3.5" cy="3.5" rx="3.5" ry="3.5" transform="rotate(90 3.5 3.5)" fill="#388AF3" />
      <ellipse
        cx="15.5"
        cy="3.5"
        rx="3.5"
        ry="3.5"
        transform="rotate(90 15.5 3.5)"
        fill="#388AF3"
      />
      <ellipse
        cx="27.5"
        cy="3.5"
        rx="3.5"
        ry="3.5"
        transform="rotate(90 27.5 3.5)"
        fill="#388AF3"
      />
    </svg>
  );
};
