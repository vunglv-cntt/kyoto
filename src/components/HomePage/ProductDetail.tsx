import React, { useMemo, useState } from "react";
import { useAsync } from "@hooks/useAsync";
import { apiGetProductDetail } from "services/product";
import { Card, Button, Row, Col } from "antd";
import he from "he";
import { toast } from "react-toastify";
import { Carousel } from "react-responsive-carousel";
import { StyledProductDetail } from "../../ui/product/components/styledProduct/ProductDetail";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GiftIcon from "./Icons/Gift";
import ZaloIcon from "./Icons/Zalo";
import PhoneIcon from "./Icons/Phone";
import { authStorage } from "helpers/locale-storage";
import { apiAddProductToCart } from "services/cart"
import 'react-toastify/dist/ReactToastify.css';
function ProductDetail({ id }) {
  const authenToken = authStorage.get("auth");
  const [, productsDetail] = useAsync(apiGetProductDetail, {
    callOnFirst: true,
    callOnFirstArgs: [id],
    deps: [id],
  });

  const products = useMemo(() => productsDetail?.data?.data, [productsDetail]);

  if (!products) {
    return <div>Loading...</div>;
  }

  const { name, price, discount, images, description, phone_number } = products;

  function sanitizeDescription(description) {
    const decodedDescription = he.decode(description);

    const replacedDescription = decodedDescription.replace(/<br\s*\/?>/g, "\n");

    const parser = new DOMParser();
    const doc = parser.parseFromString(replacedDescription, "text/html");
    return doc.body.innerText;
  }

  function formatPrice(price) {
    const formattedPrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);

    return formattedPrice;
  }

  const handleAddtoCart = async () => {
    const quantity = 1;
    const requestData = { product_id: parseInt(id), quantity };
    try {
      const response = await apiAddProductToCart(requestData);

      if (response.status === 201) {
        toast.success("Thêm thành công");
      } else {
        toast.error("Thêm thất bại");
      }
    } catch (error) {
      toast.error("Vui lòng đăng nhập");
  
    }
  };

  return (
    <StyledProductDetail>
      <Card>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <div style={{ marginBottom: "20px" }}>
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={true}
                autoPlay={true}
                interval={5000}
              >
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={name} />
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div style={{ marginLeft: "35px" }}>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                }}
              >
                {name}
              </span>
              {/* <p>Price: {price}</p>
              <p>Discount: {discount}%</p> */}
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="text">
              <div className="price-product">
                <span style={{ fontWeight: "bold" }}>Giá bán: </span>

                <span className="price-span">{formatPrice(price)}</span>
              </div>
              <Button className="promo-button">
                <GiftIcon />
                Sử dụng mã khuyến mãi
              </Button>
              <div className="w-full border-[1px] border-b-[#828282] border-dashed my-4" />

              <div>
                <span className="order-span">Quy trinh đặt hàng</span>
                <div className="span-row">
                  <span>Tư vấn miễn phí</span>
                  <span className="right-span"> {phone_number}</span>
                </div>
                <div className="span-row">
                  <span>Bảo hành</span>
                  <span className="right-span"> 12 tháng</span>
                </div>
                <div className="span-row">
                  <span>Vận chuyển</span>
                  <span className="right-span"> 0đ</span>
                </div>
              </div>
              <div className="button-container">
                <div className="button-row">
                  <Button className="custom-button-buy">Mua ngay</Button>
                  <Button className="custom-button-order">
                    Đặt hàng {">"}
                  </Button>
                </div>
                <div className="button-row">
                  <Button className="custom-button">
                    {" "}
                    <ZaloIcon />
                    Chat
                  </Button>
                  <Button className="custom-button">
                    <PhoneIcon />
                    Gọi điện
                  </Button>
                </div>
              </div>
              <div className="add-to-cart">
                <Button
                  onClick={handleAddtoCart}
                  className="add-to-cart-button"
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </StyledProductDetail>
  );
}

export default ProductDetail;
