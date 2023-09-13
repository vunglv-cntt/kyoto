import { ViewMoreButton } from "@component/button";
import { Title } from "@component/title";
import { Col, Row } from "antd";
import StyledBranches from "./homepagecss/Branches.style";
import { Image } from "@component/image";
import { BranchType } from "services/main/models";
import { Text } from "@component/text";
import { formatAddress } from "helpers/address";

function ShopSystem() {
  const showInfors = (branch: BranchType) => {
    return [
      { label: "Địa chỉ", value: formatAddress(branch) },
      { label: "Hotline", value: branch.hotline },
      { label: "Email", value: branch.email },
    ];
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
            <Col xs={24} md={8} key={id}>
              <div className="branch-box">
                <Image src={image} alt="image" className="image" />

                <div className="p-4">
                  <Text className="name">{name}</Text>
                  <Text className="description">
                    {showInfors(branch).map((info, id) => (
                      <div key={id} className="mt-1">
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

const branches = [
  {
    id: 1,
    image:
      "http://kyoto-api-dev.tasvietnam.com/71eb5fdc3d3cb20ca16b56c38605a64f.png",
    name: "Trạm Đồng Nai - 0160",
    address: "Ấp Tân Thành",
    city: "Đồng Nai",
    district: "Huyện Trảng Bom",
    ward: "Xã Thanh Bình",
    longitude: 106.607188,
    latitude: 10.8157407,
    deleted_at: null,
    hotline: "0799534156",
    email: "tramdongnai@gmail.com ",
  },
  {
    id: 1,
    image:
      "http://kyoto-api-dev.tasvietnam.com/6ac064bbd94f10eb348210e613426998fd.png",
    name: "Trạm Đồng Nai - 0160",
    address: "Ấp Tân Thành",
    city: "Đồng Nai",
    district: "Huyện Trảng Bom",
    ward: "Xã Thanh Bình",
    longitude: 106.607188,
    latitude: 10.8157407,
    deleted_at: null,
    hotline: "0799534156",
    email: "tramdongnai@gmail.com ",
  },
  {
    id: 1,
    image:
      "http://kyoto-api-dev.tasvietnam.com/ec4cdc9918c7c20171058e505d3413d8.png",
    name: "Trạm Đồng Nai - 0160",
    address: "Ấp Tân Thành",
    city: "Đồng Nai",
    district: "Huyện Trảng Bom",
    ward: "Xã Thanh Bình",
    longitude: 106.607188,
    latitude: 10.8157407,
    deleted_at: null,
    hotline: "0799534156",
    email: "tramdongnai@gmail.com ",
  },
];

export default ShopSystem;
