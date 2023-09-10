import Link from "next/link";
import React from "react";
import FlexBox from "./FlexBox";


export interface CategorySectionHeaderProps {
  title?: string;
  seeMoreLink?: string;
  iconName?: string;
}

const CategorySectionHeader: React.FC<CategorySectionHeaderProps> = ({
  seeMoreLink,
}) => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" mb="1.5rem">
      <FlexBox alignItems="center">
        
      </FlexBox>

      {seeMoreLink && (
        <Link href={seeMoreLink}>
          <a>
            <FlexBox alignItems="center" ml="0.5rem" color="text.muted">
              <h3 >View all</h3>
            </FlexBox>
          </a>
        </Link>
      )}
    </FlexBox>
  );
};

export default CategorySectionHeader;
