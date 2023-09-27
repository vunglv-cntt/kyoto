import React from "react";
import { useState } from "react";
import he from "he";
import { StyledProductDetailTab } from "./styledProduct/StyledProductDetail";
type Props = {
  description: string;
};

const ProductTabs = ({ description, images }) => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };
  function sanitizeDescription(description) {
    const decodedDescription = he.decode(description);

    const replacedDescription = decodedDescription.replace(/<br\s*\/?>/g, "\n");

    const parser = new DOMParser();
    const doc = parser.parseFromString(replacedDescription, "text/html");
    return doc.body.innerText;
  }
  return (
    <StyledProductDetailTab>
      <div className="navigation-top">
        <div>
          <a
            href="#mo-ta"
            onClick={() => handleNavItemClick("Description")}
            className={selectedNavItem === "Description" ? "active" : ""}
          >
            Mô tả
          </a>
          <a
            href="#ki-thuat"
            onClick={() => handleNavItemClick("Technical")}
            className={selectedNavItem === "Technical" ? "active" : ""}
          >
            Kĩ thuật
          </a>
          <a
            href="#hinh-anh"
            onClick={() => handleNavItemClick("Images")}
            className={selectedNavItem === "Images" ? "active" : ""}
          >
            Hình ảnh
          </a>
          <a
            href="#video"
            onClick={() => handleNavItemClick("Video")}
            className={selectedNavItem === "Video" ? "active" : ""}
          >
            Video
          </a>
          <div className="content">
            {selectedNavItem === "Description" && (
              <p>{sanitizeDescription(description)} </p>
            )}
            {selectedNavItem === "Technical" && <p>Kỹ thuật sản phẩm</p>}
            {selectedNavItem === "Images" && (
              <ul className="horizontal-images">
             
                {images.map((image, index) => (
                  <li key={index}>
                
                    <img
                      className="image-product"
                      src={image.url}
                      alt={`Product Image ${index}`}
                    />
                  </li>
                ))}
              </ul>
            )}
            {selectedNavItem === "Video" && <p>Video sản phẩm: </p>}
          </div>
        </div>
      </div>
    </StyledProductDetailTab>
  );
};

export { ProductTabs };
