import React from 'react';
import { FC, SVGProps } from 'react';

export const ArrowTopIcon: FC<SVGProps<SVGSVGElement>> = ({ width = 9, height = 9, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.82107 0.964455C8.82107 0.550241 8.48528 0.214455 8.07107 0.214455L1.32107 0.214455C0.906854 0.214455 0.571068 0.550241 0.571068 0.964455C0.571068 1.37867 0.906854 1.71445 1.32107 1.71445H7.32107V7.71445C7.32107 8.12867 7.65685 8.46445 8.07107 8.46445C8.48528 8.46445 8.82107 8.12867 8.82107 7.71445L8.82107 0.964455ZM1.53033 8.56585L8.6014 1.49478L7.54074 0.434125L0.46967 7.50519L1.53033 8.56585Z"
        fill="white"
      />
    </svg>
  );
};
