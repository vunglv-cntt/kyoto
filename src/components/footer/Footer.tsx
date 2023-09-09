import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils/utils";
import Box from "../Box";

const StyledLink = styled.a`
  position: relative;
  display: block;
  padding: 0.3rem 0rem;
  color: ${getTheme("colors.gray.500")};
  cursor: pointer;
  border-radius: 4px;
  :hover {
    color: ${getTheme("colors.gray.100")};
  }
`;

const Footer: React.FC = () => {
  return (
    <footer>
      <Box>
        <Box>
          <div
            style={{
              backgroundColor: "#00ADEF",
              height: "596px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                flex: "60%",
                display: "flex",
                backgroundColor: "#00ADEF",
              }}
            >
              <div
                style={{
                  flex: "25%",

                  textAlign: "center",
                }}
              >
                Item 1
              </div>
              <div
                style={{
                  flex: "25%",

                  textAlign: "center",
                }}
              >
                Item 2
              </div>
              <div
                style={{
                  flex: "25%",

                  textAlign: "center",
                }}
              >
                Item 3
              </div>
              <div
                style={{
                  flex: "25%",

                  textAlign: "center",
                }}
              >
                Item 4
              </div>
            </div>
            <div
              style={{
                flex: "40%",
                backgroundColor: "#00ADEF",
                color: "white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &copy; 2023 Your Company Name
            </div>
          </div>
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;
