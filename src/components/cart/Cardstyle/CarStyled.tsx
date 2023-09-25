import styled from "styled-components";

export const StyledCartList = styled.div`
  .rowStyle {
    /* margin-top: 88px;
    margin-bottom: 147px; */
  }
  .Col-left {
    height: 453px;
  }
  .Col-right {
    height: 196px;
    
  }
  .Col-right-hand {
    height: 226px;
  }
  .col-rightDown {
    margin-top: 32px;
  }
  .image-card {
    width: 72px;

    height: 72px;
  }
  .product-container {
    display: flex;
    flex-direction: column;
  }

  .Giohang {
    font-size: 24px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
  .deleteAllCart {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }
  .actionCart {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actionCartLast {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .textAction {
    font-size: 14px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }

 .col-left-price{
  text-align: left;
 }  
 .row-second-price{
  padding-top:25px
 }
 .btn-price{
  padding-top:15px
 }
 .priceTotalTitle{
  font-weight:500;
  font-height:bold;
  font-size:24px;
  font-family: "Montserrat", sans-serif;
 }
 .text-totalprice{
  font-weight:400;
  font-height:bold;
  font-size:14px;
  font-family: "Montserrat", sans-serif;
 }
 .ship{
  height:30px;
  border : 20px;
  margin: 5px;
  border: 1px solid;
 }

@media (max-width: 1200px) {

  .btn-order{
    width:150px !important;
    margin-left:20px !important
  }
 }
 
 
@media (max-width: 767px) {

.title-price{
  display: none ! important;
}
.product-container  {
  display: grid;  
  margin-bottom: 16px; 
}
.product-name {
  width: 300px;
}
}

`;
