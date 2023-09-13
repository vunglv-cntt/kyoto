import { SVGProps } from "react";

export function NoteIcon({
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
        d="M15.5833 5.6665H5.66668C4.91523 5.6665 4.19456 5.96501 3.66321 6.49637C3.13185 7.02772 2.83334 7.74839 2.83334 8.49984V28.3332C2.83334 29.0846 3.13185 29.8053 3.66321 30.3366C4.19456 30.868 4.91523 31.1665 5.66668 31.1665H25.5C26.2515 31.1665 26.9721 30.868 27.5035 30.3366C28.0348 29.8053 28.3333 29.0846 28.3333 28.3332V18.4165"
        stroke="#00ADEF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.2083 3.54182C26.7719 2.97824 27.5363 2.66162 28.3333 2.66162C29.1304 2.66162 29.8948 2.97824 30.4583 3.54182C31.0219 4.10541 31.3385 4.8698 31.3385 5.66682C31.3385 6.46385 31.0219 7.22824 30.4583 7.79183L17 21.2502L11.3333 22.6668L12.75 17.0002L26.2083 3.54182Z"
        stroke="#00ADEF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
