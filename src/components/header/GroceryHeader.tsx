import IconButton from "@component/buttons/IconButton";
import GrocerySearchBox from "@component/search-box/GrocerySearchBox";
import { useAppContext } from "@context/app/AppContext";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Sidenav from "@component/sidenav/Sidenav";
import StyledHeader from "./HeaderStyle";

function GroceryHeader({ className }) {
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen(!open);

  const { state } = useAppContext();
  const { cartList } = state.cart;

  const cartHandle = (
    <FlexBox ml="20px" alignItems="flex-start">
      <IconButton bg="gray.200" p="12px"></IconButton>

      {!!cartList.length && (
        <FlexBox
          borderRadius="300px"
          bg="error.main"
          px="5px"
          py="2px"
          alignItems="center"
          justifyContent="center"
          ml="-1rem"
          mt="-9px"
        ></FlexBox>
      )}
    </FlexBox>
  );

  return (
    <StyledHeader className={className}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <FlexBox className="logo" alignItems="center" mr="1rem">
          <Link href="/">
            <a>
              <img src="/assets/images/logo.svg" alt="logo" />
            </a>
          </Link>
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <GrocerySearchBox />
        </FlexBox>

        <FlexBox className="header-right" alignItems="center">
          <Sidenav
            handle={cartHandle}
            position="right"
            open={open}
            width={380}
            toggleSidenav={toggleSidenav}
          ></Sidenav>
        </FlexBox>
      </Container>
    </StyledHeader>
  );
}

export default GroceryHeader;
