import React from 'react';
import { FC, SVGProps } from 'react';

export const ArrowIcon: FC<SVGProps<SVGSVGElement>> = ({ width = 15, height = 14, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M11 8L12 8V6H11V8ZM0 8L11 8V6L0 6L0 8Z" fill="#388AF3" />
      <path d="M7 13L13 7L7 1" stroke="#388AF3" strokeWidth="2" />
    </svg>
  );
};
