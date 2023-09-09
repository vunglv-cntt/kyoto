import styled from "styled-components";

export const StyledCarouselCard1 = styled.div`
  .image-header {
    width: 100%;
  }
  /* Banner.css */
  .banner-container {
    position: relative;
    width: 100%;
  }

  .banner-image {
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: rgba(0, 173, 239, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
  }

  .content {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .banner-text {
    color: white;
    margin-left: 75px;
    position: relative;
    z-index: 2; 
  }

  .banner-button {
    background-color: #ffcf01;
    width: 136px;
    height: 48px;
    color: white;
    margin-left: 75px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius :5px;
    margin-top: 10px;  
  }
  .banner-button-1 {
    background-color: rgba(0, 173, 239, 0.2);
    color: white;
    width: 136px;
    height: 48px;
    margin-left: 40px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    border-radius :5px;
    border: 2px solid white;  
  }

  .banner-button:hover {
    background-color: #0079b6;
  }
  text-align: left;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;

  // .title {
  //   font-size: 50px;
  //   margin-top: 0px;
  //   margin-bottom: 1.35rem;
  //   line-height: 1.2;
  // }

  // .image-holder {
  //   position: relative;
  //   //   width: 50%;
  //   img {
  //     width: 100%;
  //   }
  // }

  // @media only screen and (max-width: 900px) {
  //   margin-left: 0px;
  //   padding-left: 0px;

  //   .title {
  //     font-size: 32px;
  //   }
  // }

  // @media only screen and (max-width: 425px) {
  //   .title {
  //     font-size: 16px;
  //   }
  //   .title + * {
  //     font-size: 13px;
  //   }
  //   .button-link {
  //     padding: 0.66rem 0.95rem;
  //     font-size: 13px;
  //   }
  // }
`;
