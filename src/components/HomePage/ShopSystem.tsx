import Box from "@component/Box";
import CategorySectionCreator from "../CategorySectionCreator";
import Card from "@component/Card";

function ShopSystem() {
  return (
    <CategorySectionCreator iconName="light" seeMoreLink="#">
      <Box mt="-0.25rem" mb="-0.25rem">
        <div>
          <h1 style={{marginLeft:"25px"}}>Hệ Thống Cửa Hàng</h1>
          <div style={{ display: "flex" }}>
            <Card
              style={{
                flex: "1",
                padding: "10px",
                width: "387px",
                height: "674px",
                marginRight: "30px", // Khoảng cách bên phải giữa các thẻ Card
              }}
            >
              Card 1
            </Card>
            <Card
              style={{
                flex: "1",
                padding: "10px",
                width: "387px",
                height: "674px",
                marginRight: "30px",
              }}
            >
              Card 2
            </Card>
            <Card
              style={{
                flex: "1",
                padding: "10px",
                width: "387px",
                height: "674px",
              }}
            >
              Card 3
            </Card>
          </div>
        </div>
      </Box>
    </CategorySectionCreator>
  );
}

export default ShopSystem;
