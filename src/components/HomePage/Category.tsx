import React from "react";
import Card from "@component/Card";
import CategorySectionCreator from "../CategorySectionCreator";
import Icon1 from "@component/logo/logo1";
import Logo2 from "@component/logo/logo2";
import Logo4 from "@component/logo/logo4";
import Logo5 from "@component/logo/logo5";
import Logo6 from "@component/logo/logo6";

function Category() {
  return (
    <CategorySectionCreator>
      <Card className="mb-8 w-full h-56 rounded-3xl">
        <div className="flex items-center justify-center">
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="w-48 h-40 p-4 relative mt-54 flex items-center"> {/* Đặt marginTop thành 54px để lùi logo xuống 27px */}
              <div className="absolute top-0 left-0">
                <Icon1 />
              </div>
              <p className="ml-2">Text 1</p>
            </div>
            <div className="w-48 h-40 p-4 relative mt-54 flex items-center"> {/* Đặt marginTop thành 54px để lùi logo xuống 27px */}
              <div className="absolute top-0 left-0">
                <Logo2 />
              </div>
              <p className="ml-2">Text 1</p>
            </div>
            <div className="w-48 h-40 p-4 relative mt-54 flex items-center"> {/* Đặt marginTop thành 54px để lùi logo xuống 27px */}
              <div className="absolute top-0 left-0">
                <Icon1 />
              </div>
              <p className="ml-2">Text 1</p>
            </div>
            <div className="w-48 h-40 p-4 relative mt-54 flex items-center"> {/* Đặt marginTop thành 54px để lùi logo xuống 27px */}
              <div className="absolute top-0 left-0">
                <Logo4 />
              </div>
              <p className="ml-2">Text 4</p>
            </div>
            <div className="w-48 h-40 p-4 relative mt-54 flex items-center"> {/* Đặt marginTop thành 54px để lùi logo xuống 27px */}
              <div className="absolute top-0 left-0">
                <Logo5 />
              </div>
              <p className="ml-2">Text 5</p>
            </div>
            <div className="w-48 h-40 p-4 relative mt-54 flex items-center"> {/* Đặt marginTop thành 54px để lùi logo xuống 27px */}
              <div className="absolute top-0 left-0">
                <Logo6 />
              </div>
              <p className="ml-2">Text 6</p>
            </div>
          </div>
        </div>
      </Card>
    </CategorySectionCreator>
  );
}

export default Category;
