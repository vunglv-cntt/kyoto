import { SVGProps } from "react";

export function DistributorIcon({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.1213 9.23312H14.8891C15.3088 9.23312 15.6386 8.88615 15.6386 8.46774C15.6386 8.03912 15.3088 7.70236 14.8891 7.70236H12.1213C11.7016 7.70236 11.3719 8.03912 11.3719 8.46774C11.3719 8.88615 11.7016 9.23312 12.1213 9.23312ZM18.1766 3.92749C18.7861 3.92749 19.1858 4.1418 19.5855 4.61123C19.9852 5.08067 20.0551 5.7542 19.9652 6.36549L19.0159 13.06C18.8361 14.3469 17.7569 15.2949 16.4879 15.2949H5.58639C4.25742 15.2949 3.15828 14.255 3.04837 12.908L2.12908 1.7834L0.620259 1.51807C0.22057 1.44664 -0.0592117 1.04864 0.0107338 0.640433C0.0806793 0.223045 0.470376 -0.0535127 0.880056 0.0087383L3.2632 0.375101C3.60293 0.437352 3.85274 0.722074 3.88272 1.06905L4.07257 3.35499C4.10254 3.68257 4.36234 3.92749 4.68209 3.92749H18.1766ZM5.42631 16.9079C4.58697 16.9079 3.9075 17.6018 3.9075 18.459C3.9075 19.3061 4.58697 20 5.42631 20C6.25567 20 6.93514 19.3061 6.93514 18.459C6.93514 17.6018 6.25567 16.9079 5.42631 16.9079ZM16.6676 16.9079C15.8282 16.9079 15.1487 17.6018 15.1487 18.459C15.1487 19.3061 15.8282 20 16.6676 20C17.4969 20 18.1764 19.3061 18.1764 18.459C18.1764 17.6018 17.4969 16.9079 16.6676 16.9079Z"
        fill="white"
      />{" "}
    </svg>
  );
}
