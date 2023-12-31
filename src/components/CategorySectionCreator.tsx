import React from "react";
import Box from "./Box";
import CategorySectionHeader from "./CategorySectionHeader";
// import Container from "./Container";

export interface CategorySectionCreatorProps {
  iconName?: string;
  title?: string;
  seeMoreLink?: string;
  children: React.ReactNode;
}

const CategorySectionCreator: React.FC<CategorySectionCreatorProps> = ({
  iconName,
  seeMoreLink,
  title,
  children,
}) => {
  return (
    <Box mb="3.75rem">
      <div  >
        {title && (
          <CategorySectionHeader
            title={title}
            seeMoreLink={seeMoreLink}
            iconName={iconName}
          />
        )}

        {children}
      </div>
    </Box>
  );
};

export default CategorySectionCreator;
