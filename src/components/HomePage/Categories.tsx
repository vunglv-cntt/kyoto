import styled from "styled-components";
import { StyledCategories } from "./homepagecss/Categories.style";
import { useAsync } from "@hooks/useAsync";
import { apiGetCategories } from "services/home";
import { useMemo ,useState} from "react";
import { Col, Row } from "antd";
import { Text } from "@component/text";
import Link from "next/link";
import { PATHS } from "@constants/routes";
import CustomCarousel from "@component/carousel-cards/Carousel";

const Categories = () => {
  const [, categoriesData] = useAsync(apiGetCategories, {
    callOnFirst: true,
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const categoryParts = useMemo(() => {
    var array = [].concat(...(categoriesData?.data?.data || []));
    const chunkSize = 6;
    const chunks = [];

    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      chunks.push(chunk);
    }

    return chunks;
  }, [categoriesData]);

  return (
    <StyledCategories>
      <div className="hidden md:block">
        <CustomCarousel>
          {categoryParts.map((categoryPart, id) => {
            return (
              <div key={id}>
                <Row gutter={[16, 16]}>
                  {categoryPart.map((category, idd) => (
                    <Col key={idd} className="items-start basis-1/6">
                      <CategoryBox {...category} onCategoryClick={setSelectedCategoryId} />
                    </Col>
                  ))}
                </Row>
              </div>
            );
          })}
        </CustomCarousel>
      </div>

      <Row
        gutter={[16, 16]}
        className="flex-nowrap overflow-x-scroll md:hidden styled-scroll"
      >
        {[].concat(...categoryParts).map((category) => {
          let { id } = category;
          return (
            <Col key={id} className="basis-[224px]">
              <CategoryBox {...category} />
            </Col>
          );
        })}
      </Row>
    </StyledCategories>
  );
};

const CategoryBox = (category: any) => {
  let { id, icon, name ,onCategoryClick} = category;
  const handleIconClick = () => {
    console.log(`  ID: ${id}`);
    
    onCategoryClick(id);
  };
  return (
    <Link href={PATHS.category(id.toString())}>
      <div className="category-box flex flex-col gap-2 justify-between">
        <div>
          <Logo src={icon} alt="icon" />
          <Text className="font-bold">{name}</Text>
        </div>

        <Text
          className="text-[var(--app-main-color)] font-bold"
          style={{ fontSize: 12 }}
        >
          Xem danh mục
        </Text>
      </div>
    </Link>
  );
};

const Logo = styled.img`
  width: 60;
  height: 60px;
`;

export { Categories };
