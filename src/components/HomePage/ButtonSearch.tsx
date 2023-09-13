import { Col, Row, RowProps } from "antd";
import { Button } from "@component/button";
import { BaseInput } from "@component/input";

function ButtonSearch(props: RowProps) {
  return (
    <Row gutter={[32, 32]} {...props}>
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
              className="bg-[#fff]"
              placeholder="Nhập từ tên sản phẩm cần tìm"
            />
          </Col>
          <Col span={6}>
            <Button className="h-full w-full">Tìm kiếm</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ButtonSearch;
