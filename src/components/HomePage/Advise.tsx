import Card from "@component/Card";
import React from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import Googlemap from "./Googlemaps";
import StyledHome from "./homepagecss/HomePage.style";
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const Advise: React.FC<HeaderProps> = ({  className }) => {
  return (
    <CategorySectionCreator>
         <StyledHome className={className}>
      <Card className="card-container">  
        <div className="card-content">
          <div className="left-column">
            <div>
              <h1 className="title">TƯ VẤN MIỄN PHÍ</h1>
              <h4>Vui lòng để lại thông tin để được tư vấn miễn phí</h4>
            </div>
            <div className="input-row">
              <input type="text" placeholder="Input 1" className="text-input" />
              <input type="text" placeholder="Input 2" className="text-input" />
            </div>
            <div className="textarea-row">
              <textarea placeholder="Input 3" rows={5} className="textarea"></textarea>
            </div>
            <div className="textarea-row">
              <textarea placeholder="Input 4" rows={5} className="textarea"></textarea>
            </div>
            <div className="textarea-row">
              <textarea placeholder="Input 5" rows={5} className="textarea"></textarea>
            </div>
            <div className="submit-row">
              <button className="submit-button">Submit</button>
            </div>
          </div>

          <div className="right-column">
            <Googlemap />
          </div>
        </div>
      </Card>
      </StyledHome>
    </CategorySectionCreator>
  );
}

export default Advise;
