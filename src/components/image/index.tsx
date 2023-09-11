import { imageSrc } from "helpers/file";
import { StyledImage } from "./styles";

interface ImageProps {
  src?: string;
  alt?: string;
  ratio?: "ratio16x9" | "ratio1x1" | "ratio42x159";
  loading?: "lazy" | "eager";
  size?: "cover" | "contain";
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  ratio,
  size,
  loading = "lazy",
  className = "",
}) => (
  <div className={`kyoto-image ${ratio} ${size} ${className}`}>
    <StyledImage src={imageSrc(src)} alt={alt} loading={loading} />
  </div>
);

Image.defaultProps = {
  alt: "image",
  loading: "lazy",
  ratio: "ratio16x9",
  size: "contain",
};
