import { SVGProps } from "react";

export function SettingIcon({
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
      <g clip-path="url(#clip0_319_52221)">
        <path
          d="M16.5 20.625C18.7782 20.625 20.625 18.7782 20.625 16.5C20.625 14.2218 18.7782 12.375 16.5 12.375C14.2218 12.375 12.375 14.2218 12.375 16.5C12.375 18.7782 14.2218 20.625 16.5 20.625Z"
          stroke="#00ADEF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.675 20.625C26.492 21.0397 26.4374 21.4998 26.5182 21.9458C26.5991 22.3919 26.8118 22.8034 27.1287 23.1275L27.2113 23.21C27.4669 23.4654 27.6698 23.7687 27.8082 24.1025C27.9466 24.4364 28.0178 24.7942 28.0178 25.1556C28.0178 25.517 27.9466 25.8749 27.8082 26.2087C27.6698 26.5426 27.4669 26.8458 27.2113 27.1012C26.9559 27.3569 26.6526 27.5598 26.3187 27.6982C25.9849 27.8366 25.627 27.9078 25.2656 27.9078C24.9042 27.9078 24.5464 27.8366 24.2125 27.6982C23.8787 27.5598 23.5754 27.3569 23.32 27.1012L23.2375 27.0187C22.9134 26.7018 22.5019 26.4891 22.0558 26.4082C21.6098 26.3274 21.1497 26.382 20.735 26.565C20.3283 26.7393 19.9815 27.0287 19.7372 27.3976C19.4929 27.7665 19.3618 28.1988 19.36 28.6412V28.875C19.36 29.6043 19.0703 30.3038 18.5545 30.8195C18.0388 31.3353 17.3393 31.625 16.61 31.625C15.8807 31.625 15.1812 31.3353 14.6655 30.8195C14.1497 30.3038 13.86 29.6043 13.86 28.875V28.7512C13.8494 28.2961 13.702 27.8547 13.4372 27.4845C13.1724 27.1142 12.8023 26.8321 12.375 26.675C11.9603 26.492 11.5002 26.4374 11.0542 26.5182C10.6081 26.5991 10.1966 26.8118 9.8725 27.1287L9.79 27.2113C9.5346 27.4669 9.23131 27.6698 8.89746 27.8082C8.56362 27.9466 8.20577 28.0178 7.84437 28.0178C7.48298 28.0178 7.12513 27.9466 6.79129 27.8082C6.45744 27.6698 6.15415 27.4669 5.89875 27.2113C5.64306 26.9559 5.44023 26.6526 5.30184 26.3187C5.16344 25.9849 5.09221 25.627 5.09221 25.2656C5.09221 24.9042 5.16344 24.5464 5.30184 24.2125C5.44023 23.8787 5.64306 23.5754 5.89875 23.32L5.98125 23.2375C6.29824 22.9134 6.51088 22.5019 6.59176 22.0558C6.67263 21.6098 6.61803 21.1497 6.435 20.735C6.2607 20.3283 5.97129 19.9815 5.60239 19.7372C5.23349 19.4929 4.80121 19.3618 4.35875 19.36H4.125C3.39565 19.36 2.69618 19.0703 2.18046 18.5545C1.66473 18.0388 1.375 17.3393 1.375 16.61C1.375 15.8807 1.66473 15.1812 2.18046 14.6655C2.69618 14.1497 3.39565 13.86 4.125 13.86H4.24875C4.70387 13.8494 5.14526 13.702 5.51554 13.4372C5.88582 13.1724 6.16786 12.8023 6.325 12.375C6.50803 11.9603 6.56263 11.5002 6.48176 11.0542C6.40088 10.6081 6.18824 10.1966 5.87125 9.8725L5.78875 9.79C5.53306 9.5346 5.33023 9.23131 5.19184 8.89746C5.05344 8.56362 4.98221 8.20577 4.98221 7.84437C4.98221 7.48298 5.05344 7.12513 5.19184 6.79129C5.33023 6.45744 5.53306 6.15415 5.78875 5.89875C6.04415 5.64306 6.34744 5.44023 6.68129 5.30184C7.01513 5.16344 7.37298 5.09221 7.73438 5.09221C8.09577 5.09221 8.45362 5.16344 8.78746 5.30184C9.12131 5.44023 9.4246 5.64306 9.68 5.89875L9.7625 5.98125C10.0866 6.29824 10.4981 6.51088 10.9442 6.59176C11.3902 6.67263 11.8503 6.61803 12.265 6.435H12.375C12.7817 6.2607 13.1285 5.97129 13.3728 5.60239C13.6171 5.23349 13.7482 4.80121 13.75 4.35875V4.125C13.75 3.39565 14.0397 2.69618 14.5555 2.18046C15.0712 1.66473 15.7707 1.375 16.5 1.375C17.2293 1.375 17.9288 1.66473 18.4445 2.18046C18.9603 2.69618 19.25 3.39565 19.25 4.125V4.24875C19.2518 4.69121 19.3829 5.12349 19.6272 5.49239C19.8715 5.86129 20.2183 6.1507 20.625 6.325C21.0397 6.50803 21.4998 6.56263 21.9458 6.48176C22.3919 6.40088 22.8034 6.18824 23.1275 5.87125L23.21 5.78875C23.4654 5.53306 23.7687 5.33023 24.1025 5.19184C24.4364 5.05344 24.7942 4.98221 25.1556 4.98221C25.517 4.98221 25.8749 5.05344 26.2087 5.19184C26.5426 5.33023 26.8458 5.53306 27.1012 5.78875C27.3569 6.04415 27.5598 6.34744 27.6982 6.68129C27.8366 7.01513 27.9078 7.37298 27.9078 7.73438C27.9078 8.09577 27.8366 8.45362 27.6982 8.78746C27.5598 9.12131 27.3569 9.4246 27.1012 9.68L27.0187 9.7625C26.7018 10.0866 26.4891 10.4981 26.4082 10.9442C26.3274 11.3902 26.382 11.8503 26.565 12.265V12.375C26.7393 12.7817 27.0287 13.1285 27.3976 13.3728C27.7665 13.6171 28.1988 13.7482 28.6412 13.75H28.875C29.6043 13.75 30.3038 14.0397 30.8195 14.5555C31.3353 15.0712 31.625 15.7707 31.625 16.5C31.625 17.2293 31.3353 17.9288 30.8195 18.4445C30.3038 18.9603 29.6043 19.25 28.875 19.25H28.7512C28.3088 19.2518 27.8765 19.3829 27.5076 19.6272C27.1387 19.8715 26.8493 20.2183 26.675 20.625V20.625Z"
          stroke="#00ADEF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_319_52221">
          <rect width="33" height="33" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}