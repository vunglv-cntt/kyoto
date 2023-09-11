
import React from "react";
import { StyledCarouselCard1 } from "./CarouselCardStyle";


function CarouselCard1() {
  return (
    <StyledCarouselCard1>
      <div className="banner-container">
        <img
          src="/assets/images/header/kyoto.png"
          alt="Slider Header"
          className="banner-image"
        />
        <div className="overlay">
          <div>
          <div>
            {" "}
            <h1 className="banner-text">KYOTO - NÔNG NGHIỆP <br/> CÔNG NGHỆ</h1>{" "}
          </div>
          <div>
            {" "}
            <h4 className="banner-text">Giải pháp công nghệ hiện đại cho nông nghiệp góp phần gia tăng năng<br/> suất tối ưu hoá sức lao động mang lại hiệu quả cao cho lĩnh vực Nông - <br/> Ngư - Cơ Việt Nam</h4>{" "}
          </div>
          <div>
            {" "}
            <button className="banner-button">Đăng Ký</button>
            <button className="banner-button-1">Xem Thêm</button>
          </div>
          </div>
        </div>
      </div>
    </StyledCarouselCard1>
  );
}

export default CarouselCard1;
