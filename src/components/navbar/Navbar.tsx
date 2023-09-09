// NavBar.tsx
import React from "react";

function NavBar() {
  return (
    <nav>
      <ul  className = "navBar" style={{ display: "flex", listStyle: "none", padding: 0 , }}>
        <div className= "liStyle"></div>
        <li style={{ marginRight: "120px" }}>
          <a href="/">Trang chủ</a>
        </li>
        <li style={{ marginRight: "120px" }}>
          <a href="/bao-hanh">Bảo hành</a>
        </li>
        <li style={{ marginRight: "120px" }}>
          <a href="/he-thong-dai-ly">Hệ thống đại lý</a>
        </li>
        <li style={{ marginRight: "120px" }}>
          <a href="/tin-tuc">Tin tức</a>
        </li>
        <li style={{ marginRight: "120px" }}>
          <a href="/tuyen-dung">Tuyển dụng</a>
        </li>
        <li>
          <a href="/lien-he">Liên hệ</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
