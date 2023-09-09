import Box from "@component/Box";
import CategorySectionCreator from "../CategorySectionCreator";
import Card from "@component/Card";

function Distribution() {
  return (
    <CategorySectionCreator iconName="light" seeMoreLink="#">
      <Box mt="-0.25rem" mb="-0.25rem">
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ padding: "10px", width: "40%", marginLeft: "17px" }}>
            <h1> Kênh phân phối chính</h1>
            <h5>Hơn 100 đại lý phân phối tại tất cả các tỉnh thành phố, giao hàng tận nơi bảo hành và hậu mãi chu đáo</h5>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  width: "136px",
                  height: "48px",
                }}
              >
                Get Started
              </button>
              <button
                style={{
                  width: "136px",
                  height: "48px",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "10px",
              width: "55%",
              marginLeft: "25px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Card
                style={{
                  width: "285px",
                  height: "200px",
                  padding: "10px",
                  marginRight: "15px",
                  marginBottom: "15px",
                  marginTop: "-15px",
                }}
              >
                Card 1
              </Card>
              <Card
                style={{
                  width: "285px",
                  height: "200px",
                  padding: "10px",
                  marginRight: "15px",
                  marginBottom: "15px",
                }}
              >
                Card 2
              </Card>
              <Card
                style={{
                  width: "285px",
                  height: "200px",
                  padding: "10px",
                  marginRight: "15px",
                  marginBottom: "15px",
                  marginTop: "-15px", 
                }}
              >
                Card 3
              </Card>
              <Card
                style={{
                  width: "285px",
                  height: "200px",
                  padding: "10px",
                  marginRight: "15px",
                  marginBottom: "15px",
                }}
              >
                Card 4
              </Card>
            </div>
          </div>
        </div>
      </Box>
    </CategorySectionCreator>
  );
}

export default Distribution;
