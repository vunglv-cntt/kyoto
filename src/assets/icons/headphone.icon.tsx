import { SVGProps } from "react";

export function HeadphoneIcon({
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
        d="M4.5 27V18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18V27"
        stroke="#00ADEF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.5 28.5C31.5 29.2956 31.1839 30.0587 30.6213 30.6213C30.0587 31.1839 29.2956 31.5 28.5 31.5H27C26.2044 31.5 25.4413 31.1839 24.8787 30.6213C24.3161 30.0587 24 29.2956 24 28.5V24C24 23.2044 24.3161 22.4413 24.8787 21.8787C25.4413 21.3161 26.2044 21 27 21H31.5V28.5ZM4.5 28.5C4.5 29.2956 4.81607 30.0587 5.37868 30.6213C5.94129 31.1839 6.70435 31.5 7.5 31.5H9C9.79565 31.5 10.5587 31.1839 11.1213 30.6213C11.6839 30.0587 12 29.2956 12 28.5V24C12 23.2044 11.6839 22.4413 11.1213 21.8787C10.5587 21.3161 9.79565 21 9 21H4.5V28.5Z"
        stroke="#00ADEF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
