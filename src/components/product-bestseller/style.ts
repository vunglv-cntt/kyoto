import styled from "styled-components";

export const StyledProductBestSeller = styled.div`
   border-radius: 16px;
  padding: 24px;
  height: 100%;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    font-weight: 600;
  }

  .price {
    color: #ed1b24;
    font-weight: 600;
  }

  .order-button {
    border-radius: 8px;
    width: fit-content;
    font-weight: 600;
  }
  
`;
