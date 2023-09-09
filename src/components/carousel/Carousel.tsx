import clsx from "clsx";
import { colorOptions } from "interfaces";
import 
{
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { Fragment } from "react";
import { CSSProperties } from "styled-components";
 
import { StyledCarousel } from "./CarouselStyle";

export interface CarouselProps {
  naturalSlideWidth?: number;
  naturalSlideHeight?: number;
  totalSlides?: number;
  visibleSlides?: number;
  currentSlide?: number;
  isIntrinsicHeight?: boolean;
  hasMasterSpinner?: boolean;
  infinite?: boolean;
  autoPlay?: boolean;
  step?: number;
  interval?: number;
  showDots?: boolean;
  showArrow?: boolean;
  showArrowOnHover?: boolean;
  dotClass?: string;
  dotColor?: string;
  dotGroupMarginTop?: string;
  spacing?: string;
  arrowButtonColor?: colorOptions;
  arrowButtonClass?: string;
  leftButtonClass?: string;
  rightButtonClass?: string;
  leftButtonStyle?: CSSProperties;
  rightButtonStyle?: CSSProperties;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  naturalSlideWidth,
  naturalSlideHeight,
  totalSlides,
  visibleSlides,
  currentSlide,
  isIntrinsicHeight,
  hasMasterSpinner,
  infinite,
  autoPlay,
  step,
  interval,
  showDots,
  showArrow,
  showArrowOnHover,
  dotColor,
  dotGroupMarginTop,
  spacing,
 
}) => {
  return (
    <StyledCarousel
      naturalSlideWidth={naturalSlideWidth}
      naturalSlideHeight={naturalSlideHeight}
      totalSlides={totalSlides}
      visibleSlides={visibleSlides}
      isIntrinsicHeight={isIntrinsicHeight}
      hasMasterSpinner={hasMasterSpinner}
      infinite={infinite}
      isPlaying={autoPlay}
      step={step}
      interval={interval}
      dotColor={dotColor}
      dotGroupMarginTop={dotGroupMarginTop}
      spacing={spacing}
      showDots={showDots}
      currentSlide={currentSlide}
      showArrowOnHover={showArrowOnHover}
    >
      <Slider className="custom-slider">
        {React.Children.map(children, (child, ind) => (
          <Slide index={ind}>{child}</Slide>
        ))}
      </Slider>

 

      {showArrow && (
        <Fragment>
     
        </Fragment>
      )}
    </StyledCarousel>
  );
};

const renderDots = ({
  step,
  currentSlide,
  visibleSlides,
  totalSlides,
  carouselStore,
}) => {
  const dots = [];
  const total = totalSlides - visibleSlides + 1;

  for (let i = 0; i < total; i += step) {
    dots.push(
      <div
        key={i}
        className={clsx({
          dot: true,
          "dot-active": currentSlide === i,
        })}
        onClick={() =>
          carouselStore.setStoreState({
            currentSlide: i,
            autoPlay: false,
          })
        }
      />
    );

    if (total - i - 1 < step && total - i - 1 !== 0) {
      dots.push(
        <div
          key={i + total}
          className={clsx({
            dot: true,
            "dot-active": currentSlide === totalSlides - visibleSlides,
          })}
          onClick={() =>
            carouselStore.setStoreState({
              currentSlide: totalSlides - visibleSlides,
              autoPlay: false,
            })
          }
        />
      );
    }
  }
  return dots;
};

Carousel.defaultProps = {
  naturalSlideWidth: 100,
  naturalSlideHeight: 125,
  totalSlides: 10,
  visibleSlides: 5,
  isIntrinsicHeight: true,
  hasMasterSpinner: false,
  infinite: false,
  autoPlay: false,
  step: 1,
  interval: 2000,
  showDots: false,
  showArrow: true,
  dotGroupMarginTop: "2rem",
  spacing: "1.5rem",
  arrowButtonColor: "secondary",
};

export default Carousel;
