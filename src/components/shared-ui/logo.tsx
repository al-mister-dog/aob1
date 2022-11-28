import aobLogo from "../../../public/aob-logo.svg";

export default function Logo({ size }: { size?: number }) {
  const sizes = {
    xs: 10,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50,
  };
  let logoSize = 30;
  if (size) {
    logoSize = sizes[size];
  }
  return (
    <div>
      <svg
        width={logoSize}
        height={logoSize}
        viewBox="0 0 505 562"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_21)" filter="url(#filter0_f_1_21)">
          <path
            d="M226.973 1H303.973L86.4728 558.5H1L226.973 1Z"
            fill="#330164"
          />
          <path d="M306 1L504 561H422.495L230 1H306Z" fill="#470283" />
          <path d="M79 261.846H445.5V297.846H96L79 261.846Z" fill="#390170" />
          <path d="M29.7027 371H491V417.5H47L29.7027 371Z" fill="#470283" />
        </g>
        <defs>
          <filter
            id="filter0_f_1_21"
            x="0"
            y="0"
            width="505"
            height="562"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.5"
              result="effect1_foregroundBlur_1_21"
            />
          </filter>
          <clipPath id="clip0_1_21">
            <rect
              width="503"
              height="560"
              fill="white"
              transform="translate(1 1)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
