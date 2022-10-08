import React from 'react';
import { FC, SVGProps } from 'react';

export const TelegramIcon: FC<SVGProps<SVGSVGElement>> = ({ width = 34, height = 34, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="17" cy="17" r="17" fill="#388AF3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9414 10.0283L7.25081 15.6496C6.24393 16.0402 6.2617 16.5934 7.07813 16.8504L10.839 18.0148L19.5633 12.5636C19.9683 12.2964 20.3441 12.4476 20.0369 12.716L12.9772 19.0455L12.7068 22.8926C13.1004 22.8926 13.2718 22.7225 13.475 22.5209L15.3122 20.7643L19.1214 23.5504C19.8159 23.941 20.3124 23.7394 20.4978 22.9102L22.9991 11.2153L22.9978 11.2165C23.2188 10.1933 22.6233 9.7838 21.9414 10.0283Z"
        fill="white"
      />
    </svg>
  );
};
