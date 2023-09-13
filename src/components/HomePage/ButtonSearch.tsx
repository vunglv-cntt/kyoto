import { Col, Row, RowProps } from "antd";
import { Button } from "@component/button";
import { BaseInput } from "@component/input";
import { SearchOutlined } from "@ant-design/icons";

function ButtonSearch(props: RowProps) {
  return (
    <Row gutter={[32, 32]} {...props} id="test">
      <Col md={12} className="hidden lg:flex">
        <Col span={8}>
          <Button>Xả kho thanh lí</Button>
        </Col>
        <Col span={8}>
          <Button>Hỗ trợ kỹ thuật</Button>
        </Col>
        <Col span={8}>
          <Button>Chat trực tuyến</Button>
        </Col>
      </Col>

      <Col xs={24} lg={12}>
        <Row>
          <Col className="flex-1">
            <BaseInput
              addonBefore={<SearchOutlined />}
              className="bg-[#fff] block lg:hidden p-[0 !important]"
              placeholder="Nhập từ tên sản phẩm cần tìm"
            />
            <BaseInput
              className="bg-[#fff] hidden lg:block"
              placeholder="Nhập từ tên sản phẩm cần tìm"
            />
          </Col>
          <Col span={6} className="hidden lg:block">
            <Button className="h-full w-full">Tìm kiếm</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ButtonSearch;
