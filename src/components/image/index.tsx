import React from "react";

import "./index.css";

interface ImageProps {
  src?: string;
  alt?: string;
  ratio?: "ratio16x9" | "ratio1x1" | "ratio42x159";
  loading?: "lazy" | "eager";
  size?: "cover" | "contain";
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  ratio,
  size,
  loading = "lazy",
}) => (
  <div className={`kyoto-image ${ratio} ${size}`}>
    <img src={src} alt={alt} loading={loading} />
  </div>
);

Image.defaultProps = {
  alt: "image",
  loading: "lazy",
  ratio: "ratio16x9",
  size: "contain",
};
