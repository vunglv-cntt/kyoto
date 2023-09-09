import React from "react";
import styled from "styled-components";

const TopbarWrapper = styled.div`
  color: #fff;
  padding: 10px 0;
`;

const TopbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopbarItem = styled.li`
  color: #00adef;
  margin-right: 15px;
  cursor: pointer;

  &:last-child {
    color: red;
    margin-right: 0;
  }
`;

const LanguageSelector = styled.select`
  background-color: transparent;
  color: red;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
function TopbarHeader() {
  return (
    <TopbarWrapper>
      <TopbarList>
        <TopbarItem>8:00 đến 17:30 thứ 2 đến thứ 7</TopbarItem>
        <TopbarItem>0377 222 777</TopbarItem>
        <TopbarItem>
          63 Cửa Hàng
          <LanguageSelector style={{ marginLeft: "15px" }}>
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
            <option value="fr">France</option>
          </LanguageSelector>
        </TopbarItem>
        <TopbarItem>Đăng nhập/Đăng ký</TopbarItem>
      </TopbarList>
    </TopbarWrapper>
  );
}

export default TopbarHeader;
