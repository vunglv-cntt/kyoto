import Image from "@component/Image";
import Link from "next/link";
import Container from "../Container";
import FlexBox from "../FlexBox";
import StyledHeader from "./HeaderStyle";
import TopbarHeader from "@component/topbar/TopbarHeader";
import Navbar from "@component/navbar/Navbar";
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({  className }) => {
  return (
    <StyledHeader className={className}>
      <Container>
        <div
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <div
            className="navbarStyleLogoKyoto"
            style={{ flex: "1", display: "flex" }}
          >
            <div className="logo">
              <FlexBox className="logo" alignItems="center" mr="1rem">
                <Link href="/">
                  <a>
                    <Image src="/assets/images/logokyoto.svg" alt="logo" />
                  </a>
                </Link>
              </FlexBox>
            </div>

            <div className="navbarStyleText-1"  >
              <FlexBox justifyContent="center">
                <TopbarHeader />
              </FlexBox>
            </div>
          </div>

          <div className="navbarStyleText" style={{ flex: "1" }}>
            <FlexBox justifyContent="center">
              <Navbar />
            </FlexBox>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
