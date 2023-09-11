import Box from "@component/Box";
import CategorySectionCreator from "../CategorySectionCreator";

function ButtonSearch() {
  return (
    <div>
      <Box mt="-0.25rem" mb="-0.25rem">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "169px",
              height: "43px",
              background: "#01ABEC",
              color: "white", 
              border: "none", 
              borderRadius : "5px"
            }}
          >
            Button 1
          </button>
          <button
            style={{
              marginLeft: "33px",
              width: "169px",
              height: "43px",
              background: "#01ABEC",
              color: "white", 
              border: "none", 
              borderRadius : "5px"
            }}
          >
            Button 2
          </button>
          <button
            style={{
              marginLeft: "33px",
              width: "169px",
              height: "43px",
              background: "#01ABEC",
              color: "white", 
              border: "none", 
              borderRadius : "5px"
            }}
          >
            Button 3
          </button>
          <div
            style={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <input
              type="text"
              placeholder="Search..."
              style={{ width: "383px" }}
            />
            <button
              style={{
                width: "169px",
                height: "43px",
                background: "#01ABEC",
                color: "white", 
                border: "none", 
                borderRadius : "5px"
              }}
            >
              Search
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default ButtonSearch;
