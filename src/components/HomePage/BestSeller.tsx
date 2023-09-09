import Box from "@component/Box";
import CategorySectionCreator from "../CategorySectionCreator";
import Card from "@component/Card";

function BestSeller() {
  return (
    <CategorySectionCreator
      iconName="light"
      title="Mua nhiều nhất "
      seeMoreLink="#"
    >
      <Box mt="-0.25rem" mb="-0.25rem">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexWrap: "wrap",
              marginRight: "-10px",
            }}
          >
            <Card
              style={{
                flexBasis: "calc(50% - 20px)",
                margin: "5px",
                height: "189px",
                width: "226px",
              }}
            >
              Card 1
            </Card>
            <Card
              style={{
                flexBasis: "calc(50% - 20px)",
                margin: "5px",
                height: "189px",
                width: "226px",
              }}
            >
              Card 2
            </Card>
            <Card
              style={{
                flexBasis: "calc(50% - 20px)",
                margin: "5px",
                height: "189px",
                width: "226px",
              }}
            >
              Card 3
            </Card>
            <Card
              style={{
                flexBasis: "calc(50% - 20px)",
                margin: "5px",
                height: "189px",
                width: "226px",
              }}
            >
              Card 4
            </Card>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "-10px",
            }}
          >
            <Card
              style={{
                flexBasis: "calc((100% / 3) - 20px)",
                margin: "10px",
                height: "392px",
                width: "245px",
              }}
            >
              Card 5
            </Card>
            <Card
              style={{
                flexBasis: "calc((100% / 3) - 20px)",
                margin: "10px",
                height: "392px",
                width: "245px",
              }}
            >
              Card 6
            </Card>
            <Card
              style={{
                flexBasis: "calc((100% / 3) - 20px)",
                margin: "10px",
                height: "392px",
                width: "245px",
              }}
            >
              Card 7
            </Card>
          </div>
        </div>
      </Box>
    </CategorySectionCreator>
  );
}

export default BestSeller;
