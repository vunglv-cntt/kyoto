import { ViewMoreButton } from "@component/button";
import { Title } from "@component/title";
import { useAsync } from "@hooks/useAsync";
import { Col, Row } from "antd";
import { useMemo } from "react";
import { apiGetBranchs } from "services/branch";
import StyledBranches from "./homepagecss/Branches.style";
import { Image } from "@component/image";
import { BranchType } from "services/main/models";
import { Text } from "@component/text";
import { formatAddress } from "helpers/address";

function ShopSystem() {
  const [, branchsData] = useAsync(apiGetBranchs, {
    callOnFirst: true,
  });
  const branches: BranchType[] = useMemo(
    () =>
      branchsData?.data?.data?.slice(0, 3)?.filter((branch) => branch) || [],
    [branchsData]
  );

  const showInfors = (branch: BranchType) => {
    return [{ label: "Địa chỉ", value: formatAddress(branch) }];
  };

  return (
    <StyledBranches>
      <Row className="justify-between items-center">
        <Col>
          <Title>Hệ thống cửa hàng</Title>
        </Col>
        <Col className="hidden md:inline">
          <ViewMoreButton />
        </Col>
      </Row>

      {/* Branches */}
      <Row gutter={[16, 16]} className="mt-4">
        {branches?.map((branch) => {
          let { name, id, image } = branch;

          return (
            <Col xs={24} md={8}>
              <div className="branch-box">
                <Image src={image} alt="image" className="image" />

                <div className="p-4">
                  <Text className="name">{name}</Text>
                  <Text className="description">
                    {showInfors(branch).map((info, id) => (
                      <div key={id}>
                        {info.label}: {info.value}
                      </div>
                    ))}
                  </Text>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </StyledBranches>
  );
}

export default ShopSystem;
