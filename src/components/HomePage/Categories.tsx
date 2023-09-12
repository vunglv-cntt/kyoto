import styled from "styled-components";
import { StyledCategories } from "./homepagecss/Categories.style";
import { useAsync } from "@hooks/useAsync";
import { apiGetCategories } from "services/home";
import { useMemo } from "react";
import { Col } from "antd";
import { Category } from "services/main/models";
import { Text } from "@component/text";
import Link from "next/link";
import { PATHS } from "@constants/routes";

const Categories = () => {
  const [, categoriesData] = useAsync(apiGetCategories, {
    callOnFirst: true,
  });
  const categories: Category[] = useMemo(
    () => [].concat(...(categoriesData?.data?.data || [])),
    [categoriesData]
  );

  return (
    <StyledCategories
      gutter={[16, 16]}
      className="flex-nowrap overflow-x-scroll md:flex-wrap md:overflow-x-hidden"
    >
      {categories.map((category) => {
        let { id, icon, name } = category;
        return (
          <Col
            key={id}
            className="flex flex-col gap-2 items-start basis-[224px] md:basis-1/6"
          >
            <Link href={PATHS.category(id.toString())}>
              <div className="category-box">
                <Logo src={icon} alt="icon" />
                <Text className="font-bold">{name}</Text>
              </div>
            </Link>
          </Col>
        );
      })}
    </StyledCategories>
  );
};

const Logo = styled.img`
  width: 60;
  height: 60px;
`;

export { Categories };
