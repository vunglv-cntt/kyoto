import styled from "styled-components";

export const StyledProduct = styled.div`
  box-shadow: 0px 4px 20px 0px rgba(2, 53, 95, 0.1);
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
