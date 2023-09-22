import { SVGProps } from "react";

export function GiftIcon({
  width = 36,
  height = 36,
  viewBox = "0 0 36 36",
  fill = "none",
  stroke = "#ADB3BC",
  strokeWidth = 1,
  xmlns = "http://www.w3.org/2000/svg",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
      {...props}
    >
      <path
        d="M26.6666 16V29.3333H5.33331V16"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.3334 9.3335H2.66669V16.0002H29.3334V9.3335Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 29.3335V9.3335"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 9.33317H22C22.8841 9.33317 23.7319 8.98198 24.357 8.35686C24.9821 7.73174 25.3333 6.88389 25.3333 5.99984C25.3333 5.11578 24.9821 4.26794 24.357 3.64281C23.7319 3.01769 22.8841 2.6665 22 2.6665C17.3333 2.6665 16 9.33317 16 9.33317Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 9.33317H10C9.11597 9.33317 8.26812 8.98198 7.643 8.35686C7.01788 7.73174 6.66669 6.88389 6.66669 5.99984C6.66669 5.11578 7.01788 4.26794 7.643 3.64281C8.26812 3.01769 9.11597 2.6665 10 2.6665C14.6667 2.6665 16 9.33317 16 9.33317Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
