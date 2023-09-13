import { SVGProps } from "react";

export function ShipcarIcon({
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
        d="M26.2083 29.7498C28.1643 29.7498 29.75 28.1642 29.75 26.2082C29.75 24.2522 28.1643 22.6665 26.2083 22.6665C24.2523 22.6665 22.6667 24.2522 22.6667 26.2082C22.6667 28.1642 24.2523 29.7498 26.2083 29.7498Z"
        stroke="#00ADEF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.79167 29.7498C9.74767 29.7498 11.3333 28.1642 11.3333 26.2082C11.3333 24.2522 9.74767 22.6665 7.79167 22.6665C5.83566 22.6665 4.25 24.2522 4.25 26.2082C4.25 28.1642 5.83566 29.7498 7.79167 29.7498Z"
        stroke="#00ADEF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.6667 11.3335H28.3333L32.5833 15.5835V22.6668H22.6667V11.3335Z"
        stroke="#00ADEF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.6667 4.25H1.41666V22.6667H22.6667V4.25Z"
        stroke="#00ADEF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
